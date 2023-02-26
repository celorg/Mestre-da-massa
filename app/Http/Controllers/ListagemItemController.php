<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Produto;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ListagemItemController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }


    public function listarItem($categoria){
        
        if($categoria == 'pizza'){
            return Inertia::render('ShowItens',[
                'produtos' => Produto::where('categoria',$categoria)->get(['id','nome']),
            ]);
        
        }elseif($categoria == 'esfiha'){
            return Inertia::render('ShowItem',[
                'produtos' => Produto::where('categoria',$categoria)->get(['id','nome']),
            ]);
        
        }elseif($categoria == 'bebidas'){
            return Inertia::render('ShowItem',[
                'produtos' => Produto::where('categoria',$categoria)->get(['id','nome']),
            ]);
        }
    }



    public function listarSearch(Request $request){
        return Inertia::render('Search', [
            'produtos' => Produto::where('nome','like',$request->query)
        ]);
    }

}
