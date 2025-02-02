import React from 'react'
import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import './login.css'

const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();     // previne que o form seja enviado
        alert("Enviando os dados" + userName + " - " + password);
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Acesse o sistema</h1>
                <div className='input-field'>
                    <input type="email" placeholder='E-mail'
                        required
                        onChange={(e) => setUserName(e.target.value)} />
                    <FaUser className='icon' />
                </div>
                <div className='input-field'>
                    <input type="password" placeholder='Senha'
                        required
                        onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className='icon' />
                </div>
                <div className="recall-forget">
                    <label>
                        <input type="checkbox" /> Lembre de mim
                    </label>

                    <a href="#"> Esqueceu a senha?</a>
                </div>
                <button>Entrar</button>
                <div className="singup-link">
                    <p>Não tem uma conta?
                        <a href="#">Registrar</a>
                    </p>
                </div>
            </form>
        </div>

    );
};

export default Login;



