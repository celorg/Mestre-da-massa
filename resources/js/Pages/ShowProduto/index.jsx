import { Link} from '@inertiajs/react';
import React from 'react'
import LayoutAdm from '../../LayoutAdm/LayoutAdm';
import { Ziggy } from '../../ziggy';

const ShowProduto = ({produto}) => {
  

  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title '>{produto.nome}</h5>
        <p className='card-text'>{produto.ingredientes}</p>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>Categoria: {produto.categoria}</li>
          <li className='list-group-item'>Preço: R$ {produto.preco_pizza} reais </li>
        </ul>
        <div className='card-body'>
          <Link href={route('produtos.edit', {'produto': produto.id}, Ziggy)} className='card-link btn btn-success'>Editar</Link>
          <Link href={route('produtos.destroy', {'produto': produto.id}, Ziggy)} method="delete" as="button" className='card-link btn btn-danger'>Apagar</Link>
        </div>
      </div>
    </div>
  )
}

ShowProduto.layout = page => <LayoutAdm children={page} />

export default ShowProduto