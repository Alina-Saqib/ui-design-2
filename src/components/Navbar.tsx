import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { styled, alpha } from '@mui/material/styles';
import logo from '../assets/logo.png';
import profile from '../assets/profile.png'
import { Breadcrumbs, SvgIcon, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { Link, useLocation } from 'react-router-dom';
import CustomBreadcrumbs from './Breadcrumb';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  right: 0,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 0, 1, 2),
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    // transition: theme.transitions.create('width'),
    // width: '100%',
    // [theme.breakpoints.up('sm')]: {
      //   width: '12ch',
      //   '&:focus': {
    //     width: '20ch',
    //   },
    // },
  },
}));


const drawerWidth = 260;

interface Props {
  window?: () => Window;
}
const Navbar = (props: Props)=> {
  
  const isScreenSizeLessThan787px = useMediaQuery('(max-width:787px)');
  const location = useLocation();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
 



  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {[{ text : 'Mis-Proyectus', icon: <DescriptionOutlinedIcon sx={{fill:"#C2EDFF", width:'22px'}}/>}, 
        {text: 'Catalogo-De-Proyectos' ,icon: <ContentCopyOutlinedIcon sx={{fill:"#C2EDFF",width:'22px'}}/>}, 
        {text: 'Acuerdos-Comerciales', icon: <SvgIcon><path d="M4.125 19.25C3.75833 19.25 3.4375 19.1125 3.1625 
        18.8375C2.8875 18.5625 2.75 18.2417 2.75 17.875V4.125C2.75 3.75833 2.8875 3.4375 3.1625 3.1625C3.4375
         2.8875 3.75833 2.75 4.125 2.75H17.875C18.2417 2.75 18.5625 2.8875 18.8375 3.1625C19.1125 3.4375 19.25 
         3.75833 19.25 4.125V17.875C19.25 18.2417 19.1125 18.5625 18.8375 18.8375C18.5625 19.1125 18.2417 19.25 
         17.875 19.25H4.125ZM4.125 4.125V17.875H17.875V4.125H15.4917V10.5188L13.2458 9.16667L11 10.5188V4.125H4.125Z"
          fill="#C2EDFF" 
        /></SvgIcon>}, 
        {text: 'Leads',icon: <SvgIcon>
        <path d="M3.4375 17.6459H7.5625V9.85419H3.4375V17.6459ZM8.9375 17.6459H13.0625V4.35419H8.9375V17.6459ZM14.4375 17.6459H18.5625V11.6875H14.4375V17.6459ZM2.0625 19.0209V8.47919H7.5625V2.97919H14.4375V10.3125H19.9375V19.0209H2.0625Z" fill="#C2EDFF"/>
     </SvgIcon>
      },
        {text: 'Catalogo-De-Corredores',icon: <AccountBoxOutlinedIcon sx={{fill:"#C2EDFF",width:'22px'}}/>}, 
        {text: 'Mis-Datos',icon: <TableRowsOutlinedIcon sx={{fill:"#C2EDFF",width:'22px'}}/>}, 
        {text: 'Settings',icon: <SettingsOutlinedIcon sx={{fill:"#C2EDFF",width:'22px'}}/>}].map((item, index) => (
          <ListItem key={index} >
            <Link
              to={`/${item.text.toLowerCase()}`}
              style={{ textDecoration: "none" }}
             
            >
            <ListItemButton
              sx={{
              color: location.pathname === `/${item.text.toLowerCase()}` ? "white": "#C2EDFF",
              backgroundColor: location.pathname === `/${item.text.toLowerCase()}` ? "#1DAEEC": "transparent",
              fill: location.pathname === `/${item.text.toLowerCase()}` ? "white": "#C2EDFF",
              borderRadius: "12px",
              fontFamily: "Outfit",
              fontFeatureSettings: 'clig: off, liga: off',
              fontSize: "16px",
              paddingX: "5px",
              fontStyle: "normal",
              fontWeight: 400,
              alignItems:'center',
              width:"230px",
              "&:hover": {
                backgroundColor: "#1DAEEC",
                color:"white"
              },
            }}>
              <ListItemIcon sx={{margin: '0px', padding:'0px', minWidth:'30px' }} >{item.icon}</ListItemIcon>
              <ListItemText primary={ 
              item.text.toLowerCase() === "mis-proyectus" ? "Mis Proyectus" : 
              item.text.toLowerCase() === "catalogo-de-proyectos" ? "Catalogo De Proyectos" :
              item.text.toLowerCase() === "acuerdos-comerciales" ? "Acuerdos Comerciales" : 
              item.text.toLowerCase() === "catalogo-de-corredores" ? "Catalogo De Corredores" : 
              item.text.toLowerCase() === "mis-datos" ? "Mis Datos" : item.text } sx={{marginLeft: '0px', padding:'0px'}}  disableTypography/>
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex',backgroundColor:'#F7F9FB' }}>
    
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: "#FFF",
          boxShadow: "0px 5px 26px 0px rgba(180, 212, 225, 0.10)",
          ml: { sm: `${drawerWidth}px` },
          borderRadius: "var(--none, 0px) var(--none, 0px) var(--1, 8px) var(--1, 8px)",
          height: "80px",
        }}
      >
        
        <Toolbar sx={{display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              mt:'8px',
              }}>

                  <div>
                  {isScreenSizeLessThan787px ? null : <CustomBreadcrumbs />}
        </div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{fill:"black"}} />
          </IconButton>
          <div style={{display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}>
          <Search sx={{ borderRadius: "12px", border: "1px solid #ECEFF0",color: '#545454',
             fontFamily: 'Outfit',
             fontSize: '14px',
             fontStyle: 'normal',
             fontWeight: 400,
             mr: "22px",
             lineHeight: '22px'}}>
            <SearchIconWrapper>
              <SearchIcon  sx={{fill:"#009FE3"}} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{borderRadius: "60px",
          width: "46px",
          height: "46px",
          border: "1px solid #ECEFF0",
          padding:"10px",
          justifyContent:"center"}}>
           <InfoOutlinedIcon sx={{fill:'black' ,width:'22px'}}/>
          </Box>
            {/* <Box sx={{
              backgroundImage:"url(${profileImage})",
              borderRadius: '60px',
              width: "46px",
            height: "46px",
            border: '1.2px solid #FFF',
            backgroundRepeat: `no-repeat`,
            backgroundColor:"lightgray",
            backgroundSize: '-0.543px -35.368px / 123.688% 185.532% ',
            boxShadow: '2px 3px 26px 0px rgba(0, 159, 227, 0.08)',
            mr:"12px",
            ml:"12px"
          }}>   </Box> */}
          <Avatar src={profile} sx={{height:'66px',mr:"12px", borderRadius: '60px',
            ml:"12px",mt:'10px'}}/>
          
        {isScreenSizeLessThan787px ? null: <Typography variant="h6" noWrap component="div" 
          sx={{color:"black",
          fontFamily: "Outfit",
          fontSize: "16px",
          fontstyle: "normal",
          fontweight: 600,
          lineHeight: "normal"}} >
          Luc Willey
          </Typography> }
          <IconButton
            color="inherit"
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
          <SvgIcon>
          <path d="M12 15.375L6 9.37499L7.075 8.29999L12 13.25L16.925 8.32499L18 9.39999L12 15.375Z" fill="#707070"/>
          </SvgIcon>
          </IconButton>
      </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        >
        
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor:"#009FE3", 
            borderRadius: "var(--none, 0px) var(--none, 0px) 14px var(--none, 0px)",
            boxShadow: "0px 5px 26px 0px rgba(0, 159, 227, 0.10);" ,alignSelf:"center"},
          }}
        >
        
          <img src={logo} style={{ width: '142px', height: '46px', alignSelf:"center", marginTop:"22px"}}/>
          {drawer}

        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor:"#009FE3", 
            borderRadius: "var(--none, 0px) var(--none, 0px) 14px var(--none, 0px)",
            boxShadow: "0px 5px 26px 0px rgba(0, 159, 227, 0.10);",
          height:'0 auto'},
          }}
          open
        >
          <Link to='/' style={{textDecoration:"none", alignSelf:"center"}}><img src={logo} style={{ width: '142px', height: '46px', alignSelf:"center", marginTop:"22px"}}/></Link>
          {drawer}

        </Drawer>
      </Box>
     

    </Box>
  );
}

export default Navbar;
