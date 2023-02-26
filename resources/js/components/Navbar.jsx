import { Link, usePage } from '@inertiajs/react';
import './Navbar.css';

import LogoPizza from '../../img/mestreLogo.png'

import { GiFullPizza } from 'react-icons/Gi';
import { AiOutlineMenu } from 'react-icons/Ai';
import {BsCartCheck} from 'react-icons/Bs';
import { useContext } from 'react';
import { TotalContext } from '../context/TotalContext';

export default function Navbar(){

    const {auth} = usePage().props;
    
    const {total} = useContext(TotalContext)
    // console.log(auth)
    return (

        <nav className='nav-bar'>
            <div className='img-desktop'>
                <Link href={route('dashboard')} className="logo"><img src={LogoPizza}  alt='Mestre da Massa' title='menstre da massa' /> </Link>
            </div>
            <input type='checkbox' id='check'/>
            <label htmlFor='check' className='checkbtn'>
                <span className="icon-menu"><AiOutlineMenu/></span>
            </label>
            <ul className='navbar-nav'>

                {!auth.user &&
                    <>
                        <li className='nav-item'>
                            <Link replace href={route('login')} className="nav-link">Login</Link>
                        </li>
                        <li className='nav-item'>
                            <Link replace href={route('register')} className="nav-link">Cadastrar</Link>
                        </li>
                    </>
                }
                {auth.user && 
                    <>
                        <li className='nav-item'>
                            <Link replace href={route('dashboard')} className="nav-link">Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link replace href={'/cardapio/pizza'} className="nav-link">Cardápio</Link>
                        </li>
                        
                        <li className='nav-item'>
                            <Link replace href={route('home')} className="nav-link">Meus Pedidos</Link>
                        </li>
                        
                    </>
                }
                <li className='nav-item'>
                    <Link replace href={route('informacoes')} className="nav-link">Informações</Link>
                </li>
                {auth.user.nivel === 'adm' && 
                    <li>
                        <Link replace href={route('administracao.index')}>Administração</Link>
                    </li>
                }
                {auth.user && 
                    <li className='nav-item'>
                        <Link replace href={route('logout')} className="nav-link">Sair</Link>
                    </li>
                }
                
            </ul>
            <div className='carrinho'>
                <p>{total && total}</p>
                <Link replace href={route('criar.pedido')}  ><BsCartCheck className='iconCart' /></Link>
            </div>
        </nav>



        // <nav className='navbar navbar-expand-lg bg-white d-flex justify-content-between'>
        //     <div className="container-fluid d-flex justify-content-center">
        //         <Link href={route('dashboard')} className="navbar-brand flex-grow-1"><h2>Mestre da massa <GiFullPizza className='iconLogo'/></h2></Link>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className='navbar-nav me-auto mb-2 mb-lg-0 justify-content-end'>
        //                 {!auth.user &&
        //                 <> 
        //                     <li className='nav-item'>
        //                         <Link replace href={route('login')} className="nav-link">Login</Link>
        //                     </li>
        //                     <li className='nav-item'>
        //                         <Link replace href={route('register')} className="nav-link">Cadastrar</Link>
        //                     </li>
        //                     <li className='nav-item'>
        //                         <Link className="nav-link">Informações</Link>
        //                     </li>
        //                 </>
        //                 }

        //                 {auth.user &&
        //                 <>
        //                     <li className='nav-item'>
        //                         <Link replace href={route('dashboard')} className="nav-link">Home</Link>
        //                     </li>
        //                     <li className='nav-item'>
        //                         <Link replace href={route('home')} className="nav-link">Esfihas</Link>
        //                     </li>
        //                     <li className='nav-item'>
        //                         <Link replace href={route('home')} className="nav-link">Bebidas</Link>
        //                     </li>
        //                     <li className='nav-item'>
        //                         <Link replace href={route('home')} className="nav-link">Informações</Link>
        //                     </li>
        //                     <li className='nav-item'>
        //                         <Link replace href={route('home')} className="nav-link">Meus Pedidos</Link>
        //                     </li>
        //                     <li className='nav-item'>
        //                         <Link replace href={route('logout')} className="nav-link">Sair</Link>
        //                     </li>
                            
        //                 </>
        //                 }

        //             </ul>
                    
        //         </div>
        //     </div>
            
        // </nav>
            
    )
}