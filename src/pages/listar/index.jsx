import './index.scss';
import Cabecalho from '../components/cabecalho';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faP } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function Home() {

    const [token, setToken] = useState(null);
    const [listaChamados, setListaChamados] = useState([]);

    const navigate = useNavigate();

    async function buscarChamados() {

        const url = `http://localhost:9595/chamados`;
        let resp = await axios.get(url);

        setListaChamados(resp.data);

    }

    useEffect(() => {

        let token = localStorage.getItem('USER');
        setToken(token);

        if(token == null){
            navigate('/')
        }

        buscarChamados();

    }, [])

    return (

        <div className='pagina-home'>

            <Cabecalho />

            <div className='input'>
                <input type="text" placeholder='Filtrar...' />
                <button><FontAwesomeIcon icon={faMagnifyingGlass} color='#DB2B39' /></button>
            </div>

            <table>

                <thead>
                    <tr>
                        <th className='title-list'>Título</th>
                        <th className='a'>Impacto</th>
                        <th className='a'>Data Ocorrência</th>
                        <th className='atributed-actions'>Atribuído</th>
                    </tr>
                </thead>

                {listaChamados.map(chamado =>

                    <tbody>

                        <td>{chamado.titulo}</td>
                        <td className='center'>{chamado.impacto}</td>
                        <td className='center'>{chamado.dataOcorrencia}</td>
                        <td className='atributed-row'>{chamado.atribuir}
                            <div>
                                <p className='e'><FontAwesomeIcon icon={faPen} color='#DB2B39' /></p>
                                <p className='e'><FontAwesomeIcon icon={faTrashCan} color='#DB2B39' /></p>
                            </div>
                        </td>
                    </tbody>

                )}

            </table>

        </div>

    );

}