import React from 'react'
import { FiLogIn } from 'react-icons/fi'
import {Link} from 'react-router-dom'

import './style.css'

import heroesImg from '../../assets/SSBU_Hero.jpg'
import logoImg from '../../assets/behero.png'
export default function Logon() {

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} width="250px" alt="be the hero"/>

                <form>
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho Cadastro
                    </Link>
                </form>

            </section>
            <img src={heroesImg} width="700px" height="450px" alt="Heroes" />
        </div>
    );
}