import React, { useState } from "react";
import "../assets/styles/search.css";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from '@material-ui/core/InputBase';
import {  makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import LoginPopup from './LoginPopup.js';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  searchIcon: {
    padding: theme.spacing(0, 2),
    position: 'relative',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row-reverse',
  },
  search: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '65%',
    backgroundColor: 'white',
    marginBottom: 'auto',
    marginTop: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  suggest:{
    position: 'relative',
    display: 'flex',
    width: '300px',
    height: '60px',
    backgroundColor: 'white',
    marginBottom: 'auto',
    marginTop: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
}));


function SearchBox() {
  const classes = useStyles();

/*   const options = [
    { title: "Alcalá de Henares" },
    { title: "Ávila" },
    { title: "Barcelona" },
    { title: "Bilbao" },
    { title: "Burgos" },
    { title: "Cáceres" },
    { title: "Cuenca" },
    { title: "Granada" },
    { title: "Ibiza" },
    { title: "Málaga" },
    { title: "Madrid" },
    { title: "São Paulo" },
    { title: "Río de Janeiro" },
    { title: "Brasilia" },
    { title: "Salvador de Bahía" },
    { title: "Belo Horizonte" },
    { title: "Fortaleza" },
    { title: "Curitiba" },
    { title: "Porto Alegre" },
    { title: "Mar del Plata" },
    { title: "Cataratas del Iguazú" },
    { title: "Ushuaia" },
    { title: "Ciudad de Mendoza" },
    { title: "San Martín de Los Andes" },
    { title: "Villa La Angostura" },
    { title: "Purmamarca" },
    { title: "Cafayate" },
    { title: "Ciudad de Salta" },
    { title: "Ciudad Autónoma de Buenos Aires" },
    { title: "El Cafalate" },
    { title: "Montevideo" },
    { title: "Punta del Este" },
    { title: "Colonia del Sacramento" },
    { title: "Edtambul" },
    { title: "Nueva York" },
    { title: "Singapur" },
    { title: "Macau" },
    { title: "Londres" },
  ];
  
  {options.filter((val) => {
    if (searchTerm.length > 2) { 
      if (val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
        return val;
      }
    }return null;
}).map((val, key) => {
      return key <= 5 ? 
        <div className={classes.suggest} key={key}>
          <Typography variant="body1" color="black">
            {val.title}
          </Typography>
        </div>
   :""
})}  */
  const [searchTerm, setSearchTerm] = useState("  ");
  const [openPopup, setOpenPopup] = useState(false);
  const [login, setLogin] = useState(false);
  return (
    <div className="searchCtn">
      <Grid container="true" justify="center" >
        <div className={classes.search}> 
            <InputBase
             placeholder="Buscar destino.."
             onChange={(event) => setSearchTerm(event.target.value)}
              className={classes.input}
              inputProps={{ 'aria-label': 'search' }}
            />

          <div className={classes.searchIcon}>
              <SearchIcon />
          </div>
          </div> 

      </Grid>
      
        <LoginPopup 
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Iniciar sesión"
        login={login}
        setLogin={setLogin}
        />
    </div>
  );
}

export default SearchBox;
