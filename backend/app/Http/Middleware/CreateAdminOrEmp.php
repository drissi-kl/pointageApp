<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CreateAdminOrEmp
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $role = $request->input('role');
        $curUser = $request->user();

        if($role == 'admin'){
            if($curUser->role != 'superadmin'){
                return response()->json([
                    'status'=>'fail',
                    "message"=>"you are not allowed to create admin"
                ]);
            }
        }

        if($role == 'employee'){
            if($curUser->role == 'employee'){
                return response()->json([
                    'status'=>'fail',
                    "message"=>"you are not allowed to create employee"
                ]);
            }
        }
        return $next($request);
    }
}
