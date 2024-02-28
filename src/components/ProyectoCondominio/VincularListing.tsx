import React from "react";
import UiCard from "../UiCard";
import { Grid, Box, Typography } from "@mui/material";
import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";

const VincularListing = (props: any) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <UiCard padding="20px">
      <Grid container spacing={{ lg: 2, xl: 5 }}>
        <Grid item xl={3} md={3.5}>
          <Box
            sx={{
              border: "1px solid #D9DBDC",
              borderRadius: "12px",
              p: "30px",
              textAlign: "center",
            }}
          >
            <Box
              component="img"
              src={`${props.data.imgUrl}`}
              sx={{ width: { xl: "118px", lg: "88px" } }}
            />
          </Box>
        </Grid>
        <Grid item xl={9} md={8.5}>
          <Grid
            container
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Grid item>
              <Typography
                variant="h6"
                sx={{ fontSize: { xl: "24px", lg: "20px" }, fontWeight: "600" }}
              >
                {props.data.title}
              </Typography>
            </Grid>
            <Grid item>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Grid>
          </Grid>
          <Box sx={{ marginBottom: { xl: "30px", lg: "15px" } }}>
            <Typography
              paragraph
              sx={{ color: "#545454", fontSize: { lg: "13px", xl: "18px" } }}
            >
              {props.data.description}
            </Typography>
          </Box>
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Grid item>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span>
                  <MailOutlineOutlinedIcon
                    sx={{
                      color: "#009FE3",
                      display: "block",
                      fontSize: "14px",
                    }}
                  />
                </span>
                <span>
                  <Link
                    to=""
                    style={{
                      textDecoration: "none",
                      color: "#363636",
                      fontSize: "14px",
                    }}
                  >
                    {props.data.email}
                  </Link>
                </span>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span>
                  <LocalPhoneOutlinedIcon
                    sx={{
                      color: "#009FE3",
                      display: "block",
                      fontSize: "14px",
                    }}
                  />
                </span>
                <span>
                  <Link
                    to=""
                    style={{
                      textDecoration: "none",
                      color: "#363636",
                      fontSize: "14px",
                    }}
                  >
                    {props.data.phone}
                  </Link>
                </span>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span>
                  <InsertLinkOutlinedIcon
                    sx={{
                      color: "#009FE3",
                      display: "block",
                      fontSize: "14px",
                    }}
                  />
                </span>
                <span>
                  <Link
                    to=""
                    style={{
                      textDecoration: "none",
                      color: "#363636",
                      fontSize: "14px",
                    }}
                  >
                    {props.data.attach}
                  </Link>
                </span>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </UiCard>
  );
};

export default VincularListing;
