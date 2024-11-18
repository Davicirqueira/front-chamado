import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/listar';
import Login from './pages/login';
import Chamado from './pages/criar';

export default function Navegacao() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/chamado' element={<Chamado />} />

            </Routes>

        </BrowserRouter>

    );

}