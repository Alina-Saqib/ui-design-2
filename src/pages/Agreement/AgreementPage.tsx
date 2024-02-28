import React, { useState } from "react";
import {
  Box,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Stack,
  TablePagination,
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
import profile from "../../assets/profile.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function AgreementPage() {

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
    name: string,
    percent: string,
    fat: number,
    carbs: number,
    value: number,
    money: number
  ) {
    return { name, percent, fat, carbs, value, money };
  }

  const rows = [
    createData("Frozen yoghurt", "159%", 6.0, 24, 2, 691701),
    createData("Ice cream sandwich", "159%", 9.0, 37, 3, 4.3),
    createData("Eclair", "159%", 16.0, 24, 3, 6983081),
    createData("Cupcake", "159%", 3.7, 67, 3, 4.3),
    createData("Gingerbread", "159%", 16.0, 49, 3, 7970100),
    createData("Gingerbread", "159%", 16.0, 49, 3, 7970100),
    createData("Gingerbread", "159%", 16.0, 49, 3, 7970100),
    createData("Gingerbread", "159%", 16.0, 49, 3, 7970100),
    createData("Gingerbread", "159%", 16.0, 49, 3, 7970100),
    createData("Gingerbread", "159%", 16.0, 49, 3, 7970100),
    createData("Gingerbread", "159%", 16.0, 49, 3, 7970100),
    createData("Gingerbread", "159%", 16.0, 49, 3, 7970100),
    createData("Gingerbread", "159%", 16.0, 49, 3, 7970100),
    createData("Gingerbread", "159%", 16.0, 49, 3, 7970100),
    createData("Frozen yoghurt", "159%", 6.0, 24, 2, 691701),
    createData("Ice cream sandwich", "159%", 9.0, 37, 3, 4.3),
    createData("Eclair", "159%", 16.0, 24, 3, 6983081),
    createData("Cupcake", "159%", 3.7, 67, 3, 4.3),
    createData("Frozen yoghurt", "159%", 6.0, 24, 2, 691701),
    createData("Ice cream sandwich", "159%", 9.0, 37, 3, 4.3),
    createData("Eclair", "159%", 16.0, 24, 3, 6983081),
    createData("Cupcake", "159%", 3.7, 67, 3, 4.3),
    createData("Frozen yoghurt", "159%", 6.0, 24, 2, 691701),
    createData("Ice cream sandwich", "159%", 9.0, 37, 3, 4.3),
    createData("Eclair", "159%", 16.0, 24, 3, 6983081),
    createData("Cupcake", "159%", 3.7, 67, 3, 4.3),
    createData("Frozen yoghurt", "159%", 6.0, 24, 2, 691701),
    createData("Ice cream sandwich", "159%", 9.0, 37, 3, 4.3),
    createData("Eclair", "159%", 16.0, 24, 3, 6983081),
    createData("Cupcake", "159%", 3.7, 67, 3, 4.3),
    createData("Cupcake", "159%", 3.7, 67, 3, 4.3),
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
          // "@media (max-width: 768px)": {
          //   maxWidth: "100%",
          //   marginX:'40px' 
          // },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#1F1F1F",
            fontFamily: "Outfit",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
            mb: "12px",
          }}
        >
          Listado De Acuerdos Comerciales Por Corrdor
        </Typography>

        <TableContainer
          component={Paper}
          sx={{ boxShadow: "0px 5px 26px 0px rgba(180, 212, 225, 0.10)" , width:"auto"}}
        >
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell sx={ellipsisStyle}>Nombre De Corredora</StyledTableCell>
                <StyledTableCell align="left" sx={ellipsisStyle}>
                  Comision Promedio
                </StyledTableCell>
                <StyledTableCell align="left" sx={ellipsisStyle}>
                <span style={{zIndex: 1}}>N</span>
               <span style={{  
                top: '-10px', 
                left: '6px',  
                 zIndex: 2,}}>°</span> De&nbsp;Proyectos
                </StyledTableCell>
                <StyledTableCell align="left" sx={ellipsisStyle}>Ventas Totales</StyledTableCell>
                <StyledTableCell align="left" sx={ellipsisStyle}>
                <span style={{zIndex: 1}}>N</span>
               <span style={{  
                top: '-10px', 
                left: '6px',  
                 zIndex: 2,}}>°</span> De Ejecutivos
                </StyledTableCell>
                <StyledTableCell align="left" sx={ellipsisStyle} >Monto Vendido</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(startIndex, endIndex).map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell sx={{align: "left", paddingX:'0px',overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'}}> 
                    <Box sx={{ display: "flex" ,alignItems:'center'}}>
                      <Avatar alt={row.name} src={profile} sx={{width: "66px", alignSelf:"center"}}/>
                      <span style={{ marginLeft: "8px" }}>{row.name}</span>
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {row.percent}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.fat.toLocaleString()}</StyledTableCell>
                  <StyledTableCell align="left">{row.carbs.toLocaleString()}</StyledTableCell>
                  <StyledTableCell align="left">{row.value.toLocaleString()}</StyledTableCell>
                  <StyledTableCell align="left">${row.money.toLocaleString()}</StyledTableCell>
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
      </Box>
    </Layout>
  );
}

export default AgreementPage;
