

import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Stack,
  TablePagination,
  TextField,
  Typography,
} from "@mui/material";
import Layout from "../../components/Layout";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import edit from '../../assets/edit.png';
import { createTheme, ThemeProvider } from "@mui/material/styles";


function LeadsPage() {

  const ellipsisStyle  ={
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '150px',
  };


  const theme = createTheme({
    palette: {
      primary: {
        main: "#009FE3",
        contrastText: "white"
      },
    },
  });

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#F7F9FB",
      color: "var(--text-primary, rgba(0, 0, 0, 0.87))",
      fontSize: "14px",
      fontFamily: "Outfit",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "24px",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: "14px",
      fontFamily: "Outfit",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "24px",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      "&:hover": {
        cu$or: "pointer",
        backgroundColor: "#F1FBFF",
      },
    },
    "&:nth-of-type(even)": {
      "&:hover": {
        cu$or: "pointer",
        backgroundColor: "#F1FBFF",
      },
    },
    // '&:last-child td, &:last-child th': {
    //   border: 0,
    // },
  }));

  function createData(
    date: string,
    percent: string,
    corredaro: string,
    nombre: string,
    lead: string,
    email: string,
    phone: string,
    project: string,
    comuna: string,
    valor: number,
    Observaciones: string
  ) {
    return {  date, percent, corredaro,nombre,lead,email,phone,project,comuna,valor,Observaciones };
  }

  const rows = [
    createData("18 - Nov", "12.263.777.8", "Nieto & Stone", "Juan Pablo Rios", "Ingresado", "jprios@gamil.com","+569 9139 3994","Edificio Step","San Bernardo",8.000,"Interesado En..."),
    createData("18 - Nov", "12.263.777.8", "Nieto & Stone", "Juan Pablo Rios", "Ingresado", "jprios@gamil.com","+569 9139 3994","Edificio Step","San Bernardo",8.000,"Interesado En..."),
    createData("18 - Nov", "12.263.777.8", "Nieto & Stone", "Juan Pablo Rios", "Ingresado", "jprios@gamil.com","+569 9139 3994","Edificio Step","San Bernardo",8.000,"Interesado En..."),
    createData("18 - Nov", "12.263.777.8", "Nieto & Stone", "Juan Pablo Rios", "Ingresado", "jprios@gamil.com","+569 9139 3994","Edificio Step","San Bernardo",8.000,"Interesado En..."),
    createData("18 - Nov", "12.263.777.8", "Nieto & Stone", "Juan Pablo Rios", "Ingresado", "jprios@gamil.com","+569 9139 3994","Edificio Step","San Bernardo",8.000,"Interesado En..."),
    createData("18 - Nov", "12.263.777.8", "Nieto & Stone", "Juan Pablo Rios", "Ingresado", "jprios@gamil.com","+569 9139 3994","Edificio Step","San Bernardo",8.000,"Interesado En..."),
    createData("18 - Nov", "12.263.777.8", "Nieto & Stone", "Juan Pablo Rios", "Ingresado", "jprios@gamil.com","+569 9139 3994","Edificio Step","San Bernardo",8.000,"Interesado En..."),
    createData("18 - Nov", "12.263.777.8", "Nieto & Stone", "Juan Pablo Rios", "Ingresado", "jprios@gamil.com","+569 9139 3994","Edificio Step","San Bernardo",8.000,"Interesado En..."),
    createData("18 - Nov", "12.263.777.8", "Nieto & Stone", "Juan Pablo Rios", "Ingresado", "jprios@gamil.com","+569 9139 3994","Edificio Step","San Bernardo",8.000,"Interesado En..."),
    createData("18 - Nov", "12.263.777.8", "Nieto & Stone", "Juan Pablo Rios", "Ingresado", "jprios@gamil.com","+569 9139 3994","Edificio Step","San Bernardo",8.000,"Interesado En..."),
    createData("18 - Nov", "12.263.777.8", "Nieto & Stone", "Juan Pablo Rios", "Ingresado", "jprios@gamil.com","+569 9139 3994","Edificio Step","San Bernardo",8.000,"Interesado En..."),
    createData("18 - Nov", "12.263.777.8", "Nieto & Stone", "Juan Pablo Rios", "Ingresado", "jprios@gamil.com","+569 9139 3994","Edificio Step","San Bernardo",8.000,"Interesado En..."),
    createData("18 - Nov", "12.263.777.8", "Nieto & Stone", "Juan Pablo Rios", "Ingresado", "jprios@gamil.com","+569 9139 3994","Edificio Step","San Bernardo",8.000,"Interesado En..."),
    createData("18 - Nov", "12.263.777.8", "Nieto & Stone", "Juan Pablo Rios", "Ingresado", "jprios@gamil.com","+569 9139 3994","Edificio Step","San Bernardo",8.000,"Interesado En..."),
    createData("18 - Nov", "12.263.777.8", "Nieto & Stone", "Juan Pablo Rios", "Ingresado", "jprios@gamil.com","+569 9139 3994","Edificio Step","San Bernardo",8.000,"Interesado En..."),
    createData("18 - Nov", "12.263.777.8", "Nieto & Stone", "Juan Pablo Rios", "Ingresado", "jprios@gamil.com","+569 9139 3994","Edificio Step","San Bernardo",8.000,"Interesado En..."),
    createData("18 - Nov", "12.263.777.8", "Nieto & Stone", "Juan Pablo Rios", "Ingresado", "jprios@gamil.com","+569 9139 3994","Edificio Step","San Bernardo",8.000,"Interesado En..."),
    createData("18 - Nov", "12.263.777.8", "Nieto & Stone", "Juan Pablo Rios", "Ingresado", "jprios@gamil.com","+569 9139 3994","Edificio Step","San Bernardo",8.000,"Interesado En..."),
    createData("18 - Nov", "12.263.777.8", "Nieto & Stone", "Juan Pablo Rios", "Ingresado", "jprios@gamil.com","+569 9139 3994","Edificio Step","San Bernardo",8.000,"Interesado En..."),
    createData("18 - Nov", "12.263.777.8", "Nieto & Stone", "Juan Pablo Rios", "Ingresado", "jprios@gamil.com","+569 9139 3994","Edificio Step","San Bernardo",8.000,"Interesado En..."),
    createData("18 - Nov", "12.263.777.8", "Nieto & Stone", "Juan Pablo Rios", "Ingresado", "jprios@gamil.com","+569 9139 3994","Edificio Step","San Bernardo",8.000,"Interesado En..."),
    createData("18 - Nov", "12.263.777.8", "Nieto & Stone", "Juan Pablo Rios", "Ingresado", "jprios@gamil.com","+569 9139 3994","Edificio Step","San Bernardo",8.000,"Interesado En..."),

    createData("18 - Nov", "12.263.777.8", "Nieto & Stone", "Juan Pablo Rios", "Ingresado", "jprios@gamil.com","+569 9139 3994","Edificio Step","San Bernardo",8.000,"Interesado En..."),
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event: SelectChangeEvent<number>) => {
    const newRowsPerPage = parseInt(event.target.value as string, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0);
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
    const [estadoValue, setEstadoValue] = useState(''); 
    const [proyectoValue, setProyectoValue] = useState(''); 
  
    const handleEstadoChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setEstadoValue(event.target.value);
    };
  
    const handleProyectoChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setProyectoValue(event.target.value);};

  return (
    <Layout>
      <Box
        component="main"
        sx={{
          maxWidth: "95%",
          margin: "0 auto",
          pb: "50px",
          // "@media (max-width: 768px)": {
          //   maxWidth: "100%",
          //   marginX:'40px' 
          // },
        }}
      >
   <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
  <Typography
    variant="h1"
    sx={{
      color: '#1F1F1F',
      fontFamily: 'Outfit',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
      mb: '12px',
    }}
  >
    Listado De Leads
  </Typography>

  <Box sx={{ width:"400px", display: 'flex', flexDirection: 'row' ,justifyContent:'flex-end', 
  "@media (max-width: 500px)": {
            flexDirection:"column",
            width:"150px"
           
          },}}>
  <TextField
           
           SelectProps={{ 
           style: {borderRadius:"12px",
           borderColor:"rgba(0, 0, 0, 0.23))",
           background: '#FFF',
          width:"100%"}
       }}
       size ="small"
           label="Estado"
           select
           fullWidth>
           <MenuItem value={10}>Ten</MenuItem>
           <MenuItem value={20}>Twenty</MenuItem>
           <MenuItem value={30}>Thirty</MenuItem>
           </TextField>

        &nbsp;&nbsp;&nbsp;
        <TextField
           
           SelectProps={{ 
           style: {borderRadius:"12px",
           borderColor:"rgba(0, 0, 0, 0.23))",
           background: '#FFF',}
       }}
       size ="small"
           label="Proyecto"
           select
           fullWidth>
           <MenuItem value={10}>Ten</MenuItem>
           <MenuItem value={20}>Twenty</MenuItem>
           <MenuItem value={30}>Thirty</MenuItem>
           </TextField>

      </Box>
</Box>

        <TableContainer
          component={Paper}
          sx={{ boxShadow: "0px 5px 26px 0px rgba(180, 212, 225, 0.10)" }}
        >
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell sx={ellipsisStyle}>Fecha Ingreso</StyledTableCell>
                <StyledTableCell align="left">
                Rut
                </StyledTableCell>
                <StyledTableCell align="left">
                Corredora/Ejecutivo
                </StyledTableCell>
                <StyledTableCell align="left">Nombre</StyledTableCell>
                <StyledTableCell align="left" sx={ellipsisStyle}>
                Estado Lead
                </StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Telefono</StyledTableCell>
                <StyledTableCell align="left">Proyecto</StyledTableCell>
                <StyledTableCell align="left">Comuna</StyledTableCell>
                <StyledTableCell align="left">Valor</StyledTableCell>
                <StyledTableCell align="left">Observaciones</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(startIndex, endIndex).map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell  align="left" sx={ellipsisStyle}>
                     
                      {row.date}
                   
                  </StyledTableCell>
                  <StyledTableCell align="left" sx={ellipsisStyle}>
                    {row.percent}
                  </StyledTableCell>
                  <StyledTableCell align="left" sx={ellipsisStyle}>{row.corredaro}</StyledTableCell>
                  <StyledTableCell align="left" sx={ellipsisStyle}>{row.nombre}</StyledTableCell>
                  <StyledTableCell align="left" sx={ellipsisStyle}><span style={{display:'flex',justifyContent:'center'}}>{row.lead}<KeyboardArrowDownOutlinedIcon sx={{width:"22px" , fill:'#707070'}}/></span></StyledTableCell>
                  <StyledTableCell align="left" sx={ellipsisStyle}>{row.email}</StyledTableCell>
                  <StyledTableCell align="left"  sx={ellipsisStyle}>{row.phone}</StyledTableCell>
                  <StyledTableCell align="left"  sx={ellipsisStyle}>{row.project}</StyledTableCell>
                  <StyledTableCell align="left"  sx={ellipsisStyle}>{row.comuna}</StyledTableCell>
                  <StyledTableCell align="left" sx={ellipsisStyle}>{row.valor}</StyledTableCell>
                  <StyledTableCell align="left"  sx={ellipsisStyle}><span style={{display:'flex',justifyContent:'center'}}>{row.Observaciones}<KeyboardArrowDownOutlinedIcon sx={{width:"22px", fill:'#707070'}}/></span></StyledTableCell>
                  <StyledTableCell align="left"  ><img src={edit}/></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          <Box
            sx={{
              padding: "30px",
              display: "flex",
              flexDirection: "row",
              justifyContent:'space-between',
              "@media (max-width: 490px)": {
                flexDirection: "column",
                justifyContent: "center",
                padding:'20px'
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                "@media (max-width: 490px)": {
                  justifyContent: "center",
                  marginLeft:"25px"
                 
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "166%",
                }}
              >
                Rows per page:
              </Typography>
              <Select
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "166%",
                  border: 0,
                  "& fieldset": {
                    border: "none",
                  },
                }}
                labelId="rowsPerPage-label"
                id="rowsPerPage"
                value={rowsPerPage}
                label="Rows per page"
                onChange={handleRowsPerPageChange}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={20}>20</MenuItem>
              </Select>
            </Box>


            <ThemeProvider theme={theme}>
              <Pagination
                sx={{ alignSelf: "center", margin:"0 auto"  }}
                count={Math.ceil(rows.length / rowsPerPage) - 1}
                color="primary"
                onChange={handlePageChange}
              />
            </ThemeProvider>
          </Box>
        </TableContainer>
<Box sx={{display:"flex" , padding: "30px" , justifyContent:"center"}}>
        <Button variant="contained"  sx={{display: "flex",
        padding:" 8px 22px",
        backgroundColor: "var(--primary-main, #2196F3)",
        borderRadius: "12px",
        boxShadow: "0px 3px 20px 0px rgba(0, 159, 227, 0.26)",
flexDirection: "column",
justifyContent: "center",
alignItems: "center",
flexShrink: 0,
color: "var(--primary-contrast, #FFF)",
fontFamily: "Roboto",
fontSize: "18px",
lineHeight: "26px",
mr:"10px"}}>Ir Al Administrador De Leads</Button></Box>
      </Box>
    </Layout>
  );


}
export default LeadsPage
