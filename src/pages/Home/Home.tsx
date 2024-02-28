import FunnelChart from "../../components/Home/FunnelChart";
import FunnelDeVantaGraph from "../../components/Home/FunnelDeVantaGraph";
import InformacionDeInmput from "../../components/Home/InformacionDeInmput";
import InformactionPropia from "../../components/Home/InformactionPropia";
import Layout from "../../components/Layout";
import { Box, Grid } from "@mui/material";
import UiCard from "../../components/UiCard";
import FunnelChartMain from "../../components/Home/FunnelChartMain";

const Home = () => {
  return (
    <>
      <Layout>
        <Box sx={{ maxWidth: "95%", margin: "0 auto" }}>
          <InformactionPropia />
          <FunnelDeVantaGraph />
          <Grid container spacing={2} sx={{ margin: "30px 0px" }}>
            <Grid item xs={5}>
              <InformacionDeInmput />
            </Grid>
            <Grid item xs={7}>
              <FunnelChartMain />
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </>
  );
};

export default Home;
