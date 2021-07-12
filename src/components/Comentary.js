import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Icon from "@material-ui/core/Icon";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const useStyles = makeStyles((theme) => ({

  card: {
    display:"flex",
    height: 150,
    marginBottom: 40,
    width: 650,
    marginLeft:'auto',
    marginRight:'auto',
  },
  cover: {
    width: 85,
    height: 85,
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft:'30px',
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  containerText: {
    position: "relative",
    top: 30,
  },
  iconLike: {
    marginLeft: '100%',
  },
}));

export default function Comentary(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card} align="center">
      <CardMedia className={classes.cover} image={props.img} title="juan" />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Container className={classes.containerText}>
            <Typography component="h5" variant="subtitle1">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {props.text}
            </Typography>
            {
              props.positive ? 
            <ThumbUpIcon className={classes.iconLike} color="primary"/>
            :
            <ThumbDownIcon className={classes.iconLike} color="secondary"/>
          }
          </Container>
        </CardContent>
      </div>
    </Card>
  );
}
