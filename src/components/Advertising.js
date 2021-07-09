import React, { Component } from 'react';
import "../assets/styles/advertising.css";
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';

class Advertising extends Component {
    render() {
        return (
            <>
             <div className="advertisingCtn">
                <Grid container="true" >
                    <Grid item="true">
                        <h2>Publica tu espacio en AirNbn </h2>
                        <h2>y descubri como ganar dinero</h2>
                        <Button variant="contained" color="primary">
                            Descubri como
                        </Button>
                    </Grid>
                    <Grid item="true">
                        <div className="picture"></div>
                    </Grid>
                </Grid>
             </div>
            </>
        )
    }
}
export default Advertising;