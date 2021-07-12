import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchBox from './SearchBox';
import Advertising from './Advertising';
import CardGroup from './CardGroup';
import { Fade, Typography } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    loader:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
    },
    cardGroup:{
        paddingTop: theme.spacing(10),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(5)
    },
    textSugerencia:{
        marginTop: theme.spacing(5),
        marginBottom:theme.spacing(0),
        [theme.breakpoints.down('lg')]: {
            marginTop: '15%',
            marginleft: 'auto',
            marginRight: 'auto',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '15%',
            marginleft: 'auto',
            marginRight: 'auto',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '20%',
            marginleft: 'auto',
            marginRight: 'auto',
        },
    }
}));


export default function Home(props) {
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
                   <>
                     <SearchBox></SearchBox>
                        <Advertising />
                        <Container className={classes.cardGroup}>
                            <Typography className={classes.textSugerencia} variant="h3">
                                Nuestras sugerencias
                            </Typography>
                            <CardGroup></CardGroup>
                        </Container>
                   </>
            }
        </>    
);
}