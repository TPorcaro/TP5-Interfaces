import React, { Component } from 'react';
import "../assets/styles/advertising.css";
import { Fade, Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    btn:{
        height: 40,
        width: 150,
        color: 'black',
        transition: theme.transitions.create(["transform", "box-shadow"]),
        '&:hover':{
          transform: "scale3d(1.1,1.1,1.1) translateX(3px)  !important",
          boxShadow: `1px 1px #FBFF00, 2px 2px #FBFF00, 3px 3px #FBFF00`,
        },
    }
}));
export default function  Advertising() {
    const classes = useStyles();
        return (
            <>
             <div className="advertisingCtn">
                <Fade in={true}>
                <Grid container="true" >
                    <Grid item="true">
                        <h2>Publica tu espacio en AirNbn </h2>
                        <h2>y descubri como ganar dinero</h2>
                        <Button className={classes.btn} variant="contained" color="primary">
                            Descubri como
                        </Button>
                    </Grid>
                    <Grid item="true">
                        <div className="picture"></div>
                    </Grid>
                </Grid>
                </Fade>
             </div>
            </>
        )
    }