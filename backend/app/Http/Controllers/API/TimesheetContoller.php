<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\TimeSheet;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use function Illuminate\Support\now;

class TimesheetContoller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try{
            $timesheet = TimeSheet::all();
            return response()->json([
                'status' => 'success',
                'data' => $timesheet
            ]);

        }catch(Exception $e){
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try{
            $empInfo = $request->validate([
                'name' => 'required|string',
                'email' => 'required|string',
                'created_at' => 'required'
            ]);

            $user = User::where('name', $empInfo['name'])
                    ->where('email', $empInfo['email'])
                    ->where('created_at', $empInfo['created_at'])
                    ->first();


            if($user){
                $timesheet = TimeSheet::where('user_id', $user->id)
                ->whereDate('created_at', now()->format('Y-m-d'))
                ->first();
                if(!$timesheet){
                    $newTimeSheet = TimeSheet::create([
                        'user_id' => $user->id,
                        'arrivalTime' => now()
                    ]);

                    return response()->json([
                        'status' => 'success',
                        'message' => 'Arrival time has been successfully recorded',
                        'scanner' => $newTimeSheet
                    ]);

                }else if(!$timesheet->beforeBreak){
                    $timesheet->beforeBreak = now();
                    $timesheet->save();
                    return response()->json([
                        'status' => 'success',
                        'message' => 'Before break time has been successfully recorded',
                        'scanner' => $timesheet
                    ]);

                }else if(!$timesheet->afterBreak){
                    $timesheet->afterBreak = now();
                    $timesheet->save();
                    return response()->json([
                        'status' => 'success',
                        'message' => 'After break time has been successfully recorded',
                        'scanner' => $timesheet
                    ]);

                }else if(!$timesheet->departureTime){
                    $timesheet->departureTime = now();
                    $timesheet->save();
                    return response()->json([
                        'status' => 'success',
                        'message' => 'Departure time has been successfully recorded',
                        'scanner' => $timesheet
                    ]);

                }else{
                    return response()->json([
                        'status' => 'fail',
                        'message' => 'this scann not allowed, max scann is 4'
                    ]);
                }


            }else{
                return response()->json([
                    "status" => "fail",
                    "message" => "your information not correct"
                ]);
            }

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
}
