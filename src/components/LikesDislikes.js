import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import { Container, Grid } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        width: 300,
        left: 300,
    },
    container:{
        display: 'flex',
        alignItems: 'center',
        alignContent: "center",
        flexDirection: 'row',
        width:70,
        margin: 0,
    },
    iconLike:{
        marginLeft:10,
    }
}));
export default function FilterElement(props) {
    const classes = useStyles();
    

    return (
        <Container className={classes.root}>
            <Container className={classes.container}>
                <Typography variant="h6">
                    {props.likes || 0}
                </Typography>
            <ThumbUpIcon className={classes.iconLike} color="primary"/>
            </Container>
            <Container className={classes.container}>
                <Typography variant="h6">
                    {props.dislikes || 0}
                </Typography>
                <ThumbDownIcon className={classes.iconLike} color="secondary"/>
            </Container>
        </Container>
    )
}
