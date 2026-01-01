<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try{
            $formFields = $request->validate([
                "name"=>'required|string',
                "email"=>'required|email',
                "password"=>"required|confirmed",
                "role"=>"required|in:superadmin,admin,employee",
                "code"=>"string"
            ]);

            if($formFields['role'] == "employee" && !$request->filled('code')){
                return response()->json([
                    "status" => "fail",
                    "message" => "for create an employee, must be exists a code for scan"
                ]);
            }

            $formFields['password'] = Hash::make($formFields['password']);

            $user = User::create($formFields);
            $formFields['user_id'] = $user->id;
            $employee = Employee::create($formFields);


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
}
