import React from 'react'
import Card from './Card'

const ContainerCard = ({produtos}) => {
    console.log(produtos);
  return (
    <div className='ContainerCard'>
        {produtos &&
            produtos.map((produto) => (
                <Card 
                    key={produto.id}
                    nome={produto.nome}
                    categoria={categoria.categoria}
                    ingredientes={categoria.ingredientes}
                />
            ))
        }
        
    </div>
  )
}

export default ContainerCard