<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Categoria;
use App\Models\Produto;
use App\Models\Tipo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProdutosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function __construct()
    {
        $this->middleware('auth');
    }


    public function index()
    {
        
        return Inertia::render('Produtos', [
            'produtos' => Produto::get(['id','nome','ingredientes','preco_pizza','categoria','tipo']),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('NewProduto', [
            'categorias' => Categoria::get(['id','categoria']),
            'tipos' => Tipo::get(['id','tipo']),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $regras = [
            'nome' => 'required|min:3|max:40|unique:produtos',
            'ingredientes' => 'required|min:3|max:250',
            'preco_pizza' => 'required',
            'categoria' => 'required',
            'tipo' => 'required',
            // 'image' => 'required|image|max:1024'
            
        ];
        $feedback = [
            'required' => "O campo :attribute deve ser preenchido",
            'min' => "O :attribute nome deve ter no mínimo 3 caracteres",
            'nome.unique' => "Já existe um pizza com esse nome",
            'nome.max' => "O campo nome deve ter no máximo 40 caracteres",
            'ingredientes.min' => "O campo nome debe ter no máximo 250 caracteres",
            // 'image.image' => 'Precisa ser uma imagem',
        ];
        // $rules = array('imgage' => 'required|max:10000|mimes:jpg');

        $request->validate($regras,$feedback);

        $produto = new Produto;  
        $produto->nome = $request->nome;
        $produto->ingredientes = $request->ingredientes;
        $produto->preco_pizza = $request->preco_pizza;
        $produto->categoria = $request->categoria;
        $produto->tipo = $request->tipo;

        if($request->image){
            $produto->image = $request->image->store('produtos');
        };

        // $url = Storage::url('image.jpg')

        // $produto->image = $request->file('image')->store('image', 'public');
        // dd($request->image);
       

        // $request->validate($regras, $feedback);
        // if($request->hasFile('image') && $request->file('image')->isValid() ){

        //     $requestImage = $request->image;

        //     $extension = $requestImage->extension();

        //     $imageName = md5($requestImage->getClientOriginalName() . strtotime('now')) . "." . $extension;

        //     $requestImage->move(public_path('img/events'), $imageName);

        //     $produto->image = $imageName;

        // };
        // dd($produto);
        $produto->save();
        return to_route('produtos.index');

        // dd($request->all());
        // Produto::create($request->validate($regras, $feedback));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Produto $produto)
    {
        //
        return Inertia::render('ShowProduto', [
            'produto' => $produto,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Produto $produto)
    {
        return Inertia::render('EditProduto', [
            'produto' => $produto,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Produto $produto)
    {
        // dd($request);
        // dd($produto);

        $regras = [
            'nome' => 'required|min:3|max:40|unique:produtos',
            'ingredientes' => 'required|min:3|max:250',
            'preco_pizza' => 'required',
        ];
        $feedback = [
            'required' => "O campo :attribute deve ser preenchido",
            'min' => "O :attribute nome deve ter no mínimo 3 caracteres",
            'nome.unique' => "Já existe um produto com esse nome",
            'nome.max' => "O campo nome deve ter no máximo 40 caracteres",
            'ingredientes.min' => "O campo nome debe ter no máximo 250 caracteres",
        ];
        $request->validate($regras,$feedback);

        $produto->nome = $request->nome;
        $produto->ingredientes = $request->ingredientes;
        $produto->preco_pizza = $request->preco;
        $produto->save();

        return to_route('produtos.index');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Produto $produto)
    {
        $produto->delete();
        return to_route('produtos.index');
    }
}
