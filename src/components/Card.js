import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { useTheme } from "@material-ui/core/styles";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles((theme) => ({
  
  root: {
    maxWidth: 250,
    zIndex: 0,
    transition: theme.transitions.create(["transform"]),
    '&:hover':{
      transform: "scale3d(1.2,1.2,1.2)"
    },
  },
  favoriteIcon:{
    marginLeft: 320,
    position: 'absolute',
    top: 5,
    right: 5,
    color: 'gray',
    width:5,
    height:5,
    transition: theme.transitions.create(["transform"]),
    transform : 'perspective(0px) rotateY(0deg)',
    '&:hover':{
      transform: 'perspective(600px)  rotateY(180deg)',
    }
  },
  price:{
    paddingLeft: 150,
  },
  typeCard:{
    marginLeft: -10,
    boxShadow: '.1px .1px',
    fontSize: 20,
    position: 'absolute',
    top: 28,
    backgroundColor: '#B7CCEF',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    transform: 'rotate(-45deg)',
    zIndex: 1
  }
}));
export default function ImgMediaCard(props) {
  const classes = useStyles();
  const [hoverFavoriteIcon, setHoverFavoriteIcon] = React.useState(false);
  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia      
          component="img"
          alt="img"
          height="140"
          image={props.img}
          title="Contemplative Reptile"
        />
        <IconButton className={classes.favoriteIcon} onMouseEnter={() => setHoverFavoriteIcon(true)} onMouseLeave={() => setHoverFavoriteIcon(false)}>
          {hoverFavoriteIcon 
          ? <FavoriteIcon  />
          : <FavoriteBorderIcon />
          }
        </IconButton>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.text}
          </Typography>
        </CardContent>
        <Typography className={classes.typeCard} variant="h5" color="black" component="p">
          Premium
        </Typography>
      </CardActionArea>
      <CardActions>
        <Typography className={classes.price} variant="h5" color="black" component="p">
            $ {props.price}
          </Typography>
      </CardActions>
    </Card>
  );
}