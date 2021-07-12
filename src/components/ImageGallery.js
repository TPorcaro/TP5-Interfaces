import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography } from "@material-ui/core";
import Select from '@material-ui/core/Select';
import img1 from '../assets/images/casa-detail1.jpeg';
import img2 from '../assets/images/casa-detail2.jpeg';
import img3 from '../assets/images/casa-detail3.jpeg';
import img4 from '../assets/images/casa-detail4.jpeg';
import img5 from '../assets/images/casa-detail5.jpeg';
import user1 from '../assets/images/user1.jpg';
import user2 from '../assets/images/user2.jpg';
import user3 from '../assets/images/user3.jpg';
import user4 from '../assets/images/user4.jpg';
import cloneDeep from 'lodash.clonedeep';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageList from '@material-ui/core/ImageList';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FilterDate from './FilterDate';
import { Button } from '@material-ui/core';
import LikesDislikes from './LikesDislikes';
import Comentary from './Comentary';

const useStyles = makeStyles((theme) => ({
    containerRoot:{
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(0),
        padding: theme.spacing(1),
        width: '96.5%',
    },
    root:{
        paddingTop: theme.spacing(0.1),
        paddingLeft: theme.spacing(3),
        paddingRight:theme.spacing(3),
        paddingBottom: theme.spacing(3),
        marginLeft: 100,
        marginTop: 100,
        overflow: 'hidden',
        width: 700
    },
    rootRight:{
        paddingTop: theme.spacing(0.1),
        paddingLeft: theme.spacing(3),
        paddingRight:theme.spacing(2),
        marginLeft: 100,
        marginRight: 100,
        marginTop: 100,
        overflow: 'hidden',
        width: 700
    },
    root2:{
        padding: theme.spacing(3),
        paddingTop: theme.spacing(0.1),
        paddingLeft: theme.spacing(3),
        paddingRight:theme.spacing(3),
        margin: 100,
        overflow: 'hidden',
        width: 700
    },
    favoriteIcon:{
        position: 'relative',
        color: 'gray',
        marginTop: theme.spacing(0.1),
        right:-685,
        width: 35,
        height:35,
        transition: theme.transitions.create(["transform"]),
        transform : 'perspective(0px) rotateY(0deg)',
        '&:hover':{
            transform: 'perspective(600px)  rotateY(180deg) scale3d(1.1,1.1,1.1)',
        }
    },
    title:{
        fontSize:36,
        width:400,
        margin: '0 auto 0 auto',
    },
    dateContainer:{
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    containerText:{
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        top:40,
        margin: theme.spacing(6),
        marginLeft: theme.spacing(14.5),
    },
    textLeft:{
        backgroundColor: '#8AA8DC !important',
        borderRadius: 5,
        position: 'relative',
        width: 100,
        paddingLeft: 10,
        paddingRight:10,
    },
    textRight:{
        backgroundColor: '#8AA8DC !important',
        borderRadius: 5,
        position: 'relative',
        width: 120,
        right: -120,
        paddingLeft: 10,
        paddingRight:10,
    },
    paper:{
        backgroundColor: '#8AA8DC !important',
        padding: 0,
        width: 115,
        height: 33,
    },
    paper1:{
        backgroundColor: '#8AA8DC !important',
        padding: 0,
        width: 120,
        height: 33,
    },
    serviceContainer:{
        display: 'flex',
        flexDirection: 'row',
        width:400,
    },
    paperContainer:{
        padding: theme.spacing(4),
    },
    servicesTitle:{
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(3)
    },
    descriptionText:{
        padding: theme.spacing(2),
    },
    rent:{
        position:'relative',
        height: 40,
        float: 'right',
        right: 20,
        top: 30,
        width: 150,
        color: 'whiter',
        transition: theme.transitions.create(["transform", "box-shadow"]),
        transform : 'perspective(0px) rotateY(0deg)',
        '&:hover':{
            transform: "scale3d(1.1,1.1,1.1) translateX(3px)  !important",
            boxShadow: `1px 1px #333, 2px 2px #333, 3px 3px #333`,
        },
        '&:focus':{
            transform: "scale3d(1.1,1.1,1.1) translateX(3px)  !important",
            animation: "$click 1s ease-in-out",
        },
    },
    '@keyframes click': {
        "0%":{
            transform: 'rotate(0)'
        },
        "11%":{
            transform: 'rotate(2deg)'
        },
        "22%":{
            transform: 'rotate(0deg)'
        },
        "33%":{
            transform: 'rotate(-2deg)'
        },
        "44%":{
            transform: 'rotate(0deg)'
        },
        "55%":{
            transform: 'rotate(2deg)'
        },
        "66%":{
            transform: 'rotate(0deg)'
        },
        "77%":{
            transform: 'rotate(-2deg)'
        },
        "88%":{
            transform: 'rotate(0deg)'
        },
        "100%":{
            transform: 'rotate(0deg)'
        }
    },
    scroll:{
        height: '450px',
        overflow: 'auto',
    }
}));
const detailText= "Se ha transformado una antigua nave en maravillosos espacios habitacionales, donde reinan las zonas abiertas, que aportan gran luminosidad gracias a los amplios ventanales, otorgándoles una importante ventilación y haciendo de las estancias un verdadero placer.";
const itemData = [
    {
      img: img1,
      title: 'Foto 1',
      index: 0,
    },
    {
      img: img2,
      title: 'Foto 2',
      index: 1,
    },
    {
      img: img3,
      title: 'Foto 3',
      index: 2,
    },
    {
      img: img4,
      title: 'Foto 4',
      index: 3
    },
    {
      img: img5,
      title: 'Foto 5',
      index: 4
    },
  ];
  const commentaries = [
    {
        img: user2,
        name: "Maria del carmen",
        positive: true,
        text: "Bastante fria la casa pero tenia buena calefaccion!", 
    },
    {
        img: user1,
        name: "Hernan",
        positive: true,
        text: "La pileta hermosa. Buena señal de internet", 
    },
    {
        img: user3,
        name: "Federico",
        positive: false,
        text: "La heladera no funcionaba, pileta sin mantenimiento", 
    },
    {
        img: user4,
        name: "Martin",
        positive: true,
        text: "Hermoso patio, ideal para que jueguen los chicos!", 
    },
  ]

export default function ImageGallery(props) {
  const classes = useStyles();
  const [imageToShow, setNextImg] = React.useState(0);
  const [hoverFavoriteIcon, setHoverFavoriteIcon] = React.useState(false);

    const nextImg = (param) => {
        if(param === -1){
            let nextIndex = 0;
            if(imageToShow < itemData.length-1){
                nextIndex = imageToShow +1;
                console.log(nextIndex);
                setNextImg(nextIndex);
            }else{
                setNextImg(0);
            }
        }else{
            setNextImg(param);
        }
    }

    return (
        <>
        <Grid container>
            <Grid item xs={12}>
                <Paper variant="outlined" className={classes.containerRoot}>
                <Grid container alignContent="space-between">
                    <Grid item>
                        <Paper variant="outlined" className={classes.root}>
                        <IconButton className={classes.favoriteIcon} onMouseEnter={() => setHoverFavoriteIcon(true)} onMouseLeave={() => setHoverFavoriteIcon(false)}>
                            {hoverFavoriteIcon 
                            ? <FavoriteIcon  />
                            : <FavoriteBorderIcon />
                            }
                        </IconButton>
                            <ImageList sx={{ width: 700, height: 600 }} cols={1} rowHeight={500}>
                                <ImageListItem cols={1}>
                                    <img onClick={() => nextImg(-1)}srcSet={`${itemData[imageToShow].img}?w=500&h=450&auto=format 1x,
                                            ${itemData[imageToShow].img}?w=500&h=450&auto=format&dpr= 2x`}></img>
                                </ImageListItem>
                            </ImageList>
                            <ImageList sx={{ width: 300, height: 450 }} cols={10}  rowHeight={120}>
                                {itemData.map((item) => (
                                    <ImageListItem  cols={2.00} key={item.img}>
                                    <img onClick={() => nextImg(item.index)}
                                        srcSet={`${item.img}?w=500&h=450&auto=format 1x,
                                            ${item.img}?w=500&h=450&auto=format&dpr= 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper variant="outlined" className={classes.rootRight}>
                            <Typography className={classes.title}>
                                Casa en Buenos Aires
                            </Typography>
                            <Container className={classes.dateContainer}>
                                <FilterDate title={'Fecha de inicio:'}/>
                                <FilterDate title={'Fecha de salida:'}/>
                            </Container>
                            <Button id="btnRent" className={classes.rent} variant="contained" color = "primary">
                                Alquilar
                            </Button>
                            <Container className={classes.containerText}>
                                    <Typography className={classes.textLeft} variant="h4" align="center">
                                        Precio 
                                    </Typography>
                                    <Typography className={classes.textRight} variant="h4" align="center">
                                        $800
                                    </Typography>
                            </Container>
                            <Container className={classes.containerText}>
                                    <Typography className={classes.textLeft} variant="h6" align="center">
                                        Capacidad
                                    </Typography>
                                    <Typography className={classes.textRight} variant="h6" align="center">
                                        4 personas
                                    </Typography>
                            </Container>
                            <Container className={classes.containerText}>
                                    <Typography className={classes.textLeft} variant="h6" align="center">
                                        Camas
                                    </Typography>
                                    <Typography className={classes.textRight} variant="h6" align="center">
                                        3(4 plazas)
                                    </Typography>
                            </Container>
                            <LikesDislikes likes={37} dislikes={7}/>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container alignContent="space-between">
                    <Grid item>
                        <Container className={classes.root2}>
                            <Paper className={classes.paperContainer}>
                                <Typography variant="h3" align="center" className={classes.sectionTitle}> 
                                    Detalles de publicacion
                                </Typography>
                                <Typography variant="h5" align="left" className={classes.servicesTitle}>
                                    Servicios
                                </Typography>
                                <Grid container alignContent="space-between">
                                    <Grid xs={6} item className={classes.serviceContainer}>
                                        <Typography variant="subtitle1">. Aire Acondicionado</Typography>
                                    </Grid>
                                    <Grid xs={6} item className={classes.serviceContainer}>
                                        <Typography variant="subtitle1">. Calefacción</Typography>
                                    </Grid>
                                    <Grid xs={6} item className={classes.serviceContainer}>
                                        <Typography variant="subtitle1">. Wi-Fi</Typography>
                                    </Grid>
                                    <Grid xs={6} item className={classes.serviceContainer}>
                                        <Typography variant="subtitle1">. Patio</Typography>
                                    </Grid>
                                </Grid>
                                <Typography variant="h5" align="left" className={classes.servicesTitle}>
                                    Descripcion general
                                </Typography>
                                <Paper>
                                    <Typography className={classes.descriptionText} variant="subtitle1">{detailText}</Typography>
                                </Paper>
                            </Paper>
                        </Container>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
            <Grid xs={12} item>
                    <Typography variant="h3" align="center">Comentarios ({commentaries.length})</Typography>
                <Container className={classes.scroll}>
                   
                    {
                        commentaries.map((item)=>{
                            return <Comentary     
                            img = {item.img}
                            name = {item.name}
                            positive = {item.positive}
                            text = {item.text}
                            />
                        })
                    }
                </Container>
            </Grid>
        </Grid>
       
        
        </>
    );
}