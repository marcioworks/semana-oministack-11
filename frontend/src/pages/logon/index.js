import React, { useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import './style.css'

import heroesImg from '../../assets/SSBU_Hero.jpg'
import logoImg from '../../assets/behero.png'
export default function Logon() {
    const [id, setId] = useState('')

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id })
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name)
            history.push('/profile');

        } catch (err) {
            alert('falha no login, tente novamente.')
        }

    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} width="250px" alt="be the hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho Cadastro
                    </Link>
                </form>

            </section>
            <img src={heroesImg} width="860px" alt="Heroes" />
        </div>
    );
}