import React,{useEffect} from 'react';
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
import { Grow } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    loader:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
    }
}));


export default function Detail(props) {
    const [loading,setLoading] = React.useState(true);
    useEffect(() => {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        },[])
        const classes = useStyles();
    return (
        <>
            {loading ?
            <CircularProgress size={100} className={classes.loader}></CircularProgress>
            : 
                <ImageGallery/>
            }
        </>
    );
}