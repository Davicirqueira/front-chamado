import './index.scss';

export default function Cabecalho() {

  const nome = localStorage.getItem('USERNAME')

  return (

    <header>

      <div className='esq'>

        <img className='logo' src="/assets/images/logo.png" alt="" />

        <h2 className='title'>Bem vindo, {nome}</h2>

      </div>

      <div className='dir'>

        <a href="/login">Sair</a>

      </div>

    </header>

  )

}