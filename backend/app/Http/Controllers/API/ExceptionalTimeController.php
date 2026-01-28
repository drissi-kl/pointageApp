<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ExceptionalTime;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;

class ExceptionalTimeController extends Controller
{
    public function index(){
        try{
            $expTimes = ExceptionalTime::all();
            return response()->json([
                'status' => 'success',
                "allExceptionalTime" => $expTimes
            ]);
        }catch(Exception $e){
            return response()->json([
                'status' => 'error',
                "message" => $e->getMessage()
            ]);
        }
    }


    // store function for create new exceptional time for user 
    public function store(Request $request){
        try{
            $formFields = $request->validate([
                'dayName' => "required|in:Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday",
                "arrivalTime" => "required|date_format:H:i",
                "user_id" => "required"
            ]);

            $excTime = ExceptionalTime::where('user_id', $formFields['user_id'])
                ->where('dayName', $formFields['dayName'])
                ->get();

            if($excTime){
                return response()->json([
                    "status" => "fail",
                    "message" => "this user already has exceptional time in ".$formFields['dayName']
                ]); 
            }

            $user = User::find($formFields['user_id']);
            if(!$user){
                return response()->json([
                    'status' => 'fail',
                    "message" => "this user not exists !!"
                ]);   
            }

            $exceptionalTime = ExceptionalTime::create($formFields);

            return response()->json([
                'status' => 'success',
                "message" => "create exceptional time for ".$user->name." successful",
                "exceptionalTime" => $exceptionalTime
            ]);

        }catch(Exception $e){
            return response()->json([
                'status' => 'error',
                "message" => $e->getMessage()
            ]);
        }
    }

    
    // update function for modify an exceptional time for user 
    public function update(Request $request, $id){
        try{
            $formFields = $request->validate([
                'dayName' => "in:Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday",
                "arrivalTime" => "date_format:H:i"
            ]);


            $exceptionalTime = ExceptionalTime::find($id);

            if(!$exceptionalTime){
                return response()->json([
                    'status' => 'fail',
                    "message" => "this exceptionalTime not exists !!"
                ]);   
            }

            $exceptionalTime->fill($formFields);
            $exceptionalTime->save();

            return response()->json([
                'status' => 'success',
                "message" => "update exceptional time successful"
            ]);
        }catch(Exception $e){
            return response()->json([
                'status' => 'error',
                "message" => $e->getMessage()
            ]);
        }
    }



    // destroy function for delete an exceptional time for user 
    public function destroy(Request $request, $id){
        try{
            $exceptionalTime = ExceptionalTime::find($id);

            if(!$exceptionalTime){
                return response()->json([
                    'status' => 'fail',
                    "message" => "this exceptionalTime not exists !!"
                ]);   
            }

            $exceptionalTime->delete();

            return response()->json([
                'status' => 'success',
                "message" => "delete exceptional time successful"
            ]);
        }catch(Exception $e){
            return response()->json([
                'status' => 'error',
                "message" => $e->getMessage()
            ]);
        }
    }


}
