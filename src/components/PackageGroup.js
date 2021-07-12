import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PackageCard from './PackageCard';
import { Fade } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import img1 from '../assets/images/calafate.jpg';
import img3 from '../assets/images/lagosCafayate.jpg';
import img2 from '../assets/images/copaCabana.jpg';
import img4 from '../assets/images/mardel1.jpg';

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop: theme.spacing(10),
    }
}));

export default function PackageGroup(props) {
        let defaultText = 'Una vez en la vida tenés que estar acá. Te esperamos con sorpresas y experiencias que jamás olvidarás';
        let defaultTitle = 'Disfruta el Calafate';
        let defaultPrice = 6000;
        let text1 = 'Una vez en la vida tenés que estar acá. Te esperamos con sorpresas y experiencias que jamás olvidarás';
        let title1 = 'Disfruta el Calafate';
        let price1 =  6000;
        let text2 = 'El establecimiento Augustos Rio Copa Hotel, situado a solo 200 metros de la playa de Copacabana';
        let title2 = 'Augustos Rio Copa Hotel';
        let price2 = 8300;
        let text3 = 'Con vista panorámica al Lago Argentino, El hotel Lagos Del Calafate alberga el Equilibrium Spa, de acceso gratuito, con piscina interior.';
        let title3 = 'Lagos Del Calafate';
        let price3 = 3672;
        let text4 = 'El Hotel Versailles está ubicado en Mar del Plata, a 300 m de la playa y del Espigón de Pescadores. La propiedad que brinda desayuno incluido.';
        let title4 = 'Hotel Versailles';
        let price4 = '5999';
        const classes = useStyles();
    return (
        <>
       <Fade in={true}>
                <Grid container spacing={2} className={classes.root} justify="center">
                    <Grid item>
                        <PackageCard img={img1} title={title1} price={price1} text={text1}/>
                        <PackageCard img={img2} title={title2} price={price2} text={text2}/>
                    </Grid>
                    <Grid item>
                        <PackageCard img={img3} title={title3} price={price3} text={text3}/>
                        <PackageCard img={img4} title={title4} price={price4} text={text4}/>
                    </Grid>
                </Grid>
            </Fade>
        </>    
);
}