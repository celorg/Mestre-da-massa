<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class LogAdmAcessoMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $nivel = auth()->user()->nivel;
        
        if($nivel == 'adm'){
            return $next($request);
        }else{
            return redirect()->route('dashboard');
        }
        
    }
}
