import BrokerCatalog from "../../components/Catalogo/BrokerCatalog";
import { Grid, Typography, Box } from "@mui/material";
import Layout from "../../components/Layout";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import VarFichaSection from "../../components/Catalogo/VarFichaSection";

const Catalogo = () => {
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

  const [option, setOption] = useState("");
  const [id, setId] = useState("1");

  const handleCallback = (childData: any) => {
    if (id) {
      setId(childData);
    } else {
      setId("1");
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
  };
  return (
    <>
      <Layout>
        <Box sx={{ maxWidth: "95%", m: "0 auto" }}>
          <Grid
            container
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Grid item>
              <Typography variant="h2" sx={{ marginBottom: "0px" }}>
                Catálogo de Corredores
              </Typography>
            </Grid>
            <Grid item xs={2.6}>
              <Box
                component="div"
                sx={{ display: "flex", alignItems: "end", width: "100%" }}
              >
                <FormControl sx={{ minWidth: "100%" }}>
                  <Select
                    value={option}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{
                      border: "1px solid rgba(0,0,0,0.1)",
                      borderRadius: "12px",
                      background: "white",
                      height: "46px",
                      color: "rgba(0,0,0,0.6)",
                    }}
                  >
                    <MenuItem value="">
                      <em>Comuna</em>
                    </MenuItem>
                    <MenuItem value={10}>Comuna 1</MenuItem>
                    <MenuItem value={20}>Comuna 2</MenuItem>
                    <MenuItem value={30}>Comuna 3</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              background: "white",
              borderRadius: "12px",
              marginTop: "20px",
            }}
          >
            <Grid container sx={{}}>
              <Grid
                item
                xs={6}
                className="brokerCatalogMain"
                sx={{ maxHeight: "77vh", overflowX: "hidden" }}
              >
                {listingData.map((item: any, index: number) => (
                  <BrokerCatalog
                    data={item}
                    key={index}
                    parentCallback={handleCallback}
                  />
                ))}
              </Grid>
              <Grid
                item
                xs={6}
                className="brokerCatalogMain"
                sx={{ maxHeight: "77vh", overflowX: "hidden" }}
              >
                <VarFichaSection id={id} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Catalogo;
