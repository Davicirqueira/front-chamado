import './index.scss';
import Cabecalho from '../components/cabecalho';

export default function Chamado() {

    return (

        <div className='pagina-chamado'>

            <Cabecalho />

            <div className='img-fundo'>

                <img src="assets/images/equipe.png" alt="" />

            </div>


            <div className='form'>

                <h3>Detalhes do Chamado</h3>

                <div className='title'>
                    <label htmlFor="">Título</label>
                    <input type="text" />
                </div>

                <div className='info'>
                    <label htmlFor="">Informações</label>
                    <textarea className='infos' name="" id="" placeholder=' Descreva as Informações...'></textarea>
                </div>

                <div className='triple'>

                    <div className='impact'>
                        <label htmlFor="">Impacto</label>
                        <select name="" id="">
                            <option value="">Baixo</option>
                            <option value="">Médio</option>
                            <option value="">Alto</option>
                        </select>
                    </div>

                    <div className='dates'>
                        <label htmlFor="">Data da Ocorrência</label>
                        <input type="date" />
                    </div>

                    <div className='atribute'>
                        <label htmlFor="">Atribuir</label>
                        <input type="text" />
                    </div>

                </div>

                <div className='buttons'>

                    <button>Voltar</button>

                    <button>Salvar</button>

                </div>

            </div>

        </div>

    );

}