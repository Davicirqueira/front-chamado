import './index.scss';
import Cabecalho from '../components/cabecalho';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import moment from 'moment';

export default function Chamado() {

    const[token, setToken] = useState(null);
    const navigate = useNavigate();

    function Voltar(){

        navigate('/home');

    }

    const [titulo, setTitulo] = useState('');
    const[infos, setInfos] = useState('');
    const[impacto, setImpacto] = useState('');
    const[dataOcorrencia, setDataOcorrencia] = useState('');
    const[atribuir, setAtribuir] = useState('');

    function baixo(){
        setImpacto('Baixo');
    }
    function medio(){
        setImpacto('Médio');
    }
    function alto(){
        setImpacto('Alto');
    }


    const { id } = useParams();

    async function salvarChamado(){

        const chamado = {

            "titulo": titulo,
            "infos": infos,
            "impacto": impacto,
            "dataOcorrencia": dataOcorrencia,
            "atribuir": atribuir

        }
        
    }

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
                    <input type="text" placeholder='Nome do Problema...'/>
                </div>

                <div className='info'>
                    <label htmlFor="">Informações</label>
                    <textarea className='infos' name="" id="" placeholder=' Descreva as Informações...'></textarea>
                </div>

                <div className='triple'>

                    <div className='impact'>
                        <label htmlFor="">Impacto</label>
                        <select name="" id="">
                            <option onClick={baixo} value="">Baixo</option>
                            <option onClick={medio} value="">Médio</option>
                            <option onClick={alto} value="">Alto</option>
                        </select>
                    </div>

                    <div className='dates'>
                        <label htmlFor="">Data da Ocorrência</label>
                        <input type="date" />
                    </div>

                    <div className='atribute'>
                        <label htmlFor="">Atribuir</label>
                        <input type="text" placeholder='Responsável...'/>
                    </div>

                </div>

                <div className='buttons'>

                    <button className='back' onClick={Voltar}>Voltar</button>

                    <button className='save'>Salvar</button>

                </div>

            </div>

        </div>

    );

}