import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
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
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageList from '@material-ui/core/ImageList';
const useStyles = makeStyles((theme) => ({
    root:{
        padding: theme.spacing(3)
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
    return (
        <>
            <Paper variant="outlined" className={classes.root}>
                <ImageList sx={{ width: 560, height: 450 }} rowHeight={450}>
                    <ImageListItem>
                        <img srcSet={`${img1}?w=500&h=450&auto=format 1x,
                                ${img1}?w=500&h=450&auto=format&dpr= 2x`}></img>
                    </ImageListItem>
                </ImageList>
                <ImageList sx={{ width: 300, height: 450 }} cols={20}  rowHeight={100}>
                    {itemData.map((item) => (
                        <ImageListItem cols={2.00} key={item.img}>
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
        </>
    );
}