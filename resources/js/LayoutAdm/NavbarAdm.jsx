import { Link } from "@inertiajs/react"
import {Ziggy} from '../ziggy';

const NavbarAdm = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
        <Link className="navbar-brand" href={'/administracao'}>Admin Pizza</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-dark" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Mestre da massa</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <Link replace href={route('administracao.index',Ziggy)} className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link replace href={'/pedidos'} className="nav-link" >Pedidos</Link>
                    </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Produtos
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><Link className="dropdown-item" replace href={route('produtos.index',Ziggy)}>Todos Produtos</Link></li>
                                <li><Link className="dropdown-item" replace href={'/admpizza/pizza'}>Pizza</Link></li>
                                <li><Link className="dropdown-item" replace href={'/admpizza/esfiha'}>Esfihas</Link></li>
                                <li><Link className="dropdown-item" replace href={'/admpizza/bebidas'}>Bebidas</Link></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><Link replace className="dropdown-item" href={route('produtos.create',Ziggy)}>Adcionar Produtos</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link replace href='#' className="nav-link ">Funcionarios</Link>
                        </li>
                        <li className="nav-item">
                            <Link replace href={route('dashboard')} className="nav-link ">Voltar Página</Link>
                        </li>
                </ul>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default NavbarAdm