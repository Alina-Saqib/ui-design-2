import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Grid } from "@mui/material";

const VarFichaSecondSectionTable = (props: any) => {
  // console.log(props.data);
  return (
    <TableContainer component={Paper} sx={{ boxShadow: "0" }}>
      <Table aria-label="simple table">
        <TableHead></TableHead>
        <TableBody>
          {props.filterData.map((row: any, index: number) => (
            <>
              {row.comunaDondeTable.map((row: any, index: number) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{
                      fontSize: { lg: "12px", xl: "14px" },
                      padding: { xl: "10px", lg: "5px" },
                    }}
                  >
                    <Grid container sx={{ alignItems: "center", gap: "5px" }}>
                      <Grid item>
                        <Box
                          component="img"
                          src={`${row.imgUrl}`}
                          sx={{ width: { lg: "30px", xl: "40px" } }}
                        ></Box>
                      </Grid>
                      <Grid item>{row.title}</Grid>
                    </Grid>
                  </TableCell>
                  <TableCell sx={{ fontSize: { lg: "12px", xl: "14px" } }}>
                    {row.email}
                  </TableCell>
                  <TableCell sx={{ fontSize: { lg: "12px", xl: "14px" } }}>
                    {row.phone}
                  </TableCell>
                </TableRow>
              ))}
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VarFichaSecondSectionTable;
