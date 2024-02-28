import { Grid, Box, Typography, Button } from "@mui/material";
import UiCard from "../UiCard";
import SlickSlider from "./SlickSlider";
const BannerComponent = () => {
  return (
    <UiCard padding="20px">
      <Grid container spacing={7} sx={{ alignItems: "center" }}>
        <Grid item xs={7}>
          <SlickSlider />
        </Grid>
        <Grid item xs={5}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgba(0,159,227,0.1)",
              marginBottom: "20px",
              boxShadow: 0,
            }}
          >
            <Typography sx={{ color: "#009FE3", fontWeight: "500" }}>
              Volver Ai Listado De Proyectos
            </Typography>
          </Button>
          <Box sx={{ marginBottom: "20px" }}>
            <Typography paragraph>
              Departmento Venta Nuevo en La Clsterna
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "20px" }}>
            <Typography
              variant="h3"
              sx={{ fontSize: "34px", fontWeight: "600" }}
            >
              Condominio Jorge Caceres Etapa2
            </Typography>
          </Box>
          <Grid
            container
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Grid item>
              <Typography
                paragraph
                sx={{ color: "#545454", marginBottom: "5px" }}
              >
                Desde
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontSize: "34px", color: "#009FE3", fontWeight: "600" }}
              >
                UF 2.242
              </Typography>
              <Typography paragraph sx={{ color: "#363636" }}>
                $80.931.649
              </Typography>
            </Grid>
            <Grid item>
              <Box component="img" src="/assets/jorgeLogo.png" />
            </Grid>
          </Grid>
          <Box>
            <Button
              variant="contained"
              sx={{ background: "#009FE3", marginBottom: "15px" }}
            >
              Vincular Con Corredoras
            </Button>
            <Button
              variant="outlined"
              sx={{ border: "1px solid #009FE3", color: "#009FE3" }}
            >
              Ver Condiciones Comerciales
            </Button>
          </Box>
        </Grid>
      </Grid>
    </UiCard>
  );
};

export default BannerComponent;
