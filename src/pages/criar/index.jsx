import './index.scss';
import Cabecalho from '../components/cabecalho';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import moment from 'moment';
import axios from 'axios';

export default function Chamado() {

    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    function Voltar() {

        navigate('/home');

    }

    const [titulo, setTitulo] = useState('');
    const [infos, setInfos] = useState('');
    const [impacto, setImpacto] = useState('');
    const [dataOcorrencia, setDataOcorrencia] = useState('');
    const [atribuir, setAtribuir] = useState('');

    const { id } = useParams();

    async function salvarChamado() {

        const chamado = {

            "titulo": titulo,
            "infos": infos,
            "impacto": impacto,
            "dataOcorrencia": dataOcorrencia,
            "atribuir": atribuir

        }

        if (id == undefined) {

            const url = `http://localhost:9595/chamados`;
            let resp = await axios.post(url, chamado);

            alert('Chamado enviado com sucesso!');

        }
        else {

            const url = `http://localhost:9595/chamados/${id}`;
            let resp = await axios.put(url, chamado);

            alert('Chamado alterado!');

        }

        navigate('/home');

    }

    async function buscarDados() {

        if (id != undefined) {

            const url = `http://localhost:9595/chamados/${id}`;
            let resp = await axios.get(url);
            let dados = resp.data;

            let ocorrencia = moment(dados.dataOcorrencia).format('YYYY-MM-DD');

            setTitulo(dados.titulo);
            setInfos(dados.informacoes);
            setImpacto(dados.impacto);
            setDataOcorrencia(ocorrencia);
            setAtribuir(dados.atribuir)


        }

    }

    useEffect(() => {

        let token = localStorage.getItem('USER');
        setToken(token);

        if (token == null) {

            navigate('/');

        }

        buscarDados();

    }, [])

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
                    <input type="text" placeholder='Nome do Problema...' value={titulo} onChange={e => setTitulo(e.target.value)} />
                </div>

                <div className='info'>
                    <label htmlFor="">Informações</label>
                    <textarea className='infos'
                        value={infos}
                        onChange={e => setInfos(e.target.value)}
                        name=""
                        id=""
                        placeholder=' Descreva as Informações...'>
                    </textarea>
                </div>

                <div className='triple'>

                    <div className='impact'>
                        <label htmlFor="">Impacto</label>
                        <select name="" id="" value={impacto} onChange={e => setImpacto(e.target.value)}>
                            <option value="Baixo">Baixo</option>
                            <option value="Médio">Médio</option>
                            <option value="Alto">Alto</option>
                        </select>
                    </div>

                    <div className='dates'>
                        <label htmlFor="">Data da Ocorrência</label>
                        <input type="date" value={dataOcorrencia} onChange={e => setDataOcorrencia(e.target.value)} />
                    </div>

                    <div className='atribute'>
                        <label htmlFor="">Atribuir</label>
                        <input type="text" placeholder='Responsável...' value={atribuir} onChange={e => setAtribuir(e.target.value)} />
                    </div>

                </div>

                <div className='buttons'>

                    <button className='back' onClick={Voltar}>Voltar</button>

                    <button className='save' onClick={salvarChamado}>Salvar</button>

                </div>

            </div>

        </div>

    );

}