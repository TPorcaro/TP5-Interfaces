import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PackageCard from './PackageCard';
import { Fade } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import img1 from '../assets/images/casas-busqueda2.jpg'


const useStyles = makeStyles((theme) => ({

}));

export default function PackageGroup(props) {
        let defaultText = 'Una vez en la vida tenés que estar acá. Te esperamos con sorpresas y experiencias que jamás olvidarás';
        let defaultTitle = 'Disfruta el Calafate';
        let defaultPrice = 6000;

        const classes = useStyles();
    return (
        <>
       <Fade in={true}>
                <Grid container spacing={2} justify="center">
                    <Grid item>
                        <PackageCard img={img1} title={defaultTitle} price={defaultPrice} text={defaultText}/>
                        <PackageCard img={img1} title={defaultTitle} price={defaultPrice} text={defaultText}/>
                    </Grid>
                    <Grid item>
                        <PackageCard img={img1} title={defaultTitle} price={defaultPrice} text={defaultText}/>
                        <PackageCard img={img1} title={defaultTitle} price={defaultPrice} text={defaultText}/>
                    </Grid>
                </Grid>
            </Fade>
        </>    
);
}