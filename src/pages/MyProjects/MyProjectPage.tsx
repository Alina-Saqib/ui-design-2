import Layout from "../../components/Layout";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import firstProject from "../../assets/FirstProject.png";
import secondProject from "../../assets/SecondProject.png";
import thirdProject from "../../assets/ThirdProject.png";
import firstProjectLogo from "../../assets/FirstProjectLogo.png";
import secondProjectLogo from "../../assets/SecondProjectLogo.png";
import thirdProjectLogo from "../../assets/ThirdProjectLogo.png";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "left",
  color: theme.palette.text.secondary,
  borderRadius: "0px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  "@media (max-width: 900px)": {
    display: "flex",
    flexDirection: "column",
    alignItems:"center",
    padding:"20px"
   

 },
}));

const TitleTypography = {
  fontSize: "12px",
  color: "#545454",
  lineHeight: "200%",
  "@media (min-width: 1700px)": {
    fontSize: "14px",
  },
};




const projectData = [
  {
    image: firstProject,
    title: "Departmento Venta Nuevo en La Clsterna",
    subtitle: "Condominio Jorge Caceres Etapa2",
    desde: "Desde",
    uf: "UF 2.242",
    price: "$80.931.649",
    logo: firstProjectLogo,
    supervisor: "Rodrigo Araos",
    ejecutivo: "Maria Elena Zuniga",
    email: "Mezuniga@isinergia.ci",
    phone: "+569 9 5643 2398",
    location: "Jorge Caceres 503, La Cisterna, Metroplitana",
    projectNumber: 15,
  },
  {
    image: secondProject,
    title: "Departmento Venta Nuevo en La Clsterna",
    subtitle: "Condominio Jorge Caceres Etapa2",
    desde: "Desde",
    uf: "UF 2.242",
    price: "$80.931.649",
    logo: secondProjectLogo,
    supervisor: "Rodrigo Araos",
    ejecutivo: "Maria Elena Zuniga",
    email: "Mezuniga@isinergia.ci",
    phone: "+569 9 5643 2398",
    location: "Jorge Caceres 503, La Cisterna, Metroplitana",
    projectNumber: 0,
  },

  {
    image: thirdProject,
    title: "Departmento Venta Nuevo en La Clsterna",
    subtitle: "Condominio Jorge Caceres Etapa2",
    desde: "Desde",
    uf: "UF 2.242",
    price: "$80.931.649",
    logo: thirdProjectLogo,
    supervisor: "Rodrigo Araos",
    ejecutivo: "Maria Elena Zuniga",
    email: "Mezuniga@isinergia.ci",
    phone: "+569 9 5643 2398",
    location: "Jorge Caceres 503, La Cisterna, Metroplitana",
    projectNumber: 0,
  },
];

const ImgWrapper = styled("div")({
  flex: "0 0 auto", // Prevent the image from growing or shrinking
  width: "100px", // Set a fixed width for the image (adjust as needed)
  marginRight: "20px", // Add some spacing between the image and content
});

