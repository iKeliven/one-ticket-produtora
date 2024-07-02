import React from "react";
import { Button, IconButton, Chip, Avatar } from '@mui/material';
import { DataGrid, GridPagination } from '@mui/x-data-grid';
import { DeleteOutline, DriveFileRenameOutline } from '@mui/icons-material';
import SidebarEvent from "../components/SidebarEvent";
import HeaderSection from "../components/HeaderSection";
import Footer from "../components/Footer";
import { Heading } from "../components/Heading";
import { TextField, Stack, MenuItem } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

// Dados de exemplo para a tabela de colaboradores
const rows = [
  { id: 1, nome: 'Ana Silva', dataCadastro: '2024-05-05', evento: 'Concerto' },
  { id: 2, nome: 'João Santos', dataCadastro: '2024-05-06', evento: 'Espetáculo' },
  { id: 3, nome: 'Pedro Oliveira', dataCadastro: '2024-05-07', evento: 'Festival' },
  { id: 4, nome: 'Mariana Costa', dataCadastro: '2024-05-08', evento: 'Exposição' },
  // Adicione mais linhas conforme necessário
];

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'nome',
    headerName: 'Nome',
    width: 200,
    renderCell: (params) => (
      <Chip
        avatar={<Avatar alt={params.value} src="/static/images/avatar/1.jpg" />}
        label={params.value}
        variant="outlined"
      />
    ),
  },
  { field: 'dataCadastro', headerName: 'Data Cadastro', width: 180 },
  { field: 'evento', headerName: 'Evento', width: 200 },
  {
    field: 'acoes',
    headerName: 'Ações',
    width: 150,
    renderCell: (params) => (
      <div className="flex gap-3">
        <IconButton>
          <DeleteOutline sx={{ color: '#FF9800', fontSize: 24 }} />
        </IconButton>
        <IconButton>
          <DriveFileRenameOutline sx={{ color: '#FF9800', fontSize: 24 }} />
        </IconButton>
      </div>
    ),
  },
];

export default function Participantes() {
  const [status, setStatus] = React.useState([]);

  const handleStatusChange = (status) => {
    setStatus((prevStatus) =>
      prevStatus.includes(status) ? prevStatus.filter((s) => s !== status) : [...prevStatus, status]
    );
  };
  return (
    <div className="flex flex-col w-[100vw]">
      <HeaderSection />
      <div className="flex">
        <SidebarEvent />
        <div className="flex w-[75vw] flex-col bg-[#e6e6e6] pt-[120px] gap-5 p-8 flex-grow">
          <div className="bg-white p-8 box-border gap-5 shadow-md rounded-xl">
            <div className="flex justify-between pb-8">
              <Heading size="large">Participantes</Heading>
              <Button
                variant="contained"
                style={{ backgroundColor: '#FF9800', color: '#fff', border: '1px solid #FF9800', boxShadow: 'none' }}
              >
                Cadastrar Novo
              </Button>
            </div>
            <div className="flex gap-5 items-start justify-start">
              
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pagination
                  pageSize={8}
                  rowsPerPageOptions={[8, 16, 24]}
                  checkboxSelection
                  components={{ Pagination: GridPagination }}
                />
              
              <div className="w-[300px]">
      <div className="flex items-center gap-2 ">
        <FilterListIcon />
        <h2 className="font-bold">Filtros</h2>
      </div>
      <div className="flex flex-col gap-4">
        <TextField
          label="De"
          type="date"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Até"
          type="date"
          InputLabelProps={{ shrink: true }}
        />
        <TextField label="Cidade" select>
          <MenuItem value="">
            <em>-----</em>
          </MenuItem>
          <MenuItem value="Florianópolis - SC">Florianópolis - SC</MenuItem>
          <MenuItem value="São Paulo - SP">São Paulo - SP</MenuItem>
        </TextField>
        <TextField label="Nome" />
        <TextField label="Categoria" select>
          <MenuItem value="">
            <em>-----</em>
          </MenuItem>
          <MenuItem value="Concerto">Concerto</MenuItem>
          <MenuItem value="Teatro">Teatro</MenuItem>
        </TextField>
        <div>
          <h3 className="font-bold mb-2">Status</h3>
          <Stack direction="row" spacing={1}>
            <Chip
              label="Encerrado"
              color={status.includes('encerrado') ? 'primary' : 'default'}
              onClick={() => handleStatusChange('encerrado')}
            />
            <Chip
              label="Pendente"
              color={status.includes('pendente') ? 'primary' : 'default'}
              onClick={() => handleStatusChange('pendente')}
            />
            <Chip
              label="Ativo"
              color={status.includes('ativo') ? 'primary' : 'default'}
              onClick={() => handleStatusChange('ativo')}
            />
          </Stack>
        </div>
        <Button variant="contained" style={{background: "#f97316", border: "none"}}>
          Aplicar Filtros
        </Button>
      </div>
    </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
