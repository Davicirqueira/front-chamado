import './index.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    
    const navigate = useNavigate();
    
    async function entrar(){


        const user = {

            "nome": nome,
            "senha": senha

        }

        const url = 'http://localhost:9595/entrar';
        let resp = await axios.post(url, user);

        if(resp.data.error != undefined){

            alert(resp.data.error);

        }
        else{

            localStorage.setItem('USER', resp.data.token);
            localStorage.setItem('USERNAME', nome)
            navigate('/home');

        }
    }


    return (

        <div className='pagina-login'>

            <div className='meio'>

                <img src="assets/images/logo.png" alt="" />

                <h1>Seja bem-vindo(a) ao login.</h1>

                <div className='inputs'>

                    <input type="text" placeholder='Nome:' value={nome} onChange={e => setNome(e.target.value)}/>

                    <input type="password" placeholder='Senha:' value={senha} onChange={e => setSenha(e.target.value)}/>

                    <button onClick={entrar}>Entrar</button>

                </div>

                <div className='link'>

                    <p>Não tem conta?</p><p className='cad'>Faça o cadastro.</p>

                </div>

            </div>

        </div>

    );

}