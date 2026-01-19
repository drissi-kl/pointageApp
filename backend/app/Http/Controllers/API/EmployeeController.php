<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{



    public function delete($id){
        try{
            $user = User::find($id);
            if(!$user){
                return response()->json([
                    'status'=>'fail',
                    'message'=>'this employee not exists'
                ]);    
            }

            if($user->role !== 'employee'){
                return response()->json([
                    'status'=>'fail',
                    'message'=>"this user not employee, it is $user->role"
                ]); 
            }

            $user->delete();
            return response()->json([
                'status'=>'success',
                'message'=>"delete employee $user->name successfully"
            ]);

        }catch(Exception $e){
            return response()->json([
                'status'=>'error',
                'message'=>$e->getMessage()
            ]);
        }
    }
}
