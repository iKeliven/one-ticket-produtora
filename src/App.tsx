import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/screens/Home';
import DadosColaboradores from './assets/screens/DadosColaboradores';
import Colaboradores from './assets/screens/Colaboradores';
import Eventos from './assets/screens/Eventos';
import NovoEvento from './assets/screens/NovoEvento';
import Comunicados from './assets/screens/Comunicados';
import Checkin from './assets/screens/Checkin';
import Ingressos from './assets/screens/Ingressos';
import Participantes from './assets/screens/Participantes';
import DetalhesEvento from './assets/screens/DetalhesEvento';
import PontosDeVenda from './assets/screens/PontosDeVenda';
import Login from './assets/screens/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/oneticket" element={<Home />} />
        <Route path="/colaboradores" element={<Colaboradores />} />
        <Route path="/colaboradores/dado" element={<DadosColaboradores />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/eventos/novo" element={<NovoEvento />} />
        <Route path="/comunicados" element={<Comunicados />} />
        <Route path="/checkin" element={<Checkin />} />
        <Route path="/ingressos" element={<Ingressos />} />
        <Route path="/participantes" element={<Participantes />} />
        <Route path="/detalhe-evento" element={<DetalhesEvento />} />
        <Route path="/pontodevendas" element={<PontosDeVenda />} />
      </Routes>
    </Router>
  );
}

export default App;
