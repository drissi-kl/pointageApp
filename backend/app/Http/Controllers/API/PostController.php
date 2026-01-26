<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Exception;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try{
            $posts = Post::all();
            return response()->json([
                'status' => 'success',
                'posts' => $posts
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
            $formField = $request->validate([
                'name'=>'required|string|min:2',
                "arrivalTime" => "required|date_format:H:i"
            ]);

            $post = Post::create($formField);
            return response()->json([
                'status' => 'success',
                'message' => "create post ".$post->name." successful",
                'post' => $post
            ]);

        }catch(Exception $e){
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    // public function show(string $id)
    // {
    //     try{
    //         $post = Post::find($id);
    //         if(!$post){
    //             return response()->json([
    //                 'status' => 'fail',
    //                 'message' => 'this post not exists'
    //             ]);
    //         }
    //         return response()->json([
    //             'status' => 'success',
    //             'post' => $post
    //         ]);

    //     }catch(Exception $e){
    //         return response()->json([
    //             'status' => 'error',
    //             'message' => $e->getMessage()
    //         ]);
    //     }
    // }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try{
            $formField = $request->all();

            $post = Post::find($id);
            if(!$post){
                return response()->json([
                    'status' => 'fail',
                    'message' => "not exists this post",
                ]);
            }
            $post->fill($formField);
            $post->save();
            return response()->json([
                'status' => 'success',
                'message' => "update post successful",
            ]);

        }catch(Exception $e){
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try{
            $post = Post::find($id);
            if(!$post){
                return response()->json([
                    'status' => 'fail',
                    'message' => "not exists this post"
                ]);
            }
            $post->delete();
            return response()->json([
                'status' => 'success',
                'message' => "delete post ".$post->name." successful",
            ]);

        }catch(Exception $e){
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ]);
        }
    }
}
