import { Box, Typography, Grid } from "@mui/material";
import UiCard from "../UiCard";

const InformactionPropia = () => {
  const data: { id: string; count: string; title: string; imgUrl: string }[] = [
    {
      id: "1",
      count: "04",
      title: "Proyectos Activos",
      imgUrl: "/assets/info1.png",
    },
    {
      id: "2",
      count: "36",
      title: "Corredores Asignados",
      imgUrl: "/assets/info2.png",
    },
    {
      id: "3",
      count: "187",
      title: "Ehecutivos Asignados",
      imgUrl: "/assets/info3.png",
    },
    {
      id: "4",
      count: "1,93%",
      title: "Comision Acordada",
      imgUrl: "/assets/info4.png",
    },
    {
      id: "5",
      count: "87.450",
      title: "Monto Vendido",
      imgUrl: "/assets/info5.png",
    },
  ];
  return (
    <Box component="div" className="informactionPropiaMain">
      <Typography variant="h2" sx={{ marginBottom: "20px" }}>
        Informaction Propia
      </Typography>
      <Grid container spacing={2} className="informactionPropiaContainer">
        {data.map((item: any, index: number) => (
          <Grid item xs={2.4} key={index}>
            <UiCard padding={"40px 30px"}>
              <Grid container sx={{ alignItems: "center" }}>
                <Grid item xs={9}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "34px",
                      fontWeight: "600",
                      marginBottom: "10px",
                    }}
                  >
                    {item.count}
                  </Typography>
                  <Typography
                    className="informactionPropiaText"
                    variant="h6"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#666666",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    component="img"
                    className="informactionPropiaImg"
                    src={`${item.imgUrl}`}
                    alt={`${item.title}`}
                  ></Box>
                </Grid>
              </Grid>
            </UiCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InformactionPropia;
