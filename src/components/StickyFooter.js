import React from 'react';
import Container from '@material-ui/core/Container';
import Grid  from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link  from '@material-ui/core/Link';

export default function StickyFooter() {

  return (
    <Box px={{xs: 3, sm:10}} py={{xs: 5, sm:10}}bgcolor="text.secondary" color="white" >
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
            <Box>
              <Link href="/" color="inherit">
                Iniciar Sesión
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Registrarte
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" pt ={{xs: 5, sm: 10}} pb={{xd: 5, sm: 0}}>
          @Términos y condiciones 2021
        </Box>
      </Container>
    </Box>
  );
}