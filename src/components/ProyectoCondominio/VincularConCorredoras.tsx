import { Box, Divider, Grid, Typography } from "@mui/material";
import * as React from "react";
import Switch from "@mui/material/Switch";
import VincularListing from "./VincularListing";
import Pagination from "@mui/material/Pagination";
import usePagination from "./UsePagination";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const listingData: {
  id: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  attach: string;
  imgUrl: string;
}[] = [
  {
    id: "1",
    title: "One Propiedades",
    description:
      "Sen Jose Maria Escriva De Balaguer N 13105 of, 707, La Dehesa, Persidente Riesco 3198, Local D, Las Condes",
    email: "info@oneprop.cl",
    phone: "+56 2 22165 800",
    attach: "https://oneprop.cl/",
    imgUrl: "assets/company1.png",
  },
  {
    id: "2",
    title: "Lavalsil",
    description:
      "Sen Jose Maria Escriva De Balaguer N 13105 of, 707, La Dehesa, Persidente Riesco 3198, Local D, Las Condes",
    email: "info@oneprop.cl",
    phone: "+56 2 22165 800",
    attach: "https://oneprop.cl/",
    imgUrl: "assets/company2.png",
  },
  {
    id: "3",
    title: "Nieny",
    description:
      "Sen Jose Maria Escriva De Balaguer N 13105 of, 707, La Dehesa, Persidente Riesco 3198, Local D, Las Condes",
    email: "info@oneprop.cl",
    phone: "+56 2 22165 800",
    attach: "https://oneprop.cl/",
    imgUrl: "assets/company1.png",
  },
  {
    id: "4",
    title: "We Link",
    description:
      "Sen Jose Maria Escriva De Balaguer N 13105 of, 707, La Dehesa, Persidente Riesco 3198, Local D, Las Condes",
    email: "info@oneprop.cl",
    phone: "+56 2 22165 800",
    attach: "https://oneprop.cl/",
    imgUrl: "assets/company3.png",
  },
  {
    id: "5",
    title: "One Propiedades",
    description:
      "Sen Jose Maria Escriva De Balaguer N 13105 of, 707, La Dehesa, Persidente Riesco 3198, Local D, Las Condes",
    email: "info@oneprop.cl",
    phone: "+56 2 22165 800",
    attach: "https://oneprop.cl/",
    imgUrl: "assets/company3.png",
  },
  {
    id: "6",
    title: "Lavalsil",
    description:
      "Sen Jose Maria Escriva De Balaguer N 13105 of, 707, La Dehesa, Persidente Riesco 3198, Local D, Las Condes",
    email: "info@oneprop.cl",
    phone: "+56 2 22165 800",
    attach: "https://oneprop.cl/",
    imgUrl: "assets/company2.png",
  },
  {
    id: "7",
    title: "Nieny",
    description:
      "Sen Jose Maria Escriva De Balaguer N 13105 of, 707, La Dehesa, Persidente Riesco 3198, Local D, Las Condes",
    email: "info@oneprop.cl",
    phone: "+56 2 22165 800",
    attach: "https://oneprop.cl/",
    imgUrl: "assets/company1.png",
  },
  {
    id: "8",
    title: "We Link",
    description:
      "Sen Jose Maria Escriva De Balaguer N 13105 of, 707, La Dehesa, Persidente Riesco 3198, Local D, Las Condes",
    email: "info@oneprop.cl",
    phone: "+56 2 22165 800",
    attach: "https://oneprop.cl/",
    imgUrl: "assets/company3.png",
  },
  {
    id: "9",
    title: "One Propiedades",
    description:
      "Sen Jose Maria Escriva De Balaguer N 13105 of, 707, La Dehesa, Persidente Riesco 3198, Local D, Las Condes",
    email: "info@oneprop.cl",
    phone: "+56 2 22165 800",
    attach: "https://oneprop.cl/",
    imgUrl: "assets/company1.png",
  },
  {
    id: "10",
    title: "Lavalsil",
    description:
      "Sen Jose Maria Escriva De Balaguer N 13105 of, 707, La Dehesa, Persidente Riesco 3198, Local D, Las Condes",
    email: "info@oneprop.cl",
    phone: "+56 2 22165 800",
    attach: "https://oneprop.cl/",
    imgUrl: "assets/company2.png",
  },
  {
    id: "11",
    title: "Nieny",
    description:
      "Sen Jose Maria Escriva De Balaguer N 13105 of, 707, La Dehesa, Persidente Riesco 3198, Local D, Las Condes",
    email: "info@oneprop.cl",
    phone: "+56 2 22165 800",
    attach: "https://oneprop.cl/",
    imgUrl: "assets/company1.png",
  },
  {
    id: "12",
    title: "We Link",
    description:
      "Sen Jose Maria Escriva De Balaguer N 13105 of, 707, La Dehesa, Persidente Riesco 3198, Local D, Las Condes",
    email: "info@oneprop.cl",
    phone: "+56 2 22165 800",
    attach: "https://oneprop.cl/",
    imgUrl: "assets/company3.png",
  },
];

