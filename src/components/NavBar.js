import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import logo from '../assets/airnbn.svg';
import '../assets/styles/navBar.css';
import { useHistory } from "react-router-dom";
import Container from '@material-ui/core/Container'
import LoginPopup from './LoginPopup.js';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  background:{
    backgroundColor: '#4166A5 !important',
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
    [theme.breakpoints.down('lg')]:{
      marginRight: theme.spacing(55),
     },
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
    zIndex: 10,
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
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
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
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    transition: theme.transitions.create(["transform", "box-shadow"]),
    '&:hover':{
      transform: "scale3d(1.1,1.1,1.1) translateX(3px)  !important",
      boxShadow: `1px 1px #333, 2px 2px #333, 3px 3px #333`,
    },
  },
  pubEspacio:{
    backgroundColor: '#FBFF00 !important',
    height: 40,
    width: 185,
    color: 'black',
    marginRight: 15,
  },

  btnContainer:{
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    left: -100,
  },
  iconRight:{
    transition: theme.transitions.create(["transform"]),
    transform: 'rotate(-90deg)',
  },
  iconDown:{
    transition: theme.transitions.create(["transform"]),
    transform: 'rotate(0deg)',
  },

}));

export default function NavBar() {
  const history = useHistory();
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [login, setLogin] = useState(false);
  const openRegister = () => {
    setLogin(false);
    setOpenPopup(true);
  }
  const closeSession = () => {
    localStorage.removeItem("user");
    window.location.reload();
  }
  const openLogin = () => {
    setLogin(true);
    setOpenPopup(true);
  }
  const dropdownProfile = () =>  {
    document.getElementById("myDropdown").classList.toggle("show");
    setOpenProfile(!openProfile);
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  return (
    <div className={classes.root} >
      <AppBar position="static" className={classes.background}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Container  onClick={() => history.push('/')} className={classes.logoContainer}>
            <IconButton onClick={() => history.push('/')} component="span" >
              <img src={logo} height={50} width={50} />
            <Typography className={classes.title}  variant="h6">
              AIRNBN
            </Typography>
            </IconButton>
          </Container>
          <div className={classes.search}> 
            <InputBase
              placeholder="Search…"
              onKeyPress={(e) => {
                if(e.key == 'Enter'){
                  history.push('/search')
                }
              }}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
             <div className={classes.searchIcon} onClick={() => console.log("sdasda")}>
              <SearchIcon /> 
            </div>
          </div> 
          <Container className={classes.btnContainer}>
          { 
              localStorage.getItem("user") !== null ? 
              <Button variant="outlined"  size="large" className={classes.pubEspacio} >
              Publicar espacio
               </Button>
              :
              <Button className={classes.register} variant="contained" onClick={()=> openRegister()}>
              Registrese
              </Button>
          }    
          { 
              localStorage.getItem("user") !== null ? 
              <>
              <Badge color="secondary" badgeContent={5}>
               <Button size="medium"   className="favorite">Favoritos
               </Button>
              </Badge>
              <div className="dropdown">
              <Button size="medium"  onClick={() => dropdownProfile()} className="dropbtn">
                {
                  openProfile ? 
                  <>
                  Mi cuenta <ArrowDownwardIcon fontSize="inherit" className={classes.iconDown}/>
                  </>
                  :
                  <>
                  Mi cuenta <ArrowDownwardIcon fontSize="inherit" className={classes.iconRight}/>
                  </>
                }
              </Button>
                  <div id="myDropdown" className="dropdown-content">
                      <a href="#">Perfil</a>
                      <a href="#">Configuracion</a>
                      <a onClick={() =>closeSession()}  style={{cursor:'pointer'}}>Cerrar sesion</a>
                  </div>
              </div>
              </>
              :
              <Button className={classes.signIn} variant="contained" onClick={()=> openLogin()}>
                Iniciar sesion
              </Button>
          }         
          </Container>
        </Toolbar>
      </AppBar>
      <LoginPopup 
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        login={login}
        setLogin={setLogin}
        />
    </div>
  );
}