import { Link } from '@inertiajs/react'
import Layout from '../../layout/Layout'
import './Home.css'

//IMG
import logo from '../../../img/mestreLogo.png'

const Home = () =>{
    return (
        <>
            <img src={logo} alt='mestre da massa' title='pizzaria' width='300px'/>
            <div className='div-links'>
                <Link href='/login'>Entrar</Link>
                <Link href='/register'>Cadastre-se</Link>
                <Link href='#'>Informações</Link>
            </div>
            
        </>
    )
}

Home.layout = page => <Layout children={page} />

export default Home