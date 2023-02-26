import { Link } from '@inertiajs/react'
import Layout from '../../layout/Layout'
import pizza from '../../../img/pizza-capa-fundo.png'

import './Dashboard.css';

//Icons
import {FaFolder} from 'react-icons/fa';
import { GiShoppingCart } from 'react-icons/Gi';
import { MdMenuBook } from 'react-icons/Md';


const Dashboard = () =>{
    
    return (
        <article className='inicio'>
            
            <div className='div-inicio'>
                <h1>Seja Bem-Vindo</h1>
                <ul>
                    <li>
                        <Link replace href={'/cardapio/pizza'}>
                            <p>Cardapio</p>
                            <span><MdMenuBook/></span>
                        </Link>
                    </li>
                    <li>
                        <Link replace href={'/criarpedido'}>
                            <p>Carrinho</p>
                            <span><GiShoppingCart /></span>
                        </Link>
                    </li>
                    <li>
                        <Link replace href='#'>
                            <p>Pedidos</p>
                            <span><FaFolder /></span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='div-imagem'>
                <img src={pizza} alt="Pizza" title="Mestre da massa" />
            </div>
            
        </ article>

        
    );
}

Dashboard.layout = page => <Layout children={page}/>

export default Dashboard