import { Box, Typography } from "@mui/material";
import UiCard from "../UiCard";
import FunnelChart from "./FunnelChart";

const FunnelChartMain = () => {
  return (
    <Box className="funnelChartBoxMain">
      <Box className="funnelChartHeading" sx={{ marginBottom: "20px" }}>
        <Typography variant="h2">Funnel De Venta</Typography>
      </Box>
      <Box className="funnelChart">
        <UiCard padding="20px">
          <FunnelChart />
        </UiCard>
      </Box>
    </Box>
  );
};

export default FunnelChartMain;
