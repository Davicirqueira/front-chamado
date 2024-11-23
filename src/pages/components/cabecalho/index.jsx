import './index.scss';
import { useNavigate } from 'react-router-dom';


export default function Cabecalho() {

  const nome = localStorage.getItem('USERNAME')

  const navigate = useNavigate();

  function sair(){

    localStorage.removeItem('USER');
    navigate('/');

  }

  return (

    <header>

      <div className='esq'>

        <img className='logo' src="/assets/images/logo.png" alt="" />

        <h2 className='title'>Bem vindo, {nome}</h2>

      </div>

      <div className='dir'>

        <a onClick={sair}>Sair</a>

      </div>

    </header>

  )

}