import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name: string, amount: string) {
  return { name, amount };
}

const rows = [
  createData("N°  inmobiliarias", "31"),
  createData("N°  Proyectos", "418"),
  createData("N°  Corredores", "112"),
  createData("N°  Ejecutivos", "1.852"),
];

const InformacionDeInmput = () => {
  return (
    <Box className="informacionDeInmputHomeMain">
      <Box
        className="informacionDeInmputHomeHeading"
        sx={{ marginBottom: "20px" }}
      >
        <Typography variant="h2">Informacion De Inmput</Typography>
      </Box>
      <Box className="informacionDeInmputHomeTable">
        <TableContainer
          component={Paper}
          sx={{ boxShadow: "0", borderRadius: "12px" }}
        >
          <Table sx={{}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#666666", fontWeight: "400" }}>
                  Total Transado (UF)
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ color: "212121", fontWeight: "600" }}
                >
                  4.9MM
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ color: "#666666" }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ color: "212121", fontWeight: "600" }}
                  >
                    {row.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default InformacionDeInmput;
