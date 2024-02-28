import { Grid, Typography, Box } from "@mui/material";

interface FunnelChart {
  title: string;
  colorCode: string;
  count: number;
}

const FunnelChart = () => {
  const funnelChartData: FunnelChart[] = [
    {
      title: "N Leads",
      colorCode: "#5FA7F1",
      count: 500,
    },
    {
      title: "Visitas Sala de Ventas",
      colorCode: "#4675CE",
      count: 212,
    },
    {
      title: "Contizaciones",
      colorCode: "#626262",
      count: 187,
    },
    {
      title: "Promesas",
      colorCode: "#C2C2C2",
      count: 8,
    },
    {
      title: "Escriturados",
      colorCode: "#3B3B3B",
      count: 11,
    },
  ];

  const sortedData = funnelChartData.sort((a, b) => b.count - a.count);

  return (
    <Grid container spacing={5} className="funnelChartMainFlex">
      <Grid item xs={5} className="funnelChartDiagram">
        <div className="pyramid">
          {sortedData.reverse().map((item: any, index: number) => (
            <div
              className="pyramid__section"
              key={index}
              style={{ backgroundColor: `${item.colorCode}` }}
            ></div>
          ))}
        </div>
        <Box component="div" className="pyramidAfterForFunnelExact"></Box>
      </Grid>
      <Grid item xs={7} className="funnelChartLabels">
        <Grid container spacing={2} className="funnelChartLabelMainFlex">
          {sortedData.reverse().map((item: any, index: number) => (
            <Grid item xs={6} key={index} className="funnelChartLabelSingle">
              <Grid
                container
                sx={{ justifyContent: "space-between", alignItems: "center" }}
              >
                <Grid item xs={10}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        height: "16px",
                        width: "16px",
                        display: "inline-block",
                        backgroundColor: `${item.colorCode}`,
                      }}
                    ></span>
                    <span>
                      <Typography
                        paragraph
                        sx={{
                          color: "#666666",
                          marginBottom: "0",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </span>
                  </Box>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#212121",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    {item.count}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FunnelChart;
