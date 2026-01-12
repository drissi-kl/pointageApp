<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $posts = [
            [
                'name' => 'developer',
                'arrivalTime' => '09:00'
            ],
            [
                'name' => 'UI/UX',
                'arrivalTime' => '08:00'
            ]
        ];
        foreach($posts as $post){
            Post::create($post);
        }
    }
}
