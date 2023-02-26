import { Link, router, usePage} from '@inertiajs/react';
import React, { useContext, useEffect, useState } from 'react'

import Layout from '../../layout/Layout'

//Context
import { TotalContext } from '../../context/TotalContext';
//css
import './CriarPedido.css'

const CriarPedido = () => {


    const {auth} = usePage().props;
    const id_user = auth.user.id

    const [items, setItems] = useState([])

    const { total,setTotal } = useContext(TotalContext);

    var sum = 0; 

    const somar = (num1) => {
        const conta = num1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        return conta
    }

    useEffect(() => {
        //Função para acrescentar o valor total no {context}
        for(var i =0;i<items.length;i++){ 
            sum+=items[i].conta;  
            setTotal(somar(sum));
        }
    }, [items])

    useEffect(() => {
        //Pegando o valores no localStorege
        if(localStorage.length > 0){
            for (let i = 0; i < localStorage.length; i++){
                let key = localStorage.key(i);
                let value = localStorage.getItem(key);
                let myItem = JSON.parse(localStorage.getItem(key,value));
                setItems(prevItems => [...prevItems, myItem]);
            }
        }        
        
    },[localStorage])

    const handleSubmit = (e) => {
        e.preventDefault()
        // const id_user = id_user 
        items.forEach(item => {
            const qntd = item.qntd;
            const id_produto = item.id;
            const valor_total = item.conta;
            // const id_observacao = 3;

            const Pedido = {
                id_produto: id_produto,
                quantidade: qntd,
                valor_total: valor_total,
                id_user: id_user,
            }
            router.post('/criarpedido', Pedido);
        })

        
    }

    const handleQntd = (key,nome,preco,qntd) => {
        
        
        const id = key
        
        if(qntd === 0){
            // apagar(id)
            localStorage.removeItem(id);
            return window.location.reload();        
        }

        const obj = {
            id: id,
            nome: nome,
            preco: preco,
            qntd: qntd,
            conta: qntd * preco
        }
        
        items.forEach((item) => {
            if(item.id === id){
                item.qntd = qntd
                item.conta = qntd * preco
            }
        })
        // setItems(novoArray)
        localStorage.setItem(id, JSON.stringify(obj))
        window.location.reload();  

    } 
    const handlePrevent = (e) => {
        
        // e.preventDefault()
        
    }
    

  return (
    <div className='criarpedido'>        

        <h2>Meu Carrinho</h2>
        
        <article >
            <div className='div-fazerPedido'>
                <p>{total && total}</p>
                <button type='submit' onClick={handleSubmit}>Fazer Pedido</button>
            </div>
            <ul className='lista-items'>

            {items ? items.map((sacola) => (
                <li key={sacola.id}>
                    <div className='div-nome'>
                        <h5>{sacola.nome}</h5>
                        <p>{somar(sacola.preco)}</p>
                    </div>
                    <div className='div-qntd'>
                        <p>Qntd:</p>
                        <div className='div-input'>
                            <button onClick={ () => handleQntd(sacola.id, sacola.nome, sacola.preco, sacola.qntd-1)} >-</button>
                            <input type='number' min='0' max='10' 
                                value={sacola.qntd}
                                onChange={e => handlePrevent}
                                disabled
                            />
                            <button onClick={ () => handleQntd(sacola.id, sacola.nome, sacola.preco, sacola.qntd+1 )}>+</button>
                        </div>
                    </div>
                </li>              

                ))
            :
            <p>Ainda não adicionou nenhum item no carrinho</p>               
            }
            </ul>
            
        </article>
        
    </div>
  )
}

CriarPedido.layout = page => <Layout children={page} />

export default CriarPedido