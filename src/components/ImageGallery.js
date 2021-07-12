import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography } from "@material-ui/core";
import Select from '@material-ui/core/Select';
import img1 from '../assets/images/casas-busqueda.jpg'
import img2 from '../assets/images/casas-busqueda2.jpg'
import img3 from '../assets/images/casas-busqueda3.jpg'
import img4 from '../assets/images/casas-busqueda4.jpg'
import cloneDeep from 'lodash.clonedeep';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageList from '@material-ui/core/ImageList';
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';
import FilterDate from './FilterDate';
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root:{
        padding: theme.spacing(3),
        paddingTop: theme.spacing(0.1),
        paddingLeft: theme.spacing(3),
        paddingRight:theme.spacing(3),
        margin: 100,
        overflow: 'hidden',
        width: 700
    },
    starIcon:{
        position: 'relative',
        color: 'yellow',
        marginTop: theme.spacing(0.1),
        right:-685,
        width: 35,
        height:35,
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
    rent:{
        position:'relative',
        height: 40,
        float: 'right',
        right: 20,
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
            transform: 'rotate(5deg)'
        },
        "22%":{
            transform: 'rotate(0deg)'
        },
        "33%":{
            transform: 'rotate(-5deg)'
        },
        "44%":{
            transform: 'rotate(0deg)'
        },
        "55%":{
            transform: 'rotate(0)'
        },
        "66%":{
            transform: 'rotate(5deg)'
        },
        "77%":{
            transform: 'rotate(0deg)'
        },
        "88%":{
            transform: 'rotate(-5deg)'
        },
        "100%":{
            transform: 'rotate(0deg)'
        }
    }
}));
const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
  ];


export default function ImageGallery(props) {
  const classes = useStyles();
  const handleClickImg = (e) => {
    console.log(e.target);
  }
    return (
        <> 
            <Grid container alignContent="space-between">
                <Grid item>
                    <Paper variant="outlined" className={classes.root}>
                        <StarTwoToneIcon className={classes.starIcon}>
                        </StarTwoToneIcon>
                        <ImageList sx={{ width: 700, height: 600 }} cols={1} rowHeight={500}>
                            <ImageListItem cols={1}>
                                <img srcSet={`${img1}?w=500&h=450&auto=format 1x,
                                        ${img1}?w=500&h=450&auto=format&dpr= 2x`}></img>
                            </ImageListItem>
                        </ImageList>
                        <ImageList sx={{ width: 300, height: 450 }} cols={10}  rowHeight={120}>
                            {itemData.map((item) => (
                                <ImageListItem  cols={2.00} key={item.img}>
                                <img
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
                        <Paper variant="outlined" className={classes.root}>
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
                        </Paper>
                </Grid>
            </Grid>
            
        </>
    );
}