import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from './Card';
import img1 from '../assets/images/casas-busqueda.jpg'
import img2 from '../assets/images/casas-busqueda2.jpg'
import img3 from '../assets/images/casas-busqueda3.jpg'
import img4 from '../assets/images/casas-busqueda4.jpg'
import { Fade } from '@material-ui/core';
import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop: theme.spacing(10),
    }
}));
const cards = [
    {
        title: "Casa en Buenos Aires",
        price: 600,
        text: "Casa antigua remodelada, todas las comodidades."
    },
    {
        title: "Casa en Villa Agustin, San Juan",
        price: 1200,
        text: "Una casa con 3 habitaciones, hermosa localidad."
    },
    {
        title: "Departamento en Tandil",
        price: 800,
        text: "Frente a la plaza independencia, pleno centro."
    },
    {
        title: "Casa a estrenar en Pinamar",
        price: 1600,
        text: "Ubicacion perfecta, 2 cuadras de la playa."
    },
];
export default function CardGroup(){
    const classes = useStyles();
        return (
            <Fade in={true}>
                <Grid className={classes.root} container spacing={4} justify="center">
                    <Grid item xs={6} sm={6} lg={3}>
                        <Card img={img1} title={cards[0].title} price={cards[0].price} text={cards[0].text}/>
                    </Grid>
                    <Grid item xs={6} sm={6} lg={3}>
                        <Card img={img2} title={cards[1].title} price={cards[1].price} text={cards[1].text}/>
                    </Grid>
                    <Grid item xs={6} sm={6} lg={3}>
                        <Card img={img3} title={cards[2].title} price={cards[2].price} text={cards[2].text}/>
                    </Grid>
                    <Grid item xs={6} sm={6} lg={3}>
                        <Card img={img4} title={cards[3].title} price={cards[3].price} text={cards[3].text}/>
                    </Grid>
                </Grid>
            </Fade>
        );
}