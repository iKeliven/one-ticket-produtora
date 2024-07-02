import Footer from "../components/Footer";
import { DataGrid, GridPagination } from '@mui/x-data-grid';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { DeleteOutline, DriveFileRenameOutline } from '@mui/icons-material';
import React, { useState } from 'react';
import SidebarEvent from "../components/SidebarEvent";
import HeaderSection from "../components/HeaderSection";
import { Heading } from "../components/Heading";
import { Button } from "@mui/material";

// Dados de exemplo para a tabela de usuários
const rows = [
  { id: 1, nome: 'Ana Silva', dataCadastro: '2024-05-05', setor: 'Financeiro', nivelAcesso: 1, status: 'Ativo' },
  { id: 2, nome: 'João Santos', dataCadastro: '2024-05-06', setor: 'Administração', nivelAcesso: 2, status: 'Inativo' },
  { id: 3, nome: 'Pedro Oliveira', dataCadastro: '2024-05-07', setor: 'Marketing', nivelAcesso: 3, status: 'Ativo' },
  { id: 4, nome: 'Mariana Costa', dataCadastro: '2024-05-08', setor: 'Produção', nivelAcesso: 1, status: 'Inativo' },
  { id: 5, nome: 'Ana Silva', dataCadastro: '2024-05-05', setor: 'Financeiro', nivelAcesso: 1, status: 'Ativo' },
  { id: 6, nome: 'João Santos', dataCadastro: '2024-05-06', setor: 'Administração', nivelAcesso: 2, status: 'Inativo' },
  { id: 7, nome: 'Pedro Oliveira', dataCadastro: '2024-05-07', setor: 'Marketing', nivelAcesso: 3, status: 'Ativo' },
  { id: 8, nome: 'Mariana Costa', dataCadastro: '2024-05-08', setor: 'Produção', nivelAcesso: 1, status: 'Inativo' },
  { id: 9, nome: 'João Santos', dataCadastro: '2024-05-06', setor: 'Administração', nivelAcesso: 2, status: 'Inativo' },
  { id: 10, nome: 'Mariana Costa', dataCadastro: '2024-05-06', setor: 'Administração', nivelAcesso: 2, status: 'Inativo' },

  // Adicione mais linhas conforme necessário
];

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'nome',
    headerName: 'Nome',
    width: 300,
    renderCell: (params) => (
      <Chip
        avatar={<Avatar alt={params.value} src="/static/images/avatar/1.jpg" />}
        label={params.value}
        variant="outlined"
      />
    ),
  },
  { field: 'dataCadastro', headerName: 'Data Cadastro', width: 180 },
  { field: 'setor', headerName: 'Setor', width: 180 },
  { field: 'nivelAcesso', headerName: 'Nível de Acesso', width: 180 },
  { field: 'status', headerName: 'Status', width: 130, renderCell: (params) => <Chip label={params.value} color={params.value === 'Ativo' ? 'success' : 'error'} /> },
  {
    field: 'acoes',
    headerName: 'Ações',
    width: 150,
    renderCell: (params) => (
      <div className="flex gap-3 mt-3">
        <DeleteOutline sx={{ color: '#FF9800', fontSize: 24 }} />
        <DriveFileRenameOutline sx={{ color: '#FF9800', fontSize: 24 }} />
      </div>
    ),
  },
];

export default function Colaboradores() {



  return (
    <div className="flex flex-col w-[100vw]">
      <HeaderSection />
      <div className="flex">
        <SidebarEvent />
        <div className="flex w-[75vw] flex-col bg-[#e6e6e6] pt-[120px] gap-5 p-8 flex-grow">
          <div className="bg-white p-8 box-border gap-5 shadow-md rounded-xl">
            <div className="flex justify-between pb-8">
            <Heading size="large">Colaboradores</Heading>
            <Button
          variant="contained"
          style={{ backgroundColor: '#FF9800', color: '#fff', border: '1px solid #FF9800', boxShadow: 'none' }}
        >
          Cadastrar Novo
        </Button>
            </div>
            <div className="flex">
              <DataGrid
              rows={rows}
              columns={columns}
              pagination
              pageSize={8}
              rowsPerPageOptions={[8, 16, 24]}
              checkboxSelection
              components={{ pagination: GridPagination }}
            />
            </div>
            
          </div>
        </div>
      </div>

      <Footer />

    </div>

  );
}
