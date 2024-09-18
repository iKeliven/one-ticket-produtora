import React, { useState } from "react";
import axios from 'axios';
import { TextField, Select, MenuItem, FormControl, InputLabel, Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import RoomIcon from '@mui/icons-material/Room';
import WifiIcon from '@mui/icons-material/Wifi';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import HeaderSection from "../components/HeaderSection";
import Footer from "../components/Footer";
import SidebarEvent from "../components/SidebarEvent";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";

const NovoEvento: React.FunctionComponent = () => {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({
    logradouro: '',
    bairro: '',
    cidade: '',
    uf: '',
    numero: '',
    complemento: ''
  });

  const handleCepChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCep(value);

    if (value.length === 8) { // Verifica se o CEP tem 8 dígitos
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${value}/json/`);
        if (response.data.erro) {
          alert('CEP não encontrado');
        } else {
          setEndereco({
            ...endereco,
            logradouro: response.data.logradouro,
            bairro: response.data.bairro,
            cidade: response.data.localidade,
            uf: response.data.uf,
            numero: '',
            complemento: ''
          });
        }
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
        alert('Erro ao buscar CEP');
      }
    }
  };

  const handleEnderecoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEndereco({
      ...endereco,
      [name]: value
    });
  };

  return (
    <div className="flex flex-col w-[100vw]">
      <HeaderSection />
      <div className="flex">
        <SidebarEvent />
        <div className="flex w-[75vw] flex-col bg-[#e6e6e6] pt-[120px] gap-5 p-8 flex-grow">
          <div className="bg-white p-8 box-border gap-5 shadow-md rounded-xl">
            <Heading size="large">Cadastrar Evento</Heading>

            <div className="flex flex-col gap-5 mb-6 pt-5">
              <div className="flex items-start gap-5">
                <div className="flex flex-col w-[20vw]">
                  <Heading size="medium">Organização</Heading>
                  <Text size="medium">Selecione o responsável pelo evento</Text>
                </div>
                <IconButton size="small">
                  <EditIcon style={{ color: '#f97316' }} />
                </IconButton>
                <div className="flex flex-col w-full gap-1">
                  <label>Selecione aqui</label>
                  <FormControl fullWidth>
                    <InputLabel>Selecione...</InputLabel>
                    <Select label="Selecione...">
                      <MenuItem value="">
                        <em>Produtora XPTO</em>
                      </MenuItem>
                      {/* Adicione mais opções conforme necessário */}
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 mb-6">
              <div className="flex items-start gap-5">
                <div className="flex flex-col w-[20vw]">
                  <Heading size="medium">Nome do Evento</Heading>
                  <Text size="medium">Insira o nome do evento</Text>
                </div>
                <IconButton size="small">
                  <EditIcon style={{ color: '#f97316' }} />
                </IconButton>
                <div className="flex flex-col w-full gap-1">
                  <label>Digite aqui</label>
                  <TextField fullWidth InputProps={{ endAdornment: <IconButton><EditIcon /></IconButton> }} />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 mb-6">
              <div className="flex items-start gap-5">
                <div className="flex flex-col w-[20vw]">
                  <Heading size="medium">Localização</Heading>
                  <Text size="medium">Escolha o formato e a localização do seu evento</Text>
                </div>
                <IconButton size="small">
                  <EditIcon style={{ color: '#f97316' }} />
                </IconButton>
                <div className="flex flex-col w-full gap-4">
                  <label>Formato do evento</label>
                  <div className="flex items-center gap-2 mb-4">
                    <Button variant="contained" startIcon={<RoomIcon />}
                      style={{ backgroundColor: '#FF9800', color: '#fff', border: 'none', boxShadow: 'none' }}>
                      Presencial
                    </Button>
                    <Button variant="contained" startIcon={<WifiIcon />}
                      style={{ backgroundColor: '#c2c2c2', color: '#fff', border: 'none', boxShadow: 'none' }}>
                      Evento On-line
                    </Button>
                    <Button variant="contained" startIcon={<PhonelinkIcon />}
                      style={{ backgroundColor: '#c2c2c2', color: '#fff', border: 'none', boxShadow: 'none' }}>
                      Presencial + On-line
                    </Button>
                  </div>
                  <TextField fullWidth label="Nome do local" InputProps={{ endAdornment: <IconButton><EditIcon /></IconButton> }} />
                  <div className="flex gap-4">
                    <TextField className="w-[40%]" label="CEP" value={cep} onChange={handleCepChange} />
                    <TextField fullWidth label="Rua" name="logradouro" value={endereco.logradouro} onChange={handleEnderecoChange} />
                  </div>
                  <div className="flex gap-4">
                    <TextField className="w-[40%]"  label="Número" name="numero" value={endereco.numero} onChange={handleEnderecoChange} />
                    <TextField fullWidth label="Complemento" name="complemento" value={endereco.complemento} onChange={handleEnderecoChange} />
                  </div>
                  <div className="flex gap-4">
                    <TextField fullWidth label="Bairro" name="bairro" value={endereco.bairro} onChange={handleEnderecoChange} />
                    <TextField label="Cidade" name="cidade" fullWidth value={endereco.cidade} onChange={handleEnderecoChange} />
                    <TextField label="Estado" name="uf" className="w-[40%]" value={endereco.uf} onChange={handleEnderecoChange} />

                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 mb-6">
              <div className="flex items-start gap-5">
                <div className="flex flex-col w-[20vw]">
                  <Heading size="medium">Mapa de Lugares</Heading>
                  <Text size="medium">Mapa de lugares onde seu evento irá acontecer</Text>
                </div>
                <IconButton size="small">
                  <EditIcon style={{ color: '#f97316' }} />
                </IconButton>
                <div className="flex flex-col w-full gap-1">
                  <label>Mapa de lugares</label>
                  <FormControl fullWidth>
                    <InputLabel>Sem mapa</InputLabel>
                    <Select label="Sem mapa">
                      {/* Adicione mais opções conforme necessário */}
                      
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 mb-6">
              <div className="flex items-start gap-5">
                <div className="flex flex-col w-[20vw]">
                  <Heading size="medium">Data e horário</Heading>
                  <Text size="medium">Insira as informações do seu evento</Text>
                </div>
                <IconButton size="small">
                  <EditIcon style={{ color: '#f97316' }} />
                </IconButton>
                <div className="flex flex-col w-full gap-1">
                  <label>Abertura do evento</label>
                  <div className="flex gap-4">
                    <TextField
                      label="Abertura do Evento"
                      type="date"
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                    />
                    <div className="flex gap-4">
                      <TextField label="Hora Início" type="time" fullWidth InputLabelProps={{ shrink: true }} defaultValue="11:00" />
                      <TextField label="Hora Final" type="time" fullWidth InputLabelProps={{ shrink: true }} defaultValue="23:00" />
                    </div>
                  </div>
                  <label>Encerramento do evento</label>
                  <div className="flex gap-4">
                    <TextField
                      label="Encerramento do Evento"
                      type="date"
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                    />
                    <div className="flex gap-4">
                      <TextField label="Hora Início" type="time" fullWidth InputLabelProps={{ shrink: true }} defaultValue="11:00" />
                      <TextField label="Hora Final" type="time" fullWidth InputLabelProps={{ shrink: true }} defaultValue="23:00" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 mb-6">
              <div className="flex items-start gap-5">
                <div className="flex flex-col w-[20vw]">
                  <Heading size="medium">Descrição do evento</Heading>
                  <Text size="medium">Inclua a descrição com as características e atrações do evento, detalhe as classificações etárias e defina uma categoria que se encaixe com o perfil do seu evento.</Text>
                </div>
                <IconButton size="small">
                  <EditIcon style={{ color: '#f97316' }} />
                </IconButton>
                <div className="flex flex-col w-full gap-1">
                  <label>Descrição do evento</label>
                  <TextField label="Descrição do Evento" multiline rows={4} fullWidth />
                  <TextField label="Classificação Etária" multiline rows={4} fullWidth />
                  <TextField label="Categoria" select fullWidth>
                    <MenuItem value="">
                      <em>Show</em>
                    </MenuItem>
                    {/* Adicione mais opções conforme necessário */}
                  </TextField>
                  <TextField label="Categoria Secundária" select fullWidth>
                    <MenuItem value="">
                      <em>Selecione</em>
                    </MenuItem>
                    {/* Adicione mais opções conforme necessário */}
                  </TextField>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <Button variant="contained" style={{ backgroundColor: '#FF9800', color: '#fff', border: 'none', boxShadow: 'none' }}>Capa</Button>
              <Button variant="contained" style={{ backgroundColor: '#c2c2c2', color: '#fff', border: 'none', boxShadow: 'none' }}>Galeria</Button>
              <Button variant="contained" style={{ backgroundColor: '#c2c2c2', color: '#fff', border: 'none', boxShadow: 'none' }}>Mapa do local</Button>
            </div>

            <div className="mt-6">
              <Heading size="medium">Imagem Selecionada</Heading>
              <div className="w-full bg-gray-100 rounded-lg p-4">
                {/* Exemplo de imagem */}
                <img src="./thumbnail.png" alt="Imagem Selecionada" className="w-full rounded-lg" />
              </div>
            </div>

            <div className="mt-6">
              <Heading size="medium">Imagens do evento</Heading>
              <div className="flex gap-4">
                {/* Exemplo de miniaturas de imagens */}
                <img src="./thumbnail.png" alt="Imagem do Evento" className="w-24 h-24 rounded-lg" />
              </div>
            </div>
            <Button variant="contained"
              style={{ backgroundColor: '#FF9800', color: '#fff', border: '1px solid #FF9800', boxShadow: 'none' }}
            >Cadastrar Evento</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NovoEvento;
