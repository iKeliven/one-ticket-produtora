import { Link, useLocation } from 'react-router-dom';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import SidebarItems from './SidebarItems'; // Certifique-se de importar o componente SidebarItems correto

export default function SidebarEvent() {
  const location = useLocation();

  return (
    <div className="left-0 shadow-md bg-white w-[15vw] flex flex-col items-start justify-start pt-[100px] p-4 gap-[40px] text-left">
      <div className="fixed">
        <div className="flex flex-col top-0 justify-start items-start">
          <div className="flex flex-col items-start">
          <Link to="/oneticket">
            <SidebarItems label="Página Inicial" active={location.pathname === '/oneticket'}> 
                  <AutoAwesomeMosaicOutlinedIcon sx={{ color: '#FF9800', fontSize: 40 }} />
                
              </SidebarItems>
            </Link>
            <Link to="/detalhe-evento">
            <SidebarItems label="Detalhes do Evento" active={location.pathname === '/detalhe-evento'}>
              
            </SidebarItems>
            </Link>
            <Link to="/ingressos">
              <SidebarItems label="Ingressos e Lotes" active={location.pathname === '/ingressos'}>
                
              </SidebarItems>
            </Link>
            <Link to="/pontodevendas">
            <SidebarItems label="Pontos de Venda" active={location.pathname === '/vendas'}>
              
            </SidebarItems></Link>
            <Link to="/colaboradores">
            <SidebarItems label="Colaboradores" active={location.pathname === '/colaboradores'}>
              
            </SidebarItems></Link>

            <Link to="/checkin"><SidebarItems label="Check-in" active={location.pathname === '/checkin'}>
              
            </SidebarItems></Link>
            <Link to="/ingressos">
            <SidebarItems label="Troca de Ingressos" active={location.pathname === '/clientes'}>
              
            </SidebarItems></Link>
            <Link to="/participantes">
              <SidebarItems label="Pedidos e participantes" active={location.pathname === '/participantes'}>
             
            </SidebarItems>
            </Link>
            
            <Link to="/comunicados">
              <SidebarItems label="Comunicados" active={location.pathname === '/comunicados'}>
             
            </SidebarItems>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
