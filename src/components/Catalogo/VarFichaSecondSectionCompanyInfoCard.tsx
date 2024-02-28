import { Grid, Box, Typography } from "@mui/material";

const VarFichaSecondSectionCompanyInfoCard = (props: any) => {
  return (
    <Grid
      container
      className="informactionPropiaContainer"
      sx={{ justifyContent: "space-between" }}
    >
      {props.filterData.map((item: any, index: number) => (
        <>
          {item.comunaDonde.map((item: any, index: number) => (
            <Grid item xs={2.9} key={index}>
              <Grid
                container
                sx={{
                  alignItems: "center",
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                }}
              >
                <Grid item xs={7.5}>
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
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "20px",
                      fontWeight: "600",
                      marginBottom: "10px",
                    }}
                  >
                    {item.count}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    component="img"
                    className="informactionPropiaImg"
                    src={`${item.imgUrl}`}
                    alt={`${item.title}`}
                    sx={{ maxWidth: "50px" }}
                  ></Box>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </>
      ))}
    </Grid>
  );
};

export default VarFichaSecondSectionCompanyInfoCard;
