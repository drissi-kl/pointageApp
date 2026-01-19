<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name'=>"drissi rokaya",
                'email' => "drissirokaya999@gmail.com",
                'password' => 'drissirokaya999@gmail.com',
                'role' => 'admin'
            ],[
                'name'=>"drissi bokaya",
                'email' => "drissibokaya999@gmail.com",
                'password' => 'drissibokaya999@gmail.com',
                'role' => 'admin'
            ]
        ];

        foreach($users as $user){
            $user = User::create($user);
        }

    }
}
