import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  IconButton,
  Chip,
  Card,
  CardContent,
  Collapse,
  Stack
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import RoomIcon from '@mui/icons-material/Room';
import WifiIcon from '@mui/icons-material/Wifi';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import HeaderSection from "../components/HeaderSection";
import Footer from "../components/Footer";
import SidebarEvent from "../components/SidebarEvent";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";

const DetalhesEvento: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col w-[100vw]">
      <HeaderSection />
      <div className="flex">
        <SidebarEvent />
        <div className="flex w-[75vw] flex-col bg-[#e6e6e6] pt-[120px] gap-5 p-8 flex-grow">
          <div className="bg-white p-8 box-border gap-5 shadow-md rounded-xl">
            <Heading size="large">Detalhes do Evento</Heading>

            {/* Seção de Informações Básicas */}
            <div className="flex flex-col gap-5 mb-6 pt-5">
              <div className="flex items-start gap-5">
                <div className="flex flex-col w-[20vw]">
                  <Heading size="medium">Organização</Heading>
                  <Text size="medium">Produtora responsável pelo evento</Text>
                </div>
                <IconButton size="small">
                  <EditIcon style={{ color: '#f97316' }} />
                </IconButton>
                <div className="flex flex-col w-full gap-1">
                  <label>Produtora XPTO</label>
                  <FormControl fullWidth disabled>
                    <InputLabel>Produtora XPTO</InputLabel>
                    <Select label="Produtora XPTO">
                      <MenuItem value="">
                        <em>Produtora XPTO</em>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 mb-6">
              <div className="flex items-start gap-5">
                <div className="flex flex-col w-[20vw]">
                  <Heading size="medium">Nome do Evento</Heading>
                  <Text size="medium">Título do evento</Text>
                </div>
                <IconButton size="small">
                  <EditIcon style={{ color: '#f97316' }} />
                </IconButton>
                <div className="flex flex-col w-full gap-1">
                  <label>Evento XYZ</label>
                  <TextField fullWidth value="Evento XYZ" disabled InputProps={{ endAdornment: <IconButton><EditIcon /></IconButton> }} />
                </div>
              </div>
            </div>

            {/* Seção de Localização */}
            <div className="flex flex-col gap-5 mb-6">
              <div className="flex items-start gap-5">
                <div className="flex flex-col w-[20vw]">
                  <Heading size="medium">Localização</Heading>
                  <Text size="medium">Formato e local do evento</Text>
                </div>
                <IconButton size="small">
                  <EditIcon style={{ color: '#f97316' }} />
                </IconButton>
                <div className="flex flex-col w-full gap-1">
                  <label>Formato do evento</label>
                  <div className="flex items-center gap-2 mb-4">
                    <Button variant="contained" startIcon={<RoomIcon />} disabled>
                      Presencial
                    </Button>
                    <Button variant="contained" startIcon={<WifiIcon />} disabled>
                      Evento On-line
                    </Button>
                    <Button variant="contained" startIcon={<PhonelinkIcon />} disabled>
                      Presencial + On-line
                    </Button>
                  </div>
                  <TextField fullWidth label="Nome do local" value="Local XYZ" disabled InputProps={{ endAdornment: <IconButton><EditIcon /></IconButton> }} />
                  <TextField fullWidth label="Endereço" value="Rua ABC, 123" disabled />
                  <div className="flex gap-4">
                    <TextField label="CEP" value="00000-000" fullWidth disabled />
                    <TextField label="Número" value="123" fullWidth disabled />
                  </div>
                  <div className="flex gap-4">
                    <TextField label="Cidade" value="Cidade XYZ" fullWidth disabled />
                    <TextField label="UF" value="SP" select fullWidth disabled>
                      <MenuItem value="SP">
                        <em>SP</em>
                      </MenuItem>
                    </TextField>
                  </div>
                </div>
              </div>
            </div>

            {/* Seção de Data e Horário */}
            <div className="flex flex-col gap-5 mb-6">
              <div className="flex items-start gap-5">
                <div className="flex flex-col w-[20vw]">
                  <Heading size="medium">Data e horário</Heading>
                  <Text size="medium">Informações sobre data e horário do evento</Text>
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
                      value="2024-05-05"
                      InputLabelProps={{ shrink: true }}
                      disabled
                    />
                    <div className="flex gap-4">
                      <TextField label="Hora Início" type="time" fullWidth value="11:00" InputLabelProps={{ shrink: true }} disabled />
                      <TextField label="Hora Final" type="time" fullWidth value="23:00" InputLabelProps={{ shrink: true }} disabled />
                    </div>
                  </div>
                  <label>Encerramento do evento</label>
                  <div className="flex gap-4">
                    <TextField
                      label="Encerramento do Evento"
                      type="date"
                      fullWidth
                      value="2024-05-06"
                      InputLabelProps={{ shrink: true }}
                      disabled
                    />
                    <div className="flex gap-4">
                      <TextField label="Hora Início" type="time" fullWidth value="11:00" InputLabelProps={{ shrink: true }} disabled />
                      <TextField label="Hora Final" type="time" fullWidth value="23:00" InputLabelProps={{ shrink: true }} disabled />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Seção de Descrição */}
            <div className="flex flex-col gap-5 mb-6">
              <div className="flex items-start gap-5">
                <div className="flex flex-col w-[20vw]">
                  <Heading size="medium">Descrição do evento</Heading>
                  <Text size="medium">Detalhes e características do evento</Text>
                </div>
                <IconButton size="small">
                  <EditIcon style={{ color: '#f97316' }} />
                </IconButton>
                <div className="flex flex-col w-full gap-1">
                  <label>Descrição do evento</label>
                  <TextField label="Descrição do Evento" value="Descrição completa do evento XYZ" multiline rows={4} fullWidth disabled />
                  <TextField label="Classificação Etária" value="Livre" multiline rows={4} fullWidth disabled />
                  <TextField label="Categoria" value="Show" select fullWidth disabled>
                    <MenuItem value="Show">
                      <em>Show</em>
                    </MenuItem>
                  </TextField>
                  <TextField label="Categoria Secundária" value="Concerto" select fullWidth disabled>
                    <MenuItem value="Concerto">
                      <em>Concerto</em>
                    </MenuItem>
                  </TextField>
                </div>
              </div>
            </div>

            {/* Seção de Imagens */}
            <div className="mt-6">
              <Heading size="medium">Imagens do Evento</Heading>
              <div className="flex gap-4 mt-4">
                <div className="flex flex-col items-center gap-2">
                  <Text size="small">Imagem Selecionada</Text>
                  <div className="w-full bg-gray-100 rounded-lg p-4">
                    <img src="./thumbnail.png" alt="Imagem Selecionada" className="w-full rounded-lg" />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Text size="small">Imagens do Evento</Text>
                  <div className="w-full bg-gray-100 rounded-lg p-4">
                    <img src="./thumbnail.png" alt="Imagem do Evento" className="w-full rounded-lg" />
                  </div>
                  <div className="w-full bg-gray-100 rounded-lg p-4">
                    <img src="./thumbnail.png" alt="Imagem do Evento" className="w-full rounded-lg" />
                  </div>
                  <div className="w-full bg-gray-100 rounded-lg p-4">
                    <img src="./thumbnail.png" alt="Imagem do Evento" className="w-full rounded-lg" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetalhesEvento;
