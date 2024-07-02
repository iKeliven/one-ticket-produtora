
import React from "react";
import { TextField, Button, IconButton, List, ListItem, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import HeaderSection from "../components/HeaderSection";
import Footer from "../components/Footer";
import SidebarEvent from "../components/SidebarEvent";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { Delete } from "@mui/icons-material";

const Comunicados: React.FunctionComponent = () => {
  const comunicadosAnteriores = [
    { titulo: "Comunicado 1", descricao: "Descrição do comunicado 1" },
    { titulo: "Comunicado 2", descricao: "Descrição do comunicado 2" },
    { titulo: "Comunicado 3", descricao: "Descrição do comunicado 3" },
  ];

  return (
    <div className="flex flex-col w-[100vw]">
      <HeaderSection />
      <div className="flex">
        <SidebarEvent />
        <div className="flex w-[75vw] flex-col bg-[#e6e6e6] pt-[120px] gap-5 p-8 flex-grow">
          <div className="bg-white p-8 box-border gap-5 shadow-md rounded-xl">
            <Heading size="large">Cadastrar Comunicado</Heading>

            <div className="flex flex-col gap-5 mb-6 pt-5">
              <div className="flex items-start gap-5">
                <div className="flex flex-col w-[20vw]">
                  <Heading size="medium">Título</Heading>
                  <Text size="medium">Insira o título do comunicado</Text>
                </div>
                <div className="flex flex-col w-full gap-1">
                  <label>Digite o título</label>
                  <TextField fullWidth />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 mb-6">
              <div className="flex items-start gap-5">
                <div className="flex flex-col w-[20vw]">
                  <Heading size="medium">Descrição</Heading>
                  <Text size="medium">Insira a descrição do comunicado</Text>
                </div>
                <div className="flex flex-col w-full gap-1">
                  <label>Digite a descrição</label>
                  <TextField multiline rows={4} fullWidth />
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <Button variant="contained" 
               style={{ backgroundColor: '#FF9800', color: '#fff', border: '1px solid #FF9800', boxShadow: 'none' }}
              >Salvar</Button>
            </div>

            <div className="mt-6">
              <Heading size="medium">Comunicados Anteriores</Heading>
              <List className="w-full bg-gray-100 rounded-lg p-4">
                {comunicadosAnteriores.map((comunicado, index) => (
                  <ListItem key={index} className="flex gap-5 bg-white p-4 rounded-lg mb-4 shadow-md">
                    <ListItemText primary={comunicado.titulo} secondary={comunicado.descricao}  />
                    <IconButton size="small">
                  <EditIcon style={{ color: '#f97316' }} />
                </IconButton>
                <IconButton size="small">
                  <Delete style={{ color: '#f97316' }} />
                </IconButton>
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Comunicados;
