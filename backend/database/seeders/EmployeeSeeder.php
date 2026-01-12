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
        $formFields1 = [
            'name'=>"drissi karim",
            'email' => "drissikarim999@gmail.com",
            'password' => 'drissikarim999@gmail.com',
            'role' => 'employee',
        ];

        $user = User::create($formFields1);

        $formFields2=[
            'user_id' => $user->id,
            'post_id' => Post::inRandomOrder()->first()->id,
            'code' => "drissikarim999@gmail.com123456789"
        ];
        
        Employee::create($formFields2);
    }
}
