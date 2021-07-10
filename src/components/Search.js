import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import Paper from '@material-ui/core/Paper';
import { Grid } from "@material-ui/core";
import FilterCategory from './FilterCategory';
import CardHorizontal from './CardHorizontal';
const useStyles = makeStyles((theme) => ({
    titleCtn : {  width: '100%',},
    searchTitle: {marginLeft: "10px"},
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        width: 600,
      },
      filterBox: {
        padding: theme.spacing(2),
        height: "40rem",
      },

}));


export default function Search(props) {
  const espacios = [
    { title: "Cama" },
    { title: "Habitacion" },
    { title: "Departamento" },
    { title: "Casa" },
  ];
  const servicios = [
    { title: "Wi-Fi" },
    { title: "TV" },
    { title: "Pileta" },
    { title: "Aire Acondicionado" },
    { title: "Insumos de Higiene" },
    { title: "Calefaccion" },
    { title: "Patio" },
  ];
    const classes = useStyles();
    let title = 'Buenos Aires';
    let quantity= '6';
    
    return (
        <>
        <NavBar></NavBar>
        <div className={classes.titleCtn}>
            <h4 className={classes.searchTitle}> Resultados de busqueda para : {title} ({quantity})</h4>
        </div>
        <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3} sm={3}>
          <Paper className={classes.filterBox}>
              Filtros
            <FilterCategory 
            title ="Tipo de espacio"
            items = {espacios} 
            quantity={espacios.length}/>
            <FilterCategory 
            title ="Servicios"
            items = {servicios} 
            quantity={servicios.length}/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} >Cards</Paper>
        </Grid>
      </Grid>
    </div>

        </>
    );
}