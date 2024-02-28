import { Box, Button, Divider, FormControl, InputLabel, MenuItem, Pagination, Select, SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, TextareaAutosize, Typography, tableCellClasses, useMediaQuery } from "@mui/material"
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import Layout from "../../components/Layout"
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
  transition: "none"
}));

const HeadingTypography = {
    color: '#707070',
    fontFamily: 'Outfit',
    fontSize: '13px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '200%',
    '@media (min-width: 1700px)': {
      fontSize:'16px', 
    },
  };
  
  const LeadTypography = {
    color: '#1F1F1F',
    fontFamily: 'Outfit',
    fontSize: '17px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
    marginBottom:'30px',
    '@media (min-width: 1700px)': {
      fontSize:'20px', 
    },
  };

const leadsData = [
    {
      name: 'Juan Pablo Rios',
      email: 'jprios@gmail.com',
      telefono: '+569 9139 3994',
      fechaIngreso: '18 - Nov',
      proyecto: 'Edificio Step',
      ultimoComentario: 'Ingresado En Dpto De 3 Dormitotios',
      rut: '12.236.777-8',
      comuna: 'San Bernardo',
      corredoraEjecutivo: 'Nieto & Stone',
      valor: '8.000',
    },
    // Add more lead objects here...
  ];


function AministrarLeadsPage() {

  const isScreenLessThan900px = useMediaQuery('(max-width:1200px)');
  const xsValue = isScreenLessThan900px ? 6 : 2;
  const xsValueForm = isScreenLessThan900px ? 12 : 3.5;

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
            contrastText: "white",
            // light: will be calculated from palette.primary.main,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
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
        fecha: string,
        Realizado: string,
        EstadaOriginal: string,
        EstadoFinal: string,
        Comerntario: string
      ) {
        return { fecha, Realizado, EstadaOriginal, EstadoFinal, Comerntario };
      }
    
      const rows = [
        createData("18-Nov", "Juan Pablio Rios", "ingresado","Cotizado", "Interesado En Dpto De 3 Dormitorios"),
        createData("18-Nov", "Juan Pablio Rios", "ingresado","Cotizado", "Interesado En Dpto De 3 Dormitorios"),
        createData("18-Nov", "Juan Pablio Rios", "ingresado","Cotizado", "Interesado En Dpto De 3 Dormitorios"),
        createData("18-Nov", "Juan Pablio Rios", "ingresado","Cotizado", "Interesado En Dpto De 3 Dormitorios"),
        createData("18-Nov", "Juan Pablio Rios", "ingresado","Cotizado", "Interesado En Dpto De 3 Dormitorios"),
        createData("18-Nov", "Juan Pablio Rios", "ingresado","Cotizado", "Interesado En Dpto De 3 Dormitorios"),
        createData("18-Nov", "Juan Pablio Rios", "ingresado","Cotizado", "Interesado En Dpto De 3 Dormitorios"),
        
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
      
  return (
    <Layout>
       <Box
        component="main"
        sx={{
          maxWidth: "95%",
          margin: "0 auto",
          pb: "50px",
        }}
      >
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
    Aministrar Leads
  </Typography>


  <Grid container>
  {leadsData.map((lead, index) => (
  <Grid item xs={12} key={index}>
        <Item><Grid container>
        <Grid item xs={xsValue}>
          <Item>
            <Typography style={HeadingTypography} sx={ellipsisStyle}>Nombre (Del Lead) </Typography>
            <Typography style={LeadTypography} sx={ellipsisStyle}>{lead.name}</Typography>

            <Typography style={HeadingTypography} sx={ellipsisStyle}>Email</Typography>
            <Typography style={LeadTypography} sx={ellipsisStyle}>{lead.email}</Typography>


            <Typography style={HeadingTypography} sx={ellipsisStyle}>Telefono</Typography>
            <Typography style={LeadTypography} sx={ellipsisStyle}>{lead.telefono}</Typography>
          </Item>
        </Grid>
        <Grid item xs={xsValue}>
          <Item>
            <Typography style={HeadingTypography} sx={ellipsisStyle}>Fecha ingreso</Typography>
            <Typography style={LeadTypography} sx={ellipsisStyle}>{lead.fechaIngreso} </Typography>

            <Typography style={HeadingTypography} sx={ellipsisStyle}>Proyecto</Typography>
            <Typography style={LeadTypography} sx={ellipsisStyle}>{lead.proyecto}</Typography>


            <Typography style={HeadingTypography} sx={ellipsisStyle}>Ultimo comentario</Typography>
            <Typography style={LeadTypography} >{lead.ultimoComentario}</Typography></Item>
        </Grid>
        <Grid item xs={xsValue}>
          <Item>
            <Typography style={HeadingTypography} sx={ellipsisStyle}>Rut</Typography>
            <Typography style={LeadTypography} sx={ellipsisStyle}>{lead.rut}</Typography>

            <Typography style={HeadingTypography} sx={ellipsisStyle}>Comuna</Typography>
            <Typography style={LeadTypography} sx={ellipsisStyle}>{lead.comuna}</Typography>

          
          </Item>
        </Grid>
        <Grid item xs={xsValue}>
          <Item> 
            <Typography style={HeadingTypography} sx={ellipsisStyle}>Corredora/Ejecutivo</Typography>
            <Typography style={LeadTypography} sx={ellipsisStyle}>{lead.corredoraEjecutivo}</Typography>

            <Typography style={HeadingTypography} sx={ellipsisStyle}>Valor</Typography>
            <Typography style={LeadTypography} sx={ellipsisStyle}>{lead.valor}</Typography></Item>
        </Grid>
        <Box sx={{ width: '1px', backgroundColor: 'rgba(0, 0, 0, 0.12)', margin: '0 10px 0 10px' }}>       
  <Divider orientation="vertical" sx={{ borderColor:"rgba(0, 0, 0, 0.12)"}}/>
</Box>

        <Grid item xs={xsValueForm}>
        
          <Item>

            <Box sx={{display:'flex', flexDirection: "column", justifyContent: "flex-start"}}>
            
            <TextField
           
            SelectProps={{ 
            style: {borderRadius:"12px",
            borderColor:"rgba(0, 0, 0, 0.23))"}
        }}
        size ="small"
            label="Estado Lead"
            select
            fullWidth>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            </TextField>
           
            <TextareaAutosize style={{display: "flex",
                height:"116px",
                padding: "12px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--none, 0px)",
                flexShrink: 0,
                marginTop:"30px",
                borderRadius: "12px",
                border: "1px solid var(--components-input-outlined-enabled-border, rgba(0, 0, 0, 0.23))",
                background: "#FFF",
                color: "var(--text-secondary, rgba(0, 0, 0, 0.60))",
                fontSize: "16px",
                lineHeight: "24px"}}
                placeholder="Comentario"/>
            <Box  sx={{
                display:"flex",
                flexDirection: "row",
                justifyContent:"flex-start",
                marginTop:"30px"

            }}>
            <Button variant="outlined"  sx={{display: "flex",
padding:" 8px 22px",
flexDirection: "column",

justifyContent: "center",
alignItems: "center",
flexShrink: 0,
color: "var(--primary-main, #2196F3)",
fontFamily: "Roboto",
fontSize: "18px",
borderRadius: "12px",
border:"1px solid var(--primary-outlined-border, rgba(33, 150, 243, 0.50))",
lineHeight: "26px",
mr:"10px"}}>Cerrar</Button>
<Button variant="contained"  sx={{display: "flex",
padding:" 8px 22px",
flexDirection: "column",
borderRadius:"12px",
background: "var(--primary-main, #2196F3)",
boxShadow: "0px 3px 20px 0px rgba(0, 159, 227, 0.26)",
justifyContent: "center",
alignItems: "center",
flexShrink: 0,
color: "var(--primary-contrast, #FFF)",
fontFamily: "Roboto",
fontSize: "18px",
lineHeight: "26px"}}>Guardar</Button>
            </Box>
            </Box>

      </Item>
        </Grid>
      </Grid></Item>
        </Grid>))}
  
    
  </Grid>



        <TableContainer
          component={Paper}
          sx={{ boxShadow: "0px 5px 26px 0px rgba(180, 212, 225, 0.10)" , mt:"30px"}}
        >
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell sx={ellipsisStyle}>Fecha Del Cambio</StyledTableCell>
                <StyledTableCell align="left" sx={ellipsisStyle}>
                Realizado Por (Entidad y persona)
                </StyledTableCell>
                <StyledTableCell align="left" sx={ellipsisStyle}>
                Estado Original
                </StyledTableCell>
                <StyledTableCell align="left" sx={ellipsisStyle}>Estado Final</StyledTableCell>
                <StyledTableCell align="left" sx={ellipsisStyle}>
                Comerntario ( solo si Aplica)
                </StyledTableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(startIndex, endIndex).map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell sx={{align: "left"}}> 
                    {row.fecha}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {row.Realizado}
                  </StyledTableCell>
                  <StyledTableCell align="left" sx={ellipsisStyle}>{row.EstadaOriginal}</StyledTableCell>
                  <StyledTableCell align="left" sx={ellipsisStyle}>{row.EstadoFinal}</StyledTableCell>
                  <StyledTableCell align="left" sx={ellipsisStyle}>{row.Comerntario}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          {/* <Box
            sx={{
              padding: "30px",
              display: "flex",
              flexDirection: "row",
              justifyContent:'space-between'
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
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
            </ThemeProvider> */}
          {/* </Box> */}

          <Box
           sx={{
            display:"flex",
            flexDirection:"row",
            justifyContent:'center',
            padding:"30px"
           }}>
          
          <Button variant="outlined" sx={{
            display: "flex",
            width: "135px",
            padding: "8px 22px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius:" 12px",
            border: "1px solid var(--action-disabled-background, rgba(0, 0, 0, 0.12))",
            color: "var(--action-disabled, rgba(0, 0, 0, 0.38))",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "26px"
          }}>Cancelar</Button>

         </Box>
        </TableContainer>
        
      </Box>
    </Layout>
  )
}

export default AministrarLeadsPage
