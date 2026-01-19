<?php

namespace Database\Seeders;

use App\Models\Employee;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name'=>"user empl1",
                'email' => "userempl1999@gmail.com",
                'password' => 'userempl1999@gmail.com',
                'role' => 'employee'
            ],[
                'name'=>"user empl2",
                'email' => "userempl2@gmail.com",
                'password' => 'userempl2@gmail.com',
                'role' => 'employee'
            ],[
                'name'=>"user empl3",
                'email' => "userempl3@gmail.com",
                'password' => 'userempl3@gmail.com',
                'role' => 'employee'
            ],[
                'name'=>"user empl4",
                'email' => "userempl4@gmail.com",
                'password' => 'userempl4@gmail.com',
                'role' => 'employee'
            ],[
                'name'=>"user empl5",
                'email' => "userempl5@gmail.com",
                'password' => 'userempl5@gmail.com',
                'role' => 'employee'
            ]
        ];

        foreach($users as $user){
            $newUser = User::create($user);

            $employee=[
                'user_id' => $newUser->id,
                'post_id' => Post::inRandomOrder()->first()->id,
                'code' => $newUser->email."123456789"
            ];
            
            Employee::create($employee);
            
        }

    }
}