function MyProjectPage() {
  return (
    <Layout>
      <Box
        component="main"
        sx={{
          maxWidth: "95%",
          margin: "0 auto",
          pb:'50px'
        }}
      >
        <Grid>
          {projectData.map((project, index) => (
            <Grid item xs={12} key={index} >
              <Item>
                
                <Grid item xs={4}>
                <img src={project.image} alt={`Project ${index}`} />
                </Grid>
                
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft: "15px",
                    fontFamily: "Outfit",
                    justifyContent: "space-around",
                    width: "350px",
                    "@media (min-width: 1700px)": {
                      width: "auto",
                      paddingLeft: "30px",
                      
                    },
                    "@media (max-width: 900px)": {
                      paddingLeft: "30px",
                      
                    },
                  }}
                >
                  <Typography
                    sx={ TitleTypography}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "var(--text-primary, rgba(0, 0, 0, 0.87))",
                      fontSize: "14px",
                      fontWeight: 600,
                      "@media (min-width: 1700px)": {
                        fontSize: "16px",
                      },
                    }}
                  >
                    {project.subtitle}
                  </Typography>
                  <Typography
                    sx={TitleTypography}
                  >
                    {project.desde}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#009FE3",
                      fontSize: "26px",
                      fontWeight: 700,
                      "@media (min-width: 1700px)": {
                        fontSize: "14px",
                      },
                    }}
                  >
                    {project.uf}
                  </Typography>
                  <Typography
                    sx={TitleTypography}
                  >
                    {project.price}
                  </Typography>
                  <ImgWrapper>
                    <img src={project.logo} alt={`Logo ${index}`} />
                  </ImgWrapper>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft: "10px",
                    justifyContent: "space-around",
                    width: "290px",
                    "@media (min-width: 1700px)": {
                      width: "auto",
                      paddingLeft: "30px",
                    },
                    "@media (max-width: 900px)": {
                      paddingLeft: "0px",
                      
                    },
                  }}
                >
                  <Typography
                    sx={TitleTypography}
                  >
                    Condiciones Comerciales
                  </Typography>
                  <Typography
                    sx={TitleTypography}
                  >
                    Supervisor&nbsp;{" "}
                    <span className="Project--span">{project.supervisor}</span>
                  </Typography>
                  <Typography
                    sx={TitleTypography}
                  >
                    Ejecutivo&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                    <span className="Project--span">{project.ejecutivo}</span>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#545454",
                      display: "flex",
                      alignItems: "center",
                      lineHeight: "200%",
                      "@media (min-width: 1700px)": {
                        fontSize: "14px",
                      },
                    }}
                  >
                    <EmailOutlinedIcon
                      sx={{ fill: "#009FE3", width: "15px" }}
                    />
                    &nbsp;&nbsp;{project.email}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#545454",
                      display: "flex",
                      alignItems: "center",
                      lineHeight: "200%",
                      "@media (min-width: 1700px)": {
                        fontSize: "14px",
                      },
                    }}
                  >
                    <LocalPhoneOutlinedIcon
                      sx={{ fill: "#009FE3", width: "15px" }}
                    />
                    &nbsp;&nbsp;{project.phone}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#545454",
                      display: "flex",
                      lineHeight: "200%",
                      "@media (min-width: 1700px)": {
                        fontSize: "14px",
                      },
                    }}
                  >
                    <LocationOnOutlinedIcon
                      sx={{ fill: "#009FE3", width: "15px" }}
                    />
                    &nbsp;&nbsp;{project.location}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft: "10px",
                    justifyContent: "space-around",
                    alignItems: "flex-start",
                    "@media (min-width: 1700px)": {
                      width: "auto",
                      paddingLeft: "30px",
                    },
                  }}
                >
                  <Typography
                    sx={TitleTypography}
                  >
                    Condiciones Comerciales&nbsp;&nbsp;&nbsp;
                    <span className="Project--span">
                      {project.projectNumber}
                    </span>
                  </Typography>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderRadius: "12px",
                      display: "inline-flex",
                      flexGrow: 0,
                      padding: "8px 22px",
                      flexDirection: "column",
                      justifyContent: "center",
                      color: "var(--primary-main, #2196F3)",
                      fontSize: "12px",
                      width: "auto",
                      
                    }}
                  >
                    Asignar Corredor
                  </Button>
                  <Button
                    className="Project--button"
                    variant="outlined"
                    sx={{
                      borderRadius: "12px",
                      display: "inline-flex",
                      flexGrow: 0,
                      padding: "8px 22px",
                      flexDirection: "column",
                      justifyContent: "center",
                      color: "var(--primary-main, #2196F3)",
                      fontSize: "12px",
                      width: "auto",
                      "@media (max-width: 900px)": {
                        marginTop: "10px",
                      },
                    }}
                  >
                    Administrar Condiciones Comerciales
                  </Button>
                  <Button
                    variant="outlined"
                    className="Project--button"
                    sx={{
                      borderRadius: "12px",
                      display: "inline-flex",
                      alignSelf: "flex-start",
                      padding: "8px 22px",
                      flexDirection: "column",
                      justifyContent: "center",
                      color: "var(--primary-main, #2196F3)",
                      fontSize: "12px",
                      width: "auto",
                      "@media (max-width: 900px)": {
                        marginTop: "10px",
                      },
                  
                    }}
                  >
                    Ver Proyecto
                  </Button>
                </Box>
              </Item>
              {/* <Divider sx={{ backgroundColor: '#0000001F' }} /> */}
            </Grid>
          ))}
          

          <Item>
          <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  
                    justifyContent: "center",
                    alignItems: "center",
                    "@media (max-width: 1200px)": {
                      width: "auto",
                     
                    },
                  }}
                >
            
            <Button
              variant="contained"
              sx={{
                color: "var(--primary-contrast, #FFF)",
                fontFamily: "Roboto",
                fontsize: "18px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "26px",
                borderRadius: "12px",
                background: " var(--primary-main, #2196F3)",
                boxShadow: " 0px 3px 20px 0px rgba(0, 159, 227, 0.26)",
                
              }}
            >
              Clear Proyecto
            </Button>

            </Box>
            
          </Item>
          </Grid>
     
      </Box>
    </Layout>
  );
}

export default MyProjectPage;