const firstIndex = 0;

const VincularConCorredoras = () => {
  const [checked, setChecked] = React.useState(true);
  const [searchInput, handleSearchInput] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState("10");

  const handleChangeChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const count = Math.ceil(listingData.length / parseInt(rowsPerPage));
  const _DATA = usePagination(listingData, rowsPerPage);

  const handleChange = (e: any, p: any) => {
    setPage(p);
    _DATA.jump(p);
  };

  const handleRowsChange = (event: SelectChangeEvent) => {
    setRowsPerPage(event.target.value);
  };
  const handleSearch = () => {};
  return (
    <Box>
      <Grid
        container
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Grid item>
          <Typography variant="h2">Vincular Con Corredoras</Typography>
        </Grid>
        <Grid item>
          <span>Todos</span>
          <span>
            <Switch
              checked={checked}
              onChange={handleChangeChecked}
              inputProps={{ "aria-label": "controlled" }}
            />
          </span>
        </Grid>
      </Grid>
      <Divider></Divider>
      <Grid
        container
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px 0px",
        }}
      >
        <Grid item>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>
              <Typography paragraph sx={{ color: "#545454", fonrSize: "20px" }}>
                Listados Corredores EN Nunoa
              </Typography>
            </span>
            <span>
              <Typography
                paragraph
                sx={{ fontWeight: "700", color: "#009FE3", fontSize: "24px" }}
              >
                17
              </Typography>
            </span>
          </Box>
        </Grid>
        <Grid item>
          <input
            placeholder="Agregar Corredores En Otras Comunas"
            value={searchInput}
            onChange={handleSearch}
            style={{
              padding: "15px 20px",
              borderRadius: "12px",
              width: "290px",
              background: "#f7f9fb",
              fontWeight: "500",
              border: "1px solid rgba(0,0,0,0.12)",
            }}
          />
        </Grid>
      </Grid>
      <Divider></Divider>
      <Grid container sx={{ marginTop: "25px" }} spacing={2}>
        {_DATA.currentData().map((item: any, index: number) => (
          <Grid item xs={6} key={index}>
            <VincularListing data={item} />
          </Grid>
        ))}
      </Grid>
      <Grid container sx={{ gap: "20%", alignItems: "center" }}>
        <Grid item>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography>Rows per Page: </Typography>
              <Select
                value={rowsPerPage}
                onChange={handleRowsChange}
                inputProps={{ "aria-label": "Without label" }}
                sx={{ border: "none", width: "70px", outline: "none" }}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={40}>40</MenuItem>
              </Select>
            </Box>
          </FormControl>
        </Grid>
        <Grid item>
          <Pagination
            count={count}
            size="large"
            page={page}
            color="primary"
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default VincularConCorredoras;
