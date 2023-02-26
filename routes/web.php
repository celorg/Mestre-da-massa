<?php

use App\Http\Controllers\AdministracaoController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProdutosController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//Inicio
Route::get('/', [App\Http\Controllers\PagesController::class, 'index'])->name('home');
Route::get('/informacoes', [App\Http\Controllers\PagesController::class, 'informacoes'])->name('informacoes');

// Auth::routes('',[])

// Registration Routes...
Route::get('/register', [App\Http\Controllers\Auth\RegisterController::class, 'showRegistrationForm'])->name('register');
Route::post('/register', [App\Http\Controllers\Auth\RegisterController::class, 'register']);

//Login
Route::get('/logout', [App\Http\Controllers\Auth\LoginController::class, 'logout'])->name('logout');
Route::get('/login', [App\Http\Controllers\Auth\LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [App\Http\Controllers\Auth\LoginController::class, 'login']);

//Reset Password
Route::get('/password/reset', [App\Http\Controllers\Auth\ForgotPasswordController::class, 'showLinkRequestForm'])->name('password.request');
Route::post('/password/email', [App\Http\Controllers\Auth\ForgotPasswordController::class, 'sendResetLinkEmail'])->name('password.email');
Route::get('/password/reset/{token}', [App\Http\Controllers\Auth\ResetPasswordController::class, 'showResetForm'])->name('password.reset');
Route::post('/password/reset', [App\Http\Controllers\Auth\ResetPasswordController::class , 'reset'])->name('password.update');


//Grupo para os autenticados
Route::middleware('auth')->group(function (){
    Route::get('/dashboard', [App\Http\Controllers\PagesController::class, 'dashboard'])->name('dashboard');
    Route::get('/criarpedido', [App\Http\Controllers\PagesController::class, 'criarPedido'])->name('criar.pedido');
    Route::post('/criarpedido', [App\Http\Controllers\PagesController::class, 'enviarPedido']);
    Route::get('/cardapio/{categoria}', [App\Http\Controllers\PagesController::class, 'cardapio'])->name('cardapio');
});


//Grupo da area de administração
Route::middleware('auth','acesso.adm')->group(function(){
    Route::resource('administracao',AdministracaoController::class);
    Route::resource('produtos', ProdutosController::class);
    
    //Listagem Pizza
    Route::get('/admpizza/{categoria}', [App\Http\Controllers\ListagemItemController::class, 'listarItem'])->name('listarItem');
    //Pedidos
    Route::get('/pedidos',[App\Http\Controllers\PedidosController::class, 'index'])->name('pedidos');

    //Search
    Route::get('/search',[App\Http\Controllers\ListagemItemController::class,'listarSearch'])->name('search');
    Route::post('/search/{produto}', [App\Http\Controllers\ListagemItemController::class, 'search']);
    
});



