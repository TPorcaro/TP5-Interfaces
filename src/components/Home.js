import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchBox from './SearchBox';
import Advertising from './Advertising';
import CardGroup from './CardGroup';
import { Fade } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import PackageGroup from './PackageGroup.js'
const useStyles = makeStyles((theme) => ({
    loader:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
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
                    <div className="margened">
                        <CardGroup></CardGroup>
                        <PackageGroup></PackageGroup>
                    </div> 
                   </>
            }
        </>    
);
}