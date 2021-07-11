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
import ImageGallery from './ImageGallery';
const useStyles = makeStyles((theme) => ({
    
}));


export default function Detail(props) {
  
    return (
        <>
            <ImageGallery/>
        </>
    );
}