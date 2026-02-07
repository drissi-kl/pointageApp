<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Mail\ForgetPasswordMail;
use App\Models\Employee;
use App\Models\Post;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use \Illuminate\Support\Facades\Auth;
use Mail;

class AuthController extends Controller
{

    private function generateCode()
    {
        $code = collect(range(0, 1000))->random(10)->implode('');
        $validationCode = substr($code, 0, 6);
        return $validationCode;
    }

    private function sendEmail($user){
        $mailer = new ForgetPasswordMail($user);
        Mail::to($user->email)->send($mailer);
    }



    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }


    /**
     * Register a newly created only super admin.
     */
    public function register(Request $request){
        try{

            $formFields = $request->validate([
                "name"=>'required|string',
                "email"=>'required|email',
                "password"=>"required|confirmed",
                "role"=>"required",
            ]);

            if($formFields['role'] != "superadmin"){
                return response()->json([
                    'status' => 'fail',
                    "message" => 'role must be superadmin'
                ]);
            }

            $user = User::where('email', $formFields['email'])->first();
            if($user){
                return response()->json([
                    'status' => 'fail',
                    "message" => 'this email already userd, use other email'
                ]);
            }

            $user = User::create($formFields);
            $token = $user->createToken('pointage-app')->plainTextToken;
            

            return response()->json([
                "status" => "success",
                "message" => "create super admin ".$user->name." successful",
                "token" => $token
            ]);

        }catch(Exception $e){
            return response()->json([
                "status" => "error",
                "message" => $e->getMessage()
            ]);
        }
    }







    /**
     * Login for entry into system.
     */
    public function login(Request $request){
        try{
            $formFields = $request->validate([
                'email' => "required|email",
                'password' => "required"
            ]);

            $user = User::where('email', $formFields['email'])->first();

            if(!$user || !Hash::check($formFields['password'], $user->password)){
                return response()->json([
                    "status" => "fail",
                    "message" => "email or password not correct"
                ]);
            }

            $token = $user->createToken('pointageApp')->plainTextToken;

            return response()->json([
                "status" => "success",
                "message" => "login successful",
                "token" => $token
            ]);
                
        }catch(Exception $e){
            return response()->json([
                "status" => "error",
                "message" => $e->getMessage()
            ]);
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }


    /**
     * forgite password .
     */
    public function forgetPassword(Request $request)
    {
        try{
            $formField = $request->validate([
                'email'=>'required'
            ]);

            $user = User::where('email', $formField['email'])->first();

            if(!$user){
                return response()->json([
                    'status' => 'fail',
                    'message' => 'this email not exists'
                ]);    
            }

            $user->code = $this->generateCode();
            $user->save();

            $this->sendEmail($user);

            return response()->json([
                "status" => "success",
                "message" => "check your email, we send a code for achieve you are owner for this account"
            ]);

        }catch(Exception $e){
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ]);
        }
    }


    public function resetPassword(Request $request){
        try{
            $formFields = $request->validate([
                'email'=>'required',
                'code'=>'required',
                'password'=>'required|confirmed'
            ]);

            $user = User::where('email', $formFields['email'])
                ->where('code', $formFields['code'])
                ->first();
            
            if(!$user){
                return response()->json([
                    'status'=>'fail',
                    'message'=>'code not correct'
                ]);    
            }

            
            $now = Carbon::now();
            $updated_at =Carbon::parse($user->updated_at);
            $periode = $updated_at->diffInMinutes($now);

            if($periode > 2){
                $code = $this->generateCode();
                $user->code = $code;
                $user->save();
                $this->sendEmail($user);
                return response()->json([
                    'status'=>'fail',
                    'message'=>'code is expired, check your email for new verification code'
                ]);
            }
            
            $user->password = Hash::make($formFields['password']);
            $user->code = null;
            $user->save();

            return response()->json([
                'status'=>'success',
                'message'=>'your password is updated, now try to login by it'
            ]);  

        }catch(Exception $e){
            return response()->json([
                'status'=>'error',
                'message'=>$e->getMessage()
            ]);
        }
    }


    public function currentUser(Request $request){
        try{
            $curuser = $request->user();

            return response()->json([
                'status'=>'success',
                'user' => $curuser
            ]);
            
        }catch(Exception $e){
            return response()->json([
                'status'=>'error',
                'message'=>$e->getMessage()
            ]);
        }
    }



    public function logout(Request $request){
        try{
            if($request->user()){
                $request->user()->currentAccessToken()->delete();
                return response()->json([
                    "status" => "success",
                    "message" => "logout operation successful"
                ]);

            }else{
                return response()->json([
                    'status' => 'fail',
                    'message' => 'not exists any user logged'
                ]);
            }

        }catch(Exception $e){
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ]);
        }
    }



}
