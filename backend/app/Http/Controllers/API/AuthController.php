<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use \Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
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

            $user = User::create($formFields);



            return response()->json([
                    "status" => "success",
                    "message" => "create super admin ".$user->name." successful"
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

            $token = $user->createToken('api_token')->plainTextToken;
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
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try{
            $formFields = $request->validate([
                "name"=>'required|string',
                "email"=>'required|email',
                "password"=>"required|confirmed",
                "role"=>"required|in:superadmin,admin,employee"
            ]);

            return $request->all();

            $user = User::where('email', $formFields['email'])->first();
            if($user){
                return response()->json([
                    "status" => "fail",
                    "message" => "this email elready exists, user other"
                ]);
            }

            $formFields['password'] = Hash::make($formFields['password']);

            if($formFields['role'] == "employee"){

                if(!$request->filled('code')){
                    return response()->json([
                        "status" => "fail",
                        "message" => "for create an employee, must be exists a code for scan"
                    ]);
                }
                if(!$request->filled('post_id')){
                    return response()->json([
                        "status" => "fail",
                        "message" => "for create an employee must be selected any post that he belongs"
                    ]);
                }
                $user = User::create($formFields);
                $formFields['post_id'] = $request->input('post_id');
                $formFields['code'] = $request->input('code');
                $formFields['user_id'] = $user->id;
                $employee = Employee::create($formFields);

                return response()->json([
                    "status" => "success",
                    "message" => "create employee ".$user->name." success"
                ]);
            }else if($formFields['role'] == "admin" ){
                $user = User::create($formFields);
                return response()->json([
                    "status" => "success",
                    "message" => "create admin ".$user->name." success"
                ]);
            }



        }catch(Exception $e){
            return response()->json([
                "status"=>"error",
                "message"=>$e->getMessage()
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
