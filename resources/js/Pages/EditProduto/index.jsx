import { usePage,router, useForm } from '@inertiajs/react'
// import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react'
import LayoutAdm from '../../LayoutAdm/LayoutAdm'
import { Ziggy } from '../../ziggy'


const EditProduto = ({produto}) => {

    const { put,data,setData } = useForm({
        nome: produto.nome,
        ingredientes: produto.ingredientes,
        preco: produto.preco_pizza,
    }); 

    const {errors} = usePage().props
    
    // const [nome,setNome] = useState(produto.nome);
    // const [ingredientes, setIngredientes] = useState(produto.ingredientes);
    // const [preco,setPreco ] = useState(produto.preco_pizza);

    const handleSubmit = (e) => {
        e.preventDefault();

        // const pizza = {
        //     nome,
        //     ingredientes,
        //     preco_pizza: preco,
        // } ;
        // console.log(pizza);
        put(`/produtos/${produto.id}` );
        
    }

  return (
    <div>
        <h3>Editar Produto</h3>
        <form onSubmit={handleSubmit} enctype="multipart/form-data">
            {errors.nome && <div className='alert alert-danger' role="alert">{errors.nome}</div>}
            <label>
                <span>Nome da Pizza</span>
                <input 
                    type='text'
                    name='nome'
                    placeholder='EX: Bacon'
                    value={data.nome}
                    onChange={e => setData('nome',e.target.value)}
                />
            </label>
            {errors.ingredientes && <div className='alert alert-danger' role="alert">{errors.ingredientes}</div>}
            <label>
                <span>Descrição</span>
                <textarea 
                    type='text'
                    name='ingredientes'
                    placeholder='EX: Mussarela,bacon ...'
                    value={data.ingredientes}
                    onChange={e => setData('ingredientes',e.target.value)}
                />
            </label>
            {errors.preco_pizza && <div className='alert alert-danger' role="alert">{errors.preco_pizza}</div>}
            <label>
                <span>Preço</span>
                <input 
                    type='number'
                    pattern="[0-9]+([,\.][0-9]+)?" 
                    min="0" step="any"
                    placeholder='EX: 35,00'
                    name='preco_pizza'
                    value={data.preco}
                    onChange={e => setData('preco',e.target.value)}
                />
            </label>
            
            <button type='submit' className='btn btn-success'>Enviar</button>
        </form>
    </div>
  )
}

EditProduto.layout = page => <LayoutAdm children={page} />

export default EditProduto;