<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TimeSheet extends Model
{
    use HasFactory;

    protected $table = "time_sheets";

    protected $fillable = ["arrivalTime", "beforeBreak", "afterBreak", "departureTime", "late", "sick", "holiday", "user_id"];

}
