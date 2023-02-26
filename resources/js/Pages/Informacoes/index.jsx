import React from 'react';
//Layout
import Layout from '../../layout/Layout';
//Css
import './Informacoes.css';

const Informacoes = () => {
  return (
    <article>
        <h1>Informação</h1>
        <div className='div-info'>
            <label>
                <span>Telefone</span>
                <p>(11)95852-8459</p>
            </label>
            <label>
                <span>Horários</span>
                <p>14:00 - 00:00</p>
            </label>
            <label>
                <span>E-mail</span>
                <p>marcelo.ribeiro.gomes@hotmail.com</p>
            </label>
        </div>
        <aside className='div-sobre'>
            <h6>Sobre o Projeto</h6>
            <p>Olá, tudo bem? fico feliz por está aqui!! Este é meu primeiro projeto full-stack ,e foi criado com o Laravel , junto com o react. Sei que deve está faltando bastante coisas mas eu estou contente com o resultado!! Quando eu conheci o mundo da programãçao, meu sonho era se tornar um desenvolvedor Full-stack, e terminar esse projeto sozinho é extremamente gratificante para mim .Enfim fique a vontade para olhar este projeto e se quiser me dar um conselho ou conversar comigo fique a vontade!!</p>
        </aside>
    </article>
  )
}

Informacoes.layout = page => <Layout children={page} />

export default Informacoes