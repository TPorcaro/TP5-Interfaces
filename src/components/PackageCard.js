import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import  Icon  from "@material-ui/core/Icon";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Container } from '@material-ui/core';
import airConditioner from '../assets/air-conditioner.svg';
import heater from '../assets/heater.svg';
import tv from '../assets/tv.svg';
import wifi from '../assets/wifi.svg';
import Grow from '@material-ui/core/Grow';
const useStyles = makeStyles((theme) => ({
    typeCard:{
        height: 30,
        width: 130,
        boxShadow: '.1px .1px',
        fontSize: 20,
        position: 'absolute',
        display: 'block',
        top: 20,
        left: -35,
        backgroundColor: '#FBFF00',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 0,
        paddingBottom: 0,
        transform: 'rotate(-45deg)',
        zIndex: 5
    },
    card: {
    display: 'flex',
    height:150,
    marginBottom: 40,
    marginRight:20,
    width: 750,
    [theme.breakpoints.down('lg')]:{
     width : 550,
    },
    transition: theme.transitions.create(["transform"]),
    '&:hover':{
      transform: "scale3d(1.05,1.05,1.05)  !important"
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
    minWidth: 150,
  },
  favoriteIcon:{
    position: 'relative',
    color: 'gray',
    right:-450,
    width:10,
    height:10,
    [theme.breakpoints.down('lg')]:{
      right : -350,
     },
    transition: theme.transitions.create(["transform"]),
    transform : 'perspective(0px) rotateY(0deg)',
    '&:hover':{
      transform: 'perspective(600px)  rotateY(180deg)',
    }
  },
  price:{
    position: 'relative',
    top: -30,
    right : -470,
    bottom: 55,
    width: 100,
    margin: 0,
    padding: 0,
    [theme.breakpoints.down('lg')]:{
      right : -300,
     },
  },
  containerText: {
      position: 'relative',
      top: -30,
  },
  type:{
      fontSize: 8,
      color: 'gray',
      opacity: 0.8,
      margin:0,
      padding: 0,
  },
  iconContainer:{
    position: 'relative',
    top: -20,
    left: 15,
    maxWidth: 250,
    minWidth: 250,
    margin:0,
    padding: 0
  },
  icon:{
      marginLeft: 5,
      padding: 5,
      marginRight: 5,
  },
  
}));

export default function PackageCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [hoverFavoriteIcon, setHoverFavoriteIcon] = React.useState(false);
//Price, text, title, img
  return (
    <Grow in={true}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image={props.img}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
          <IconButton className={classes.favoriteIcon} onMouseEnter={() => setHoverFavoriteIcon(true)} onMouseLeave={() => setHoverFavoriteIcon(false)}>
            {hoverFavoriteIcon 
            ? <FavoriteIcon  />
            : <FavoriteBorderIcon />
            }
          </IconButton>
          <Container className={classes.containerText}>
              <Typography className={classes.type} variant="overline" >
                  Paquetes para disfrutar
              </Typography>
            <Typography component="h5" variant="subtitle1">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {props.text}
            </Typography>

          </Container>
            <Container className={classes.iconContainer}>
                {props.hasAirConditioner &&
                  <Icon className={classes.icon}>
                      <img src={airConditioner} height={25} width={25}/>
                  </Icon>
                }
                {props.hasHeater && 
                  <Icon className={classes.icon}>
                      <img src={heater} height={25} width={25}/>
                  </Icon>
                }
                {props.hasTv && 
                  <Icon className={classes.icon}>
                      <img src={tv} height={25} width={25}/>
                  </Icon>
                }
                {props.hasWifi && 
                  <Icon className={classes.icon}>
                      <img src={wifi} height={25} width={25}/>
                  </Icon>
                }
            </Container>
            <Typography className={classes.price} variant="h5" color="black" component="p">
              $ {props.price}
            </Typography>
            <Typography className={classes.typeCard} align="center" variant="h5" color="black" component="p">
            Paquete
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Grow>
  );
}