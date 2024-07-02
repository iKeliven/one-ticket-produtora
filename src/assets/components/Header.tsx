import { Button } from '@mui/material';
import { Heading } from './Heading';
import { useNavigate } from 'react-router-dom';
import { Text } from './Text';


export default function HeaderSection() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center w-full top-0 py-5 px-10 bg-[#D9D9D9]">
      
      <section className="flex flex-col gap-5">
      <Heading size='medium'>Olá, produtor!</Heading>
      <Text size='medium'>Seja bem vindo à OneTicket</Text>
        
      </section>
      <Button
          variant="contained"
          style={{ backgroundColor: '#FF9800', color: '#fff', border: '1px solid #FF9800', boxShadow: 'none' }}
          onClick={() => navigate('/eventos/novo')}
        >
          Cadastrar Evento
        </Button>
    </div>
  );
}
