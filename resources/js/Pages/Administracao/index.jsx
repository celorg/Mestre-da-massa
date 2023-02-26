import LayoutAdm from "../../LayoutAdm/LayoutAdm"

const Administracao = () => {
  return (
    <div>
        <h1>Aréa administrativa</h1>
        <div>
            <h4>Últimos Pedidos</h4>
            <div>Pedidos ...</div>
        </div>
        <div>
            <h4>Produtos</h4>
            <div>Produtos</div>
        </div>
    </div>

  )
}


Administracao.layout = page => <LayoutAdm children={page} />

export default Administracao