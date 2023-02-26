import { Link, useForm } from '@inertiajs/react'
import React from 'react'
import { Ziggy } from '../../ziggy.js'
import LayoutAdm from '../../LayoutAdm/LayoutAdm'

//css
import './Produtos.css';

const Produtos = ({produtos}) => {


  return (
    <div>
      <h3>Todos os produtos</h3>
      <Link href={'/produtos/create'} className='btn btn-success mt-3'>Novo Produto</Link>
      <article className='containerCard'>

        <table className='tabelaProdutos'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Categoria</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            
              {produtos &&
                produtos.map((produto) => (
                  <tr key={produto.id}>
                    <td>{produto.nome}</td>
                    <td>{produto.categoria}</td>
                    <td><Link href={route('produtos.edit', {'produto': produto.id}, Ziggy)}>Editar</Link></td>
                    <td><Link href={route('produtos.show', {'produto': produto.id}, Ziggy)}>Ver</Link></td>
                  </tr>
                ))
              }
            
          </tbody>
        </table>

      </article>
        
    </div>
  )
}

Produtos.layout = page => <LayoutAdm children={page} />
export default Produtos