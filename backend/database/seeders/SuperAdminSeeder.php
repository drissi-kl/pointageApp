<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SuperAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $formFields = [
            'name'=>"drissi abderrahmane",
            'email' => "drissiabderrahmane999@gmail.com",
            'password' => 'drissiabderrahmane999@gmail.com',
            'role' => 'superadmin'
        ];

        User::create($formFields);
    }
}
