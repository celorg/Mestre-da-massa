import { Link } from '@inertiajs/react'
import React from 'react'

const Card = ({nome,categoria,ingredientes}) => {
  return (
    <div className='card' style="width: 18rem">
        <div className='card-body'>
            <h5>{nome}</h5>
            <h6 className='card-subtitle mb-2 text-muted'>{categoria}</h6>
            <p className='card-text'>{ingredientes}</p>
            <Link href='#' className='card-link'>Editar</Link>
            <Link href='#' className='card-link'>Apagar</Link>
        </div>
    </div>
  )
}

export default Card