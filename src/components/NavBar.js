import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { Icon } from '@material-ui/core';
import logo from '../assets/airnbn.svg';
import Container from '@material-ui/core/Container'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  title: {
    color: 'white',
    marginLeft: 10,
  },
  search: {
    position: 'relative',
    display: 'flex',
    marginRight: theme.spacing(120),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    position: 'relative',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row-reverse',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: 'ch',
      },
    },
  },
  logoContainer:{
    zIndex: 2
  },
  register:{
    backgroundColor: '#FBFF00 !important',
    height: 40,
    color: 'black',
    marginRight: 15,
    transition: theme.transitions.create(["transform", "box-shadow"]),
    '&:hover':{
      transform: "scale3d(1.1,1.1,1.1) translateX(-3px)  !important",
      boxShadow: `1px 1px #333, 2px 2px #333, 3px 3px #333`,
    },
  },
  signIn:{
    backgroundColor: '#FBFF00 !important',
    height: 40,
    width: 150,
    color: 'black',
    transition: theme.transitions.create(["transform", "box-shadow"]),
    '&:hover':{
      transform: "scale3d(1.1,1.1,1.1) translateX(3px)  !important",
      boxShadow: `1px 1px #333, 2px 2px #333, 3px 3px #333`,
    },
  },
  btnContainer:{
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    left: -100,
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Container classname={classes.logoContainer}>
            <IconButton onClick={() => {console.log('click logo')}} component="span" >
              <img src={logo} height={50} width={50} />
            <Typography className={classes.title}  variant="h6">
              AIRNBN
            </Typography>
            </IconButton>
          </Container>
          <div className={classes.search}> 
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
             <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div> 
          <Container className={classes.btnContainer}>
            <Button className={classes.register} variant="contained">
                Registrese
            </Button>
            <Button className={classes.signIn} variant="contained">
                Iniciar sesion
            </Button>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}