import React, { useState } from "react";
import { TextField, Button, IconButton, Select, MenuItem, Chip, Stack, Collapse, Card, CardContent, Menu } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import HeaderSection from "../components/HeaderSection";
import Footer from "../components/Footer";
import SidebarEvent from "../components/SidebarEvent";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";

const Ingresso: React.FunctionComponent = () => {
  const [openPista, setOpenPista] = useState(false);
  const [openCamarote, setOpenCamarote] = useState(false);
  const [anchorElPista, setAnchorElPista] = useState<null | HTMLElement>(null);
  const [anchorElCamarote, setAnchorElCamarote] = useState<null | HTMLElement>(null);

  const togglePista = () => {
    setOpenPista(!openPista);
  };

  const toggleCamarote = () => {
    setOpenCamarote(!openCamarote);
  };

  const handleClickPista = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElPista(event.currentTarget);
  };

  const handleClickCamarote = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElCamarote(event.currentTarget);
  };

  const handleClosePista = () => {
    setAnchorElPista(null);
  };

  const handleCloseCamarote = () => {
    setAnchorElCamarote(null);
  };

  return (
    <div className="flex flex-col w-[100vw]">
      <HeaderSection />
      <div className="flex">
        <SidebarEvent />
        <div className="flex w-[75vw] flex-col bg-[#e6e6e6] pt-[120px] gap-5 p-8 flex-grow">
          <div className="bg-white p-8 box-border gap-5 shadow-md rounded-xl">
            <Heading size="large">Produtos e Lotes</Heading>

            {/* Seção Pista */}
            <div className="flex flex-col gap-5 mb-6 pt-5">
              <div className="flex justify-between items-center">
                <Heading size="medium">Pista</Heading>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  sx={{
                    boxShadow: 'none',
                    backgroundColor: '#FF9800',
                    color: '#fff',
                    width: '200px',
                    padding: '5px',
                    border: 'none',
                    '&:hover': {
                      fontWeight: 'bold',
                      backgroundColor: '#FF9800',
                    },
                  }}
                >
                  Cadastrar Novo
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-grow">
                  <TextField fullWidth defaultValue="LOTE 1" />
                </div>
                <IconButton size="small" onClick={handleClickPista}>
                  <SettingsIcon style={{ color: '#f97316' }} />
                </IconButton>
                <Menu
                  anchorEl={anchorElPista}
                  open={Boolean(anchorElPista)}
                  onClose={handleClosePista}
                >
                  <MenuItem onClick={handleClosePista}>Desativar</MenuItem>
                  <MenuItem onClick={handleClosePista}>Editar</MenuItem>
                </Menu>
                <Chip label="ativo" color="success" className="w-[250px]" />
                <IconButton onClick={togglePista}>
                  {openPista ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                </IconButton>
              </div>
              <Collapse in={openPista}>
                <div className="flex gap-4 mt-4">
                  <Card className="flex w-[40vw]">
                    <CardContent>
                      <div className="flex flex-col w-full gap-4">
                        <div className="flex items-center gap-5">
                          <Heading size="small">Lote 1</Heading>
                          <Text size="medium">|</Text>
                          <Text size="medium">100un</Text>
                        </div>
                        <Stack direction="row" spacing={2}>
                          <Chip label="Inteira" color="success" className="w-[250px]" />
                          <Select defaultValue="R$ 100,00" className="w-[20vw]">
                            <MenuItem value="R$ 100,00">R$ 100,00</MenuItem>
                            <MenuItem value="R$ 120,00">R$ 120,00</MenuItem>
                          </Select>
                          <div className="flex items-center w-full">
                            <TextField defaultValue="50" />
                            <Text size="medium">/ 100</Text>
                          </div>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                          <Chip label="Meia-entrada" color="success" className="w-[250px]" />
                          <Select defaultValue="R$ 50,00" className="w-[20vw]">
                            <MenuItem value="R$ 50,00">R$ 50,00</MenuItem>
                            <MenuItem value="R$ 60,00">R$ 60,00</MenuItem>
                          </Select>
                          <div className="flex items-center w-full">
                            <TextField defaultValue="30" />
                            <Text size="medium">/ 100</Text>
                          </div>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                          <Chip label="Bônus" color="warning" className="w-[250px]" />
                          <Select defaultValue="R$ 0,00" className="w-[20vw]">
                            <MenuItem value="R$ 0,00">R$ 0,00</MenuItem>
                          </Select>
                          <div className="flex items-center w-full">
                            <TextField defaultValue="20" />
                            <Text size="medium">/ 100</Text>
                          </div>
                        </Stack>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="flex w-[40vw]">
                    <CardContent>
                      <div className="flex flex-col w-full gap-4">
                      <div className="flex items-center gap-5">
                          <Heading size="small">Lote 2</Heading>
                          <Text size="medium">|</Text>
                          <Text size="medium">100un</Text>
                        </div>
                        <Stack direction="row" spacing={2}>
                          
                          <Select defaultValue="R$ 150,00" className="w-[20vw]">
                            <MenuItem value="R$ 150,00">R$ 150,00</MenuItem>
                            <MenuItem value="R$ 180,00">R$ 180,00</MenuItem>
                          </Select>
                          <div className="flex items-center w-full">
                            <TextField defaultValue="100" />
                            <Text size="medium">/ 200</Text>
                          </div>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                          
                          <Select defaultValue="R$ 75,00" className="w-[20vw]">
                            <MenuItem value="R$ 75,00">R$ 75,00</MenuItem>
                            <MenuItem value="R$ 90,00">R$ 90,00</MenuItem>
                          </Select>
                          <div className="flex items-center w-full">
                            <TextField defaultValue="60" />
                            <Text size="medium">/ 200</Text>
                          </div>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                          
                          <Select defaultValue="R$ 0,00" className="w-[20vw]">
                            <MenuItem value="R$ 0,00">R$ 0,00</MenuItem>
                          </Select>
                          <div className="flex items-center w-full">
                            <TextField defaultValue="40" />
                            <Text size="medium">/ 200</Text>
                          </div>
                        </Stack>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Collapse>
            </div>

            {/* Seção Camarote */}
            <div className="flex flex-col gap-5 mb-6 pt-5">
              <div className="flex justify-between items-center">
                <Heading size="medium">Camarote Premium</Heading>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  sx={{
                    boxShadow: 'none',
                    backgroundColor: '#FF9800',
                    color: '#fff',
                    width: '200px',
                    padding: '5px',
                    border: 'none',
                    '&:hover': {
                      fontWeight: 'bold',
                      backgroundColor: '#FF9800',
                    },
                  }}
                >
                  Cadastrar Novo
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-grow">
                  <TextField fullWidth defaultValue="LOTE 1" />
                </div>
                <IconButton size="small" onClick={handleClickCamarote}>
                  <SettingsIcon style={{ color: '#f97316' }} />
                </IconButton>
                <Menu
                  anchorEl={anchorElCamarote}
                  open={Boolean(anchorElCamarote)}
                  onClose={handleCloseCamarote}
                >
                  <MenuItem onClick={handleCloseCamarote}>Desativar</MenuItem>
                  <MenuItem onClick={handleCloseCamarote}>Editar</MenuItem>
                </Menu>
                <Chip label="ativo" color="success" className="w-[250px]" />
                <IconButton onClick={toggleCamarote}>
                  {openCamarote ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                </IconButton>
              </div>
              <Collapse in={openCamarote}>
                <div className="flex gap-4 mt-2">
                  <Card className="flex w-[40vw]">
                    <CardContent>
                      <div className="flex flex-col  gap-4">
                        <div className="flex items-center gap-5">
                          <Heading size="small">Lote 1</Heading>
                          <Text size="medium">|</Text>
                          <Text size="medium">100un</Text>
                        </div>
                        <Stack direction="row" spacing={2}>
                          <Chip label="Inteira" color="success" className="w-[250px]" />
                          <Select defaultValue="R$ 200,00" className="w-[20vw]">
                            <MenuItem value="R$ 200,00">R$ 200,00</MenuItem>
                            <MenuItem value="R$ 240,00">R$ 240,00</MenuItem>
                          </Select>
                          <div className="flex items-center w-full">
                            <TextField defaultValue="50" />
                            <Text size="medium">/ 100</Text>
                          </div>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                          <Chip label="Meia-entrada" color="success" className="w-[250px]" />
                          <Select defaultValue="R$ 100,00" className="w-[20vw]">
                            <MenuItem value="R$ 100,00">R$ 100,00</MenuItem>
                            <MenuItem value="R$ 120,00">R$ 120,00</MenuItem>
                          </Select>
                          <div className="flex items-center w-full">
                            <TextField defaultValue="30" />
                            <Text size="medium">/ 100</Text>
                          </div>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                          <Chip label="Bônus" color="warning" className="w-[250px]" />
                          <Select defaultValue="R$ 0,00" className="w-[20vw]">
                            <MenuItem value="R$ 0,00">R$ 0,00</MenuItem>
                          </Select>
                          <div className="flex items-center w-full">
                            <TextField defaultValue="20" />
                            <Text size="medium">/ 100</Text>
                          </div>
                        </Stack>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="flex w-[30vw]">
                    <CardContent>
                      <div className="flex flex-col w-full gap-4">
                      <div className="flex items-center gap-5">
                          <Heading size="small">Lote 2</Heading>
                          <Text size="medium">|</Text>
                          <Text size="medium">100un</Text>
                        </div>
                        <Stack direction="row" spacing={2}>
                          
                          <Select defaultValue="R$ 300,00" className="w-[20vw]">
                            <MenuItem value="R$ 300,00">R$ 300,00</MenuItem>
                            <MenuItem value="R$ 350,00">R$ 350,00</MenuItem>
                          </Select>
                          <div className="flex items-center w-full">
                            <TextField defaultValue="100" />
                            <Text size="medium">/ 200</Text>
                          </div>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                          
                          <Select defaultValue="R$ 150,00" className="w-[20vw]">
                            <MenuItem value="R$ 150,00">R$ 150,00</MenuItem>
                            <MenuItem value="R$ 175,00">R$ 175,00</MenuItem>
                          </Select>
                          <div className="flex items-center w-full">
                            <TextField defaultValue="60" />
                            <Text size="medium">/ 200</Text>
                          </div>
                        </Stack>
                        <Stack direction="row" spacing={2}>
            
                          <Select defaultValue="R$ 0,00" className="w-[20vw]">
                            <MenuItem value="R$ 0,00">R$ 0,00</MenuItem>
                          </Select>
                          <div className="flex items-center w-full">
                            <TextField defaultValue="40" />
                            <Text size="medium">/ 200</Text>
                          </div>
                        </Stack>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ingresso;
