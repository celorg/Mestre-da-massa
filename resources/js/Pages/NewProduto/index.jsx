import { router, useForm, usePage } from '@inertiajs/react'
import React, { useState } from 'react'
import LayoutAdm from '../../LayoutAdm/LayoutAdm'

const NewProduto = ({categorias,tipos}) => {

    const {errors} = usePage().props

    const [preco,setPreco ] = useState('');
    const [nome,setNome] = useState('');
    const [ingredientes, setIngredientes] = useState('');
    const [categoria, setCategoria] = useState('');
    const [tipo,setTipo] = useState('');
    const [image,setImage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        const pizza = {
            nome,
            ingredientes,
            preco_pizza: preco,
            categoria,
            tipo,
            image
        } ;
        router.post('/produtos', pizza);
    }

  return (
    <div>
        <h3>Adicionar Produto</h3>
        <form enctype="multipart/form-data" onSubmit={handleSubmit} >
            {errors.image && <div className='alert alert-danger' role="alert">{errors.image}</div>}
            <label>
                <span>Imagem do Produto</span>
                <input
                    type='file'
                    name='image'
                    value={image}
                    onChange={e => setImage(e.target.value)}
                    // placeholder='Adcionar imagem do produto'
                />
            </label>
            {errors.nome && <div className='alert alert-danger' role="alert">{errors.nome}</div>}
            <label>
                <span>Nome da Pizza</span>
                <input 
                    type='text'
                    name='nome'
                    placeholder='EX: Bacon'
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
            </label>
            {errors.ingredientes && <div className='alert alert-danger' role="alert">{errors.ingredientes}</div>}
            <label>
                <span>Descrição</span>
                <textarea 
                    type='text'
                    name='ingredientes'
                    placeholder='EX: Mussarela,bacon ...'
                    value={ingredientes}
                    onChange={e => setIngredientes(e.target.value)}
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
                    value={preco}
                    onChange={e => setPreco(e.target.value)}
                />
            </label>
            {errors.categoria && <div className='alert alert-danger' role="alert">{errors.categoria}</div>}
            <label>
                <span>Categoria</span>
                <select 
                    name="categoria" 
                    value={categoria}
                    onChange={e => setCategoria(e.target.value)}>
                    <option>Selecione a Categoria</option>
                    {categorias && categorias.map((categoria) => (
                        <option key={categoria.id} value={categoria.categoria}>{categoria.categoria}</option>
                    ))}
                </select>
            </label>
            {errors.tipo && <div className='alert alert-danger' role="alert">{errors.tipo}</div>}
            <label>
                <span>Tipo</span>
                <select
                    name="Tipo"
                    value={tipo}
                    onChange={e => setTipo(e.target.value)}
                >
                    <option >Selecione o Tipo</option>
                    {tipos && tipos.map((tipo) => (
                        <option key={tipo.id} value={tipo.tipo}>{tipo.tipo}</option>
                    ))}
                </select>
            </label>
            
            <button type='submit' className='btn btn-success'>Enviar</button>
        </form>
    </div>
  )
}

NewProduto.layout = page => <LayoutAdm children={page} />

export default NewProduto;