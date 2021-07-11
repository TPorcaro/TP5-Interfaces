import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop: 10,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'column',
    },
    slider:{
        width: 150,
        position: 'relative',
        marginTop: 25,
    },
    textNumber:{
        width:100
    }
}));
export default function FilterElement(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState([600, 1000]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    function valuetext(value,input) {
        let input_0 = document.getElementById('input0');
        let input_1 = document.getElementById('input1');
        if(input_0 &&input === 0){
            input_0.value = value;
        }else if(input_1 && input === 1){
            input_1.value = value;
        }
        return `${value}°C`;
      }
      
    return (
        <div className={classes.root}>
            <label for={props.title}> {props.title}</label>
            <Grid container justify="center">
                <Grid item>
                    <Slider
                    className={classes.slider}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                    min={600}
                    max={1000}
                    />

                </Grid>

            </Grid>
        <Grid container spacing={5} justify="center">
            <Grid item >
                <TextField
                className={classes.textNumber}
                id="input0"
                label="Minimo"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                />
            </Grid>
            <Grid item>
                <TextField
                className={classes.textNumber}
                id="input1"
                label="Maximo"
                type="number"
                InputProps={{
                    min: 600,
                    max: 100,
                }}
                InputLabelProps={{
                    shrink: true,
                }}
                />
            </Grid>
        </Grid>
        </div>
    )
}
