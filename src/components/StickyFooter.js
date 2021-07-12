import React, {useState, useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Grid  from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link  from '@material-ui/core/Link';
import LoginPopup from './LoginPopup.js';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
link: {
  cursor: "pointer",
},
 
})); 
export default function StickyFooter() {
  const classes = useStyles();
  const [loading,setLoading] = React.useState(true);
    
  const [openPopup, setOpenPopup] = useState(false);
  const [login, setLogin] = useState(false);
  const session = localStorage.getItem('user');


  useEffect(() => {
    setTimeout(() => {
        setLoading(false);
    }, 3000);
  })

  const openRegister = () => {
    setLogin(false);
    setOpenPopup(true);
  }
  const closeSession = () => {
    localStorage.removeItem("user");
    window.location.reload();
  }
  const openLogin = () => {
    setLogin(true);
    setOpenPopup(true);
  }
  return (
    <>
    {
      loading ? "" :
    <Box px={{xs: 3, sm:10}} py={{xs: 5, sm:10}} bgcolor="#8AA8DC" className={classes.container} color="white" >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xd={12} sm={6}>
            <Box borderBottom={1}>Ayuda</Box>
            <Box>
              <Link href="/" color="inherit">
                Preguntas frecuentes
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Soporte
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
               Contacto
              </Link>
            </Box>
          </Grid>
          <Grid item xd={12} sm={6}>
            <Box borderBottom={1}>Cuenta</Box>
            { 
              localStorage.getItem("user") !== null ? 
              <Box>
              <Link color="inherit" style={{cursor:'pointer'}}>
                Mi cuenta
              </Link>
              </Box>
              :
              <Box>
                <Link onClick={()=> openLogin()}color="inherit" style={{cursor:'pointer'}}>
                  Iniciar Sesión
                </Link>
              </Box>
            }
            { 
              localStorage.getItem("user") !== null ? 
              <Box>
              <Link onClick={()=> closeSession()} color="inherit" style={{cursor:'pointer'}}>
                Cerrar sesion
              </Link>
              </Box>
              :
              <Box>
                <Link  onClick={()=> openRegister()} color="inherit" style={{cursor:'pointer'}}>
                  Registrarte
                </Link>
              </Box>
            }
          </Grid>
        </Grid>
        <Box textAlign="center" pt ={{xs: 5, sm: 10}} pb={{xd: 5, sm: 0}}>
          @Términos y condiciones 2021
        </Box>
      </Container>
      <LoginPopup 
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        login={login}
        setLogin={setLogin}
        />
    </Box>
  }
  </>
  );
}