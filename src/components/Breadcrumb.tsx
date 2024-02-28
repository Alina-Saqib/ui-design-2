import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const CustomBreadcrumbs = () => {

  const mapPathName = (name: String) => {
    // Add your custom mappings here
    switch (name) {
      case 'mis-proyectus':
        return 'Mis Proyectus';
      case 'catalogo-de-proyectos':
        return 'Catalogo De Proyectos';
        case 'acuerdos-comerciales':
        return 'Acuerdos Commerciales';
        case 'catalogo-de-corredores':
        return 'Catalogo De Corredores';
        case 'leads':
        return 'Leads';
        case 'mis-datos':
        return 'Mis Datos';
        case 'settings':
        return 'Settings';
      default:
        return name;
    }};
  const history = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const pathnames = pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {pathnames.length > 0 ? (
        <Link sx={{ textDecoration: 'none', cursor:"pointer", fontSize: "18px", fontWeight: 400}} color="inherit" onClick={() => history('/')}>
          Inmobiliaria / Home
        </Link>
      ) : (
        <Typography  sx={{ textDecoration: 'none' , color:'#6B6B6B'}} >Inmobiliaria / Home</Typography>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = mapPathName(name);

        return isLast ? (
          <Typography key={name} sx={{color: "#212121" , fontSize: "18px",fontWeight: 400}}>
            {displayName}
          </Typography>
        ) : (
          <Link key={name} sx={{ textDecoration: 'none', cursor:"pointer", fontSize: "18px",fontWeight: 400}}onClick={() => history(routeTo)}>
            {displayName}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
