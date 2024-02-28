import { Grid, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import { useEffect, useState } from "react";
import { listData } from "../../utility/data.json";

const VarFichaCompanyCard = (props: any) => {
  const [filteredList, setFilteredList] = useState(listData);

  const filterById = (id: string) => {
    setFilteredList(
      listData.filter((item: any) => {
        return item.id == id;
      })
    );
  };

  useEffect(() => {
    filterById(props.id);
  }, [props.id]);

  return (
    <>
      {filteredList.map((item: any, index: number) => (
        <Grid container spacing={{ lg: 2, xl: 5 }} sx={{}} key={index}>
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
                src={`${item.imgUrl}`}
                sx={{ width: { xl: "80px", lg: "70px" } }}
              />
            </Box>
          </Grid>
          <Grid item xl={9} md={8.5}>
            <Grid
              container
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Grid item>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xl: "24px", lg: "20px" },
                    fontWeight: "600",
                  }}
                >
                  {item.title}
                </Typography>
              </Grid>
              <Grid item></Grid>

              <Box sx={{ marginBottom: {} }}>
                <Typography
                  paragraph
                  sx={{
                    color: "#545454",
                    fontSize: { lg: "13px", xl: "18px" },
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
              <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid item>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
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
                        {item.email}
                      </Link>
                    </span>
                  </Box>
                </Grid>
                <Grid item>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
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
                        {item.phone}
                      </Link>
                    </span>
                  </Box>
                </Grid>
                <Grid item>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
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
                        {item.attach}
                      </Link>
                    </span>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default VarFichaCompanyCard;
