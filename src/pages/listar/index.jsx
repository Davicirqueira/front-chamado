import './index.scss';
import Cabecalho from '../components/cabecalho';

export default function Home() {

    return (

        <div className='pagina-home'>
        
            <Cabecalho />

            <div className='input'>
                <input type="text" placeholder='Filtrar...'/>
                <button></button>
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

                <tbody>

                    <td>JWt Errordfftyr6t</td>
                    <td className='center'>Error 2</td>
                    <td className='center'>Error 3</td>
                    <td>Error 4</td>
                </tbody>
                <tbody>
                    <td>JWt Errordfftyr6t</td>
                    <td className='center'>Error 2</td>
                    <td className='center'>Error 3</td>
                    <td>Error 4</td>
                </tbody>

            </table>

        </div>

    );

}