import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from './Card';
import img1 from '../assets/images/casas-busqueda2.jpg'
class CardGroup extends Component {
    render() {
        let defaultText = 'bla bla bla bla bla bla';
        let defaultTitle = 'Title';
        let defaultPrice = 5000;
        return (
            <div>
                <Grid container spacing={4} justify="center">
                    <Grid item>
                        <Card img={img1} title={defaultTitle} price={defaultPrice} text={defaultText}/>
                    </Grid>
                    <Grid item>
                        <Card img={img1} title={defaultTitle} price={defaultPrice} text={defaultText}/>
                    </Grid>
                    <Grid item>
                        <Card img={img1} title={defaultTitle} price={defaultPrice} text={defaultText}/>
                    </Grid>
                    <Grid item>
                        <Card img={img1} title={defaultTitle} price={defaultPrice} text={defaultText}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CardGroup;
