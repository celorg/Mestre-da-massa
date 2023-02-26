import { Link, usePage } from '@inertiajs/react'
import React from 'react'
import Layout from '../../layout/Layout'

//icons
import {HiShoppingBag} from 'react-icons/Hi'
//css
import './Cardapio.css'

const Cardapio = ({produtos}) => {

    const {url} = usePage()

    const handleClick = (key,obj) =>{
        localStorage.setItem(key,JSON.stringify(obj))
    }

    const reais = (preco) => {
        const formatar = preco.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'});
        return formatar
    }
  

    return (
    <div className='cardapio'>
        <h1>Cardápio</h1>
        <ul className='links-categoria'>
            <li>
                <Link replace href={'/cardapio/pizza'} className={url === '/cardapio/pizza' ? 'ativo' : ''}>Pizza</Link>
            </li>
            <li>
                <Link replace href={'/cardapio/esfiha'} className={url === '/cardapio/esfiha' ? 'ativo' : ''}>Esfiha</Link>
            </li>
            <li>
                <Link replace href={'/cardapio/bebida'} className={url === '/cardapio/bebida' ? 'ativo' : ''} >Bebidas</Link>
            </li>
        </ul>
        <article className=''>
            {produtos && produtos.map(produto => (
                <div key={produto.id} className="item">
                    <h4>{produto.nome}</h4>
                    <p>{produto.ingredientes}</p>
                    <div className='item-info'>
                        <p>{reais(produto.preco_pizza)}</p>
                        <button onClick={() => handleClick(produto.id, {id: produto.id , nome: produto.nome, preco: produto.preco_pizza, qntd: 1, conta: produto.preco_pizza} )}>Adicionar <HiShoppingBag /></button>
                    </div>
                </div>
            ))}
            
        </article>
    </div>
  )
}

Cardapio.layout = page => <Layout children={page} />

export default Cardapio