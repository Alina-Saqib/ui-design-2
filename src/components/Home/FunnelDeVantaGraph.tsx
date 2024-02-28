import { Box, Grid, Typography, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import UiCard from "../UiCard";
import Graph from "./Graph";

const FunnelDeVantaGraph = () => {
  const [option, setOption] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
  };
  return (
    <Box component="div" sx={{ marginTop: "40px" }}>
      <Grid container sx={{ alignItems: "center" }}>
        <Grid item xs={9.5}>
          <Typography variant="h2" sx={{ marginBottom: "20px" }}>
            Funnel De Venta
          </Typography>
        </Grid>
        <Grid item xs={2.5}>
          <Box
            component="div"
            sx={{ display: "flex", alignItems: "end", width: "100%" }}
          >
            <FormControl sx={{ minWidth: "100%" }}>
              <Select
                value={option}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                  border: "1px solid rgba(0,0,0,0.1)",
                  borderRadius: "12px",
                  background: "white",
                }}
              >
                <MenuItem value="">
                  <em>Label</em>
                </MenuItem>
                <MenuItem value={10}>Label 1</MenuItem>
                <MenuItem value={20}>Label 2</MenuItem>
                <MenuItem value={30}>Label 3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: "20px" }}>
        <UiCard padding="20px">
          <Grid container sx={{ alignItems: "center", marginBottom: "20px" }}>
            <Grid item xs={9.5}>
              <Typography variant="h6" sx={{ fontSize: "20px" }}>
                Monto Mensual Transado en UF
              </Typography>
            </Grid>
            <Grid item xs={2.5} sx={{ textAlign: "right" }}>
              <Button
                variant="contained"
                sx={{
                  background: "#009FE3",
                  borderRadius: "12px",
                  p: "10px 30px",
                }}
              >
                4.9MMf
              </Button>
            </Grid>
          </Grid>
          <Box component="div">
            <Graph />
          </Box>
        </UiCard>
      </Box>
    </Box>
  );
};

export default FunnelDeVantaGraph;
