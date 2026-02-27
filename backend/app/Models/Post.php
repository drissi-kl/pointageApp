<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $table = "posts";
    protected $fillable = ['name', 'arrivalTime', 'dailyHours'];

    public function employees(){
        return $this->hasMany(Employee::class);
    }
    
}
