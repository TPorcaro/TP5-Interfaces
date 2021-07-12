import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography } from "@material-ui/core";
import FilterCategory from './FilterCategory';
import CardHorizontal from './CardHorizontal';
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import img1 from '../assets/images/casas-busqueda.jpg'
import img2 from '../assets/images/casas-busqueda2.jpg'
import img3 from '../assets/images/casas-busqueda3.jpg'
import img4 from '../assets/images/casas-busqueda4.jpg'
import cloneDeep from 'lodash.clonedeep';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import FilterDate from './FilterDate';
import FilterPrice from './FilterPrice';
import { Fade } from '@material-ui/core';

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
        marginLeft: theme.spacing(2),
        height: "60rem",
      },
      filterTitle:{
        position: 'relative',
        margin:'0px auto 0 auto',
        width:250,
        fontSize:24,
      },
      filterTitleDate:{
        position: 'relative',
        margin:'10px auto 0 auto',
        width:250,
      },
      formControl: {
        margin: theme.spacing(1),
        position: 'absolute',
        right: 120,
        top: 115,
        width: 140,
      },
      loader:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
      },
      divider:{
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
      cardContainer: {
        marginLeft: 50,
      }

}));
const cards = [
  {
    img: img1,
    price: 1000,
    title: "Casa en Madrid",
    text: "La casa es una antigua casa remodelada, con muchas comodidades",
    hasAirConditioner: true,
    hasHeater: true,
    hasWifi: true,
    hasTv: true,
    type: "Casa",
    likes: 38,
    dislikes: 7,
    totalLikes: 38-7, 
  },
  {
    img: img2,
    price: 800,
    title: "Casa en Madrid",
    text: "La casa es una antigua casa remodelada, con muchas comodidades",
    hasAirConditioner: true,
    hasHeater: true,
    hasWifi: true,
    hasTv: true,
    type: "Casa",
    likes: 21,
    dislikes:3,
    totalLikes: 21-3, 
  },
  {
    img: img4,
    price: 650,
    title: "Casa en Madrid",
    text: "La casa es una antigua casa remodelada, con muchas comodidades",
    hasAirConditioner: false,
    hasHeater: true,
    hasWifi: false,
    hasTv: true,
    type: "Casa",
    likes: 36,
    dislikes: 11,
    totalLikes: 36-11, 
  },
  {
    img: img3,
    price: 600,
    title: "Casa en Madrid",
    text: "La casa es una antigua casa remodelada, con muchas comodidades",
    hasAirConditioner: true,
    hasHeater: true,
    hasWifi: false,
    hasTv: true,
    type: "Casa",
    likes: 58,
    dislikes: 29,
    totalLikes: 58-29, 
  },
]


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
    const [sort, setSort] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const classes = useStyles();
    let title = 'Buenos Aires';
    let quantity= '6';
    const handleSortChange = (event) => {
      setSort(event.target.value);
    };
    const sortCards = (value) => {
      let cardsCopy = cloneDeep(cards);
      let cardsSorted = [];
      cardsSorted = cardsCopy.sort((a,b) => {
        if(value === 0){
          return a.totalLikes - b.totalLikes;
        }else 
          if(value === 1){
            return a.price + b.price;
          }else{
            return a.price - b.price;
          }
            })
      return cardsSorted;
      }
      React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
      },[sort])
      React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
      },[])
    return (
      <>
      <div className={classes.titleCtn}>
              <h4 className={classes.searchTitle}> Resultados de busqueda para : {title} ({quantity})</h4>
              </div>
              <div className={classes.root}>
            <Fade in={true}>
            <Grid container spacing={3}>
              <Grid item xs={3} sm={3}>
                <Paper className={classes.filterBox}>
                  <Typography align="center" className={classes.filterTitle}>
                    Filtros
                  </Typography>
                  <Divider />
                  <FilterCategory 
                  title ="Tipo de espacio"
                  items = {espacios} 
                  quantity={espacios.length}/>
                  <Divider className={classes.divider} />
                  <FilterCategory 
                  title ="Servicios"
                  items = {servicios} 
                  quantity={servicios.length}/>
                  <Divider />
                  <Typography align="center" className={classes.filterTitleDate}>
                    Fechas de su estadia
                  </Typography>
                  <FilterDate title={'Fecha de inicio:'}/>
                  <FilterDate title={'Fecha de salida:'}/>
                  <Divider />
                  <Typography align="center" className={classes.filterTitleDate}>
                    Precios
                  </Typography>
                  <FilterPrice/>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} spacing={3}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Ordenar por :</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={sort}
                      onChange={handleSortChange}
                    >
                      <MenuItem default value={0}>Más relevantes</MenuItem>
                      <MenuItem value={1}>Mayor precio</MenuItem>
                      <MenuItem value={2}>Menor precio</MenuItem>
                    </Select>
                  </FormControl>
                  {loading ?
                  <CircularProgress size={100} className={classes.loader}/>
                  :<>
                  <Container className={classes.cardContainer}>
                    {sortCards(sort).map((card,i) => {
                      return <CardHorizontal
                        title={card.title}
                        text={card.text}
                        price={card.price}
                        img={card.img}
                        hasHeater={card.hasHeater}
                        hasTv={card.hasTv}
                        hasAirConditioner={card.hasAirConditioner}
                        hasWifi={card.hasWifi}
                        type={card.type}
                      />
                    })}
                  </Container>
                  </>
                  }
              </Grid>
            </Grid>
            </Fade>
          </div>
          </>
    );
}