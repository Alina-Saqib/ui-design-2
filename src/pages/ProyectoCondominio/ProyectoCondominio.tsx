import Layout from "../../components/Layout";
import { Box } from "@mui/material";
import BannerComponent from "../../components/ProyectoCondominio/BannerComponent";
import VincularConCorredoras from "../../components/ProyectoCondominio/VincularConCorredoras";

const ProyectoCondominio = () => {
  return (
    <Layout>
      <Box sx={{ maxWidth: "95%", margin: "0 auto" }}>
        <BannerComponent />
        <VincularConCorredoras />
      </Box>
    </Layout>
  );
};

export default ProyectoCondominio;
