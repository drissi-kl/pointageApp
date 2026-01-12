<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExceptionalTime extends Model
{
    use HasFactory;

    protected $table = "exceptional_times";

    protected $fillable = [ "dayName", "arrivalTime", "user_id"];

}
