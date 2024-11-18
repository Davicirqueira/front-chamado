import './index.scss';

export default function Login() {

    return (

        <div className='pagina-login'>

            <div className='meio'>

                <img src="assets/images/logo.png" alt="" />

                <h1>Seja bem-vindo(a) ao login.</h1>

                <div className='inputs'>

                    <input type="text" placeholder='Nome:' />

                    <input type="password" placeholder='Senha:' />

                    <button>Entrar</button>

                </div>

            </div>

        </div>

    );

}