<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class EmployeeController extends Controller
{

    public function index(){
        try{
            $employees = User::where('role', 'employee')
                    ->with('employee')
                    ->with('timesheet')
                    ->with('post')
                    ->with('exceptionalTimes')
                    ->get();
            
            
            return response()->json([
                'status' => 'success',
                'employees' => $employees
            ]);
        }catch(Exception $e){
            return response()->json([
                'status'=>'error',
                'message'=>$e->getMessage()
            ]);
        }
    }


    public function store(Request $request)
    {
        try{
            $formFields = $request->validate([
                "name"=>"required|string",
                "email"=>"required|email",
                "phone"=>"required|string",
                "address"=>"string",
                "role"=>"required"
            ]);

            $user = User::where('email', $formFields['email'])->first();
            if($user){
                return response()->json([
                    "status" => "fail",
                    "message" => "this email elready exists, use other"
                ]);
            }

            if(!$request->filled('post')){
                return response()->json([
                    "status" => "fail",
                    "message" => "for create an employee must be selected any post that he belongs"
                ]);
            }

            $formFields['password'] = Hash::make("user");

            
            $user = User::create($formFields);
            $formFields['code'] = '{"id":'.$user->id.',"name":"'.$user->name.'","email":"'.$user->email.'","createdAt":"'.$user->created_at.'"}';
            $formFields['post_id'] = $request->input('post');
            $formFields['user_id'] = $user->id;
            $employee = Employee::create($formFields);
            $user->load('employee');

            return response()->json([
                "status" => "success",
                "message" => "create employee ".$user->name." success",
                "employee" => $user
            ]);
           

        }catch(Exception $e){
            return response()->json([
                "status"=>"error",
                "message"=>$e->getMessage()
            ]);
        }
    }


    public function delete($id){
        try{
            $user = User::find($id);
            if(!$user){
                return response()->json([
                    'status'=>'fail',
                    'message'=>'this employee not exists'
                ]);    
            }

            $user->delete();
            return response()->json([
                'status'=>'success',
                'message'=>"delete employee $user->name successfully",
            ]);

        }catch(Exception $e){
            return response()->json([
                'status'=>'error',
                'message'=>$e->getMessage()
            ]);
        }
    }
}
