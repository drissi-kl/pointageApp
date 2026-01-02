<?php
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\PostController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

use App\Http\Middleware\isSuperAdminOrAdmin;


// auth routes
Route::controller(AuthController::class)->group(function(){
    Route::post('/register', "register");
    Route::post('/store', "store");
    Route::post('/', "login");
});

Route::middleware("auth:sanctum")->controller(AuthController::class)->group(function(){
    Route::get("/currentUser", "currentUser");
    Route::post('/logout', "logout");
});


// post routes

Route::middleware(['auth:sanctum'])->controller(PostController::class)->group(function(){
    // Route::middleware(isUserAdminOrAdmin::class);
    Route::middleware(isSuperAdminOrAdmin::class)->get('/posts', "index");
    Route::post('/posts', "store");
    Route::get('/posts/{id}', "show");
    Route::put('/posts/{id}', "update");
    Route::delete('/posts/{id}', "destroy");
})
;




