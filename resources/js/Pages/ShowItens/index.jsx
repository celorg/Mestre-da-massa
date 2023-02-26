import React from 'react'
import LayoutAdm from '../../LayoutAdm/LayoutAdm'

const ShowPizza = ({produtos}) => {
    console.log(produtos)
  return (
    <div>index</div>
  )
}

ShowPizza.layout = page => <LayoutAdm children={page} />

export default ShowPizza