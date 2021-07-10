import React from 'react'
import FilterElement from './FilterElement';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  filterTitle:{
    position: 'relative',
    margin:'0 auto 0 auto',
    width:200,
  }
  }));

function FilterCategory(props) {
    const title = props.title;
    const items = props.items;
    const classes = useStyles();
    return (
        <div>
          <Typography  align="center" className={classes.filterTitle}>
              {title}
            </Typography>
          {
          items.map((val,key) => {
            return <FilterElement 
            key={key}
            title={val.title}/>
          })}
            
        </div>
    )
}
export default FilterCategory;