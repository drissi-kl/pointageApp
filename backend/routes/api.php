<?php
use App\Http\Controllers\API\AdminController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\EmployeeController;
use App\Http\Controllers\API\ExceptionalTimeController;
use App\Http\Controllers\API\PostController;
use App\Http\Controllers\API\TimesheetContoller;
use App\Models\ExceptionalTime;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

use App\Http\Middleware\isSuperAdminOrAdmin;
use App\Http\Middleware\createAdimOrEmp;


// ## start auth routes ##
Route::controller(AuthController::class)->group(function(){
    Route::post('/register', "register");
    Route::post('/store', "store");
    Route::post('/login', "login");
    Route::post('/forgetPassword', "forgetPassword");
    Route::post('/resetPassword', "resetPassword");
});

Route::middleware(["auth:sanctum"])->controller( AuthController::class)->group(function(){
    Route::get("/currentUser",  "currentUser");
    Route::post("/logout", "logout");
    Route::middleware(["createAdminOrEmp"])->post('/store', "store");
});
// ## end auth routes ##



// ## start admin routes
Route::middleware('auth:sanctum')->controller(AdminController::class)->group(function(){
    Route::get('/admins', 'index');
});
// ## end admin routes

// ## start employee routes
Route::middleware('auth:sanctum')->controller(EmployeeController::class)->group(function(){
    Route::get('/employees', 'index');
});
// ## end employee routes



// ## start post routes ##
Route::middleware(['auth:sanctum', 'isSuperAdminOrAdmin'])->controller(PostController::class)->group(function(){
    // Route::middleware(isUserAdminOrAdmin::class);
    Route::get('/posts', "index");
    Route::get('/posts/{id}', "show");
    Route::post('/posts', "store");
    Route::put('/posts/{id}', "update");
    Route::delete('/posts/{id}', "destroy");
});

// ## end post routes ##



// ## start exceptional time
Route::middleware(['auth:sanctum'])->controller(ExceptionalTimeController::class)->group(function(){
    Route::post("/exceptionalTimes", "store");
    Route::put("/exceptionalTimes/{id}", "update");
    Route::delete("/exceptionalTimes/{id}", 'destroy');
    Route::get("/exceptionalTimes", 'index');
});
// ## end exceptional time



// ## start scan routes
Route::controller(TimesheetContoller::class)->group(function(){
    Route::get("/timesheet", "index");
});
// ## end scan routes



// Route::middleware(['checkRole'])->get('/ddd', function(){
//     return response()->json(['goal'=>'test middleware']);
// });





