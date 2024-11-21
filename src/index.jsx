import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Navegacao from './router';
import Login from './pages/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <Navegacao />

  </React.StrictMode>

);