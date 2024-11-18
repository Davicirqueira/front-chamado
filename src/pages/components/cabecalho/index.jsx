import './index.scss';

export default function Cabecalho() {

  return (

    <header>

      <div className='esq'>

        <img className='logo' src="/assets/images/logo.png" alt="" />

        <h2 className='title'>Bem vindo,</h2>

      </div>

      <div className='dir'>

        <a href="/login">Sair</a>

      </div>

    </header>

  )

}