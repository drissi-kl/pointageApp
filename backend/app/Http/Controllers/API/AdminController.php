<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function index(){
        try{
            $admins = User::where('role', 'admin')
                    ->with('timesheet')
                    ->get();

            return response()->json([
                'status'=>'success',
                'admins'=>$admins
            ]);
        }catch(Exception $e){
            return response()->json([
                'status'=>'error',
                'message'=>$e->getMessage()
            ]);
        }
    }

    public function store(Request $request){
        try{
            $formField = $request->validate([
                "email" => "required|string|email",
                "name" => "required|string",
                "phone" => "string",
                "address" => "string",
                "role" => "admin"
            ]);

            $user = User::create($formField);


            return response()->json([
                'status'=>'success',
                'message'=>"create admin $user->name successfully"
            ]);

        }catch(Exception $e){
            return response()->json([
                'status'=>'error',
                'message'=>$e->getMessage()
            ]);
        }
    }

    public function update(Request $request, $id){
        try{
            $formFields = [
                'name'=>'string',
                'phone'=>'string',
                'password'=>'password'
            ];

            if($formFields['password']){
                $formFields['password']=Hash::make($request->input('password'));
            }else{
                unset($formFields['password']);
            }

            $user=User::find($id);
            if(!$user){
                return response()->json([
                    'status'=>'fail',
                    'message'=>'this admin not exists'
                ]);    
            }

            $user->fill($formFields);
            $user->save();

            return response()->json([
                'status'=>'success',
                'message'=>"delete admin $user->name successfully"
            ]);

        }catch(Exception $e){
            return response()->json([
                'status'=>'error',
                'message'=>$e->getMessage()
            ]);
        }
    }

    public function delete($id){
        try{
            $user = User::find($id);
            if(!$user){
                return response()->json([
                    'status'=>'fail',
                    'message'=>'this admin not exists'
                ]);    
            }

            if($user->role == 'admin'){
                return response()->json([
                    'status'=>'fail',
                    'message'=>"this user not admin, it is $user->role"
                ]); 
            }

            $user->delete();
            return response()->json([
                'status'=>'success',
                'message'=>"delete admin $user->name successfully"
            ]);

        }catch(Exception $e){
            return response()->json([
                'status'=>'error',
                'message'=>$e->getMessage()
            ]);
        }
    }
}
