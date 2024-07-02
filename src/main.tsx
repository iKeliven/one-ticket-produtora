import { createRoot } from 'react-dom/client'; // Importe createRoot corretamente

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/screens/Home.tsx';
import './index.css';
import DadosColaboradores from './assets/screens/DadosColaboradores.tsx';
import Colaboradores from './assets/screens/Colaboradores.tsx';
import Eventos from './assets/screens/Eventos.tsx';
import NovoEvento from './assets/screens/NovoEvento.tsx';
import Comunicados from './assets/screens/Comunicados.tsx';
import Checkin from './assets/screens/Checkin.tsx';
import Ingressos from './assets/screens/Ingressos.tsx';
import Participantes from './assets/screens/Participantes.tsx';
import DetalhesEvento from './assets/screens/DetalhesEvento.tsx';
import PontosDeVenda from './assets/screens/PontosdeVenda.tsx';
import App from './App.tsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/oneticket" element={<Home />} />
        <Route path="/colaboradores" element={<Colaboradores />} />
        <Route path="/colaboradores/dado" element={<DadosColaboradores />} />
        <Route path="/eventos" element={<Eventos/>} />
        <Route path="/eventos/novo" element={<NovoEvento/>} />
        <Route path="/comunicados" element={<Comunicados />} />
        <Route path="/checkin" element={<Checkin />} />
        <Route path="/ingressos" element={<Ingressos />} />
        <Route path="/participantes" element={<Participantes />} />
        <Route path="/detalhe-evento" element={<DetalhesEvento />} />
        <Route path="/pontodevendas" element={<PontosDeVenda />} />

      </Routes>
    </Router>
  </React.StrictMode>
);
