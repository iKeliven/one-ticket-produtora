import React from "react";
import { TextField, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import HeaderSection from "../components/HeaderSection";
import Footer from "../components/Footer";
import SidebarEvent from "../components/SidebarEvent";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";

const Checkin: React.FunctionComponent = () => {
  const ingressosComCheckin = [
    { nome: "João Silva", evento: "Concerto XPTO", data: "10/05/2024", codigo: "ABC123", status: "Check-in realizado" },
    { nome: "Maria Oliveira", evento: "Festival ABC", data: "15/05/2024", codigo: "DEF456", status: "Check-in realizado" },
    { nome: "Carlos Souza", evento: "Teatro 123", data: "20/05/2024", codigo: "GHI789", status: "Check-in realizado" },
  ];

  return (
    <div className="flex flex-col w-[100vw]">
      <HeaderSection />
      <div className="flex">
        <SidebarEvent />
        <div className="flex w-[75vw] flex-col bg-[#e6e6e6] pt-[120px] gap-5 p-8 flex-grow">
          <div className="bg-white p-8 box-border gap-5 shadow-md rounded-xl">
            <Heading size="large">Cadastrar Check-in</Heading>

            <div className="flex flex-col gap-5 mb-6 pt-5">
              <div className="flex items-start gap-5">
                <div className="flex flex-col w-[20vw]">
                  <Heading size="medium">Nome do Participante</Heading>
                  <Text size="medium">Insira o nome do participante</Text>
                </div>
                
                <div className="flex flex-col w-full gap-1">
                  <label>Digite aqui</label>
                  <TextField fullWidth />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 mb-6">
              <div className="flex items-start gap-5">
                <div className="flex flex-col w-[20vw]">
                  <Heading size="medium">Evento</Heading>
                  <Text size="medium">Selecione o evento</Text>
                </div>
                
                <div className="flex flex-col w-full gap-1">
                  <label>Selecione aqui</label>
                  <TextField fullWidth select>
                    <MenuItem value="Concerto XPTO">Concerto XPTO</MenuItem>
                    <MenuItem value="Festival ABC">Festival ABC</MenuItem>
                    <MenuItem value="Teatro 123">Teatro 123</MenuItem>
                  </TextField>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 mb-6">
              <div className="flex items-start gap-5">
                <div className="flex flex-col w-[20vw]">
                  <Heading size="medium">Código do Ingresso</Heading>
                  <Text size="medium">Insira o código do ingresso</Text>
                </div>
                <div className="flex flex-col w-full gap-1">
                  <label>Digite aqui</label>
                  <TextField fullWidth />
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <Button variant="contained" 
               style={{ backgroundColor: '#FF9800', color: '#fff', border: '1px solid #FF9800', boxShadow: 'none' }}
              startIcon={<CheckIcon />}>Cadastrar Check-in</Button>
            </div>

            <div className="mt-6">
              <Heading size="medium">Ingressos com Check-in</Heading>
              <TableContainer component={Paper} className="mt-4">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Nome</TableCell>
                      <TableCell>Evento</TableCell>
                      <TableCell>Data</TableCell>
                      <TableCell>Código do Ingresso</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {ingressosComCheckin.map((ingresso, index) => (
                      <TableRow key={index}>
                        <TableCell>{ingresso.nome}</TableCell>
                        <TableCell>{ingresso.evento}</TableCell>
                        <TableCell>{ingresso.data}</TableCell>
                        <TableCell>{ingresso.codigo}</TableCell>
                        <TableCell>{ingresso.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkin;
