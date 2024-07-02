import React, { useState } from "react";
import { TextField, Button, IconButton, Chip, Dialog, DialogTitle, DialogContent, DialogActions, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import HeaderSection from "../components/HeaderSection";
import Footer from "../components/Footer";
import SidebarEvent from "../components/SidebarEvent";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";

// Dados de exemplo para os pontos de venda
const pontosDeVenda = [
  { id: 1, nome: 'Site Oficial', tipo: 'Online', status: 'Ativo', url: 'https://siteoficial.com' },
  { id: 2, nome: 'Ticketmaster', tipo: 'Online', status: 'Ativo', url: 'https://ticketmaster.com' },
  { id: 3, nome: 'Bilheteria Central', tipo: 'Presencial', status: 'Inativo', endereco: 'Rua ABC, 123, Centro' },
  { id: 4, nome: 'Shopping Center', tipo: 'Presencial', status: 'Ativo', endereco: 'Av. Principal, 456, Shopping' },
  { id: 5, nome: 'Ingressos Rápido', tipo: 'Online', status: 'Ativo', url: 'https://ingressosrapido.com' },
];

interface PontoDeVenda {
  id: number;
  nome: string;
  tipo: string;
  status: string;
  url?: string;
  endereco?: string;
}

const PontosDeVenda: React.FunctionComponent = () => {
  const [filtro, setFiltro] = useState<string>("");
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [novoPonto, setNovoPonto] = useState<PontoDeVenda>({
    id: 0,
    nome: '',
    tipo: '',
    status: 'Ativo',
    url: '',
    endereco: ''
  });

  const handleFiltroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiltro(event.target.value);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleNovoPontoChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setNovoPonto({ ...novoPonto, [name]: value });
  };

  const handleAdicionarPonto = () => {
    if (novoPonto.nome && novoPonto.tipo) {
      const newId = pontosDeVenda.length + 1;
      pontosDeVenda.push({ ...novoPonto, id: newId });
      setOpenDialog(false);
      setNovoPonto({ id: 0, nome: '', tipo: '', status: 'Ativo', url: '', endereco: '' });
    }
  };

  const pontosFiltrados = pontosDeVenda.filter(ponto =>
    ponto.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="flex flex-col w-[100vw]">
      <HeaderSection />
      <div className="flex">
        <SidebarEvent />
        <div className="flex w-[75vw] flex-col bg-[#e6e6e6] pt-[120px] gap-5 p-8 flex-grow">
          <div className="bg-white p-8 box-border gap-5 shadow-md rounded-xl">
            <div className="flex justify-between pb-8">
              <Heading size="large">Pontos de Venda</Heading>
              <Button
                variant="contained"
                style={{ backgroundColor: '#FF9800', color: '#fff', border: '1px solid #FF9800', boxShadow: 'none' }}
                onClick={handleOpenDialog}
              >
                Cadastrar Novo
              </Button>
            </div>
            <div className="flex justify-end gap-5">
              <TextField
                label="Filtrar por nome"
                variant="outlined"
                value={filtro}
                onChange={handleFiltroChange}
                fullWidth
              />
            </div>

            <div className="mt-6">
              <Heading size="medium">Online</Heading>
              {pontosFiltrados.filter(ponto => ponto.tipo === 'Online').map(ponto => (
                <div key={ponto.id} className="flex justify-between items-center mb-4 p-4 border border-gray-300 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Chip label={ponto.tipo} color="primary" />
                    <div className="flex flex-col">
                      <Text size="medium">{ponto.nome}</Text>
                      <Text size="small"><a href={ponto.url} target="_blank" rel="noopener noreferrer">{ponto.url}</a></Text>
                      <Chip label={ponto.status} color={ponto.status === 'Ativo' ? 'success' : 'error'} />
                    </div>
                  </div>
                  <IconButton>
                    <EditIcon style={{ color: '#f97316' }} />
                  </IconButton>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Heading size="medium">Presencial</Heading>
              {pontosFiltrados.filter(ponto => ponto.tipo === 'Presencial').map(ponto => (
                <div key={ponto.id} className="flex justify-between items-center mb-4 p-4 border border-gray-300 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Chip label={ponto.tipo} color="default" />
                    <div className="flex flex-col">
                      <Text size="medium">{ponto.nome}</Text>
                      <Text size="small">{ponto.endereco}</Text>
                      <Chip label={ponto.status} color={ponto.status === 'Ativo' ? 'success' : 'error'} />
                    </div>
                  </div>
                  <IconButton>
                    <EditIcon style={{ color: '#f97316' }} />
                  </IconButton>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Dialog para adicionar novo ponto de venda */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Cadastrar Novo Ponto de Venda</DialogTitle>
        <DialogContent>
          <TextField
            label="Nome"
            name="nome"
            value={novoPonto.nome}
            onChange={handleNovoPontoChange}
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Tipo</InputLabel>
            <Select
              name="tipo"
              value={novoPonto.tipo}
              onChange={handleNovoPontoChange}
            >
              <MenuItem value="Online">Online</MenuItem>
              <MenuItem value="Presencial">Presencial</MenuItem>
            </Select>
          </FormControl>
          {novoPonto.tipo === 'Online' && (
            <TextField
              label="URL"
              name="url"
              value={novoPonto.url}
              onChange={handleNovoPontoChange}
              fullWidth
              margin="normal"
            />
          )}
          {novoPonto.tipo === 'Presencial' && (
            <TextField
              label="Endereço"
              name="endereco"
              value={novoPonto.endereco}
              onChange={handleNovoPontoChange}
              fullWidth
              margin="normal"
            />
          )}
          <FormControl fullWidth margin="normal">
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={novoPonto.status}
              onChange={handleNovoPontoChange}
            >
              <MenuItem value="Ativo">Ativo</MenuItem>
              <MenuItem value="Inativo">Inativo</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleAdicionarPonto} color="primary">
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PontosDeVenda;
