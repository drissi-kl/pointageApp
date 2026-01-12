<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class checkRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$roles): Response
    {
        if(count($roles) == 0){
            return response()->json({
                'message' => 'please send any roles'
            }) ;
        }
        // $user = $request->user();
        // if( !in_array($user->role, $roles)){
        //     return 'not good';
        // }
        // dd('good');
        return $next($request);
    }
}
