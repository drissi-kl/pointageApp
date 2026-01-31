<?php

namespace Database\Seeders;

use App\Models\TimeSheet;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TimesheetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::find(2);
        $created = Carbon::now();
        for($i=0; $i<10; $i++){
            $created->addDays(1);
            TimeSheet::create([
                "arrivalTime" => Carbon::parse("08:30")->format('H:i:s'), 
                "beforeBreak" => Carbon::parse("01:00:00")->format('H:i:s'), 
                "afterBreak" => Carbon::parse("02:00:00")->format('H:i:s'), 
                "departureTime" => Carbon::parse("18:30:00")->format('H:i:s'), 
                "late" => false, 
                "sick" => false, 
                "holiday" => false, 
                "user_id" => $user->id,
                "created_at" => $created,
                "updated_at" => $created
            ]);
        }


    }
}
