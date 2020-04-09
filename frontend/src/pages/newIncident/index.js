import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import "./style.css";
import logoImg from '../../assets/behero.png';

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} width="250px" alt="be the hero" />

                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva o Caso detalhadamente para encontrar um heroi.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para Home
                    </Link>

                </section>

                <form>
                    <input placeholder="Título do Caso" />
                    <textarea placeholder="Descrição do caso" />
                    <input placeholder="Valor em reais" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}