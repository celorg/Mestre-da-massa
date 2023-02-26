<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Pedido;
use App\Models\Produto;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller
{

    public function index()
    {
        return Inertia::render('Home',[]);
    }

    public function dashboard()
    {
        return Inertia::render('Dashboard',[]);

    }

    public function cardapio($categoria)
    {
        if($categoria == 'pizza'){
            return Inertia::render('Cardapio',[
                'produtos' => Produto::where('categoria',$categoria)->get(['id','nome','ingredientes','preco_pizza']),
            ]);
        
        }elseif($categoria == 'esfiha'){
            return Inertia::render('Cardapio',[
                'produtos' => Produto::where('categoria',$categoria)->get(['id','nome','ingredientes','preco_pizza']),
            ]);
        
        }elseif($categoria == 'bebida'){
            return Inertia::render('Cardapio',[
                'produtos' => Produto::where('categoria',$categoria)->get(['id','nome','ingredientes','preco_pizza']),
            ]);
        }else{
            return Inertia::render('Cardapio',[
                'produtos' => Produto::get(['id','nome','ingredientes','preco_pizza']),
            ]);
        }
        
    }

    public function criarPedido()
    {
        return Inertia::render('CriarPedido', []);
    }
    
    public function enviarPedido(Request $request ,Pedido $pedido)
    {
        Pedido::create($request->all());
        return to_route('dashboard');
    }

    public function informacoes()
    {
        return Inertia::render('Informacoes', []);
    }
    

}
