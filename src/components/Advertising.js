import React, { Component } from 'react';
import "../assets/styles/advertising.css";
import { Fade, Grid, Paper } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
        width: '80%',
        height: '20rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '5%',
        marginBottom: '5%',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '15%',
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '20%',
        },
    },
    picture:{
        width: '27rem',
        height: '20rem',
        marginLeft: '20px',
        backgroundImage: 'url("../add.jpeg")',
        [theme.breakpoints.down('lg')]: {
            width: '2rem ',
            height: '2rem',
        },
        backgroundRepeat: 'no-repeat',
    },
    btn:{
        position: 'relative',
        top: 100,
        left:400,
        height: 40,
        width: 150,
        color: 'black',
        transition: theme.transitions.create(["transform", "box-shadow"]),
        '&:hover':{
          transform: "scale3d(1.1,1.1,1.1) translateX(3px)  !important",
          boxShadow: `1px 1px #333, 2px 2px #333, 3px 3px #333`,
        },
        [theme.breakpoints.down('lg')]: {
            left: 350,
            top: 100,
            marginleft: 'auto',
            marginRight: 'auto',
        },
    },
    paper:{
        position: 'relative',
        margin: "0 auto 0 auto",
        marginTop: theme.spacing(1),
        padding: theme.spacing(2),
    }
}));
export default function  Advertising() {
    const classes = useStyles();
        return (
            <>
            <Container className={classes.root}>
                <Paper className={classes.paper}>
                    <Fade in={true}>
                        <Grid container="true" >
                            <Grid item="true">
                                <Typography variant="h3">
                                    Publica tu espacio en AirNbn 
                                </Typography>
                                <Typography variant="h3">
                                    y descubri como ganar dinero
                                </Typography>
                                <Button className={classes.btn} variant="contained" color="primary">
                                    Descubri como
                                </Button>
                            </Grid>
                            <Grid item>
                                <div className="picture"></div>
                            </Grid>
                        </Grid>
                    </Fade>
                </Paper>
            </Container>
            </>
        )
    }