import React, {useState} from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import CloseIcon from '@material-ui/icons/Close';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Air nbn
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 1),
  },
  close: {
    margin: theme.spacing(0, 0, 0),
  }
}));

export default function LoginPopup(props)  {
    const classes = useStyles();
    const [acceptTerms, setAcceptTerms] = useState(false);
    const {  openPopup, setOpenPopup } = props;
    console.log(props.login)
    return (
      <Dialog open={openPopup} >
        { props.login === true ?
        <DialogContent>
            <Button
                type="submit"
                variant="outlined"
                onClick={()=> {props.setOpenPopup(false)}}
            >
               <CloseIcon className={classes.close}/>
            </Button>
        <Container component="main" maxWidth="xs" >
            <CssBaseline />
        <div className={classes.paper} >
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Iniciar sesión
            </Typography>
            <form className={classes.form} noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
                autoFocus
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recordar contraseña"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Iniciar sesión
            </Button>
            <Grid container>
                
                <Grid item>
                <Link onClick={()=>props.setLogin(false)} variant="body2">
                    {"No tienes cuenta? Regístrate"}
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
        <Box mt={8}>
            <Copyright />
        </Box>
        </Container>
        </DialogContent>
        :
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Button
                type="submit"
                variant="outlined"
                onClick={()=> {props.setOpenPopup(false)}}
            >
               <CloseIcon className={classes.close}/>
            </Button>
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Registro
            </Typography>
            <form className={classes.form} noValidate>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="Nombre"
                    autoFocus
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Apellido"
                    name="Apellido"
                    autoComplete="lname"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="email"
                    autoComplete="email"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                
                </Grid>
                <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" onChange={()=> setAcceptTerms(!acceptTerms)}/>}
                    label="Acepto los terminos y condiciones."
                />
                </Grid>
            </Grid>
            {acceptTerms === true ? 
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Registrarse
            </Button>: 
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled
            className={classes.submit}
            >
                Registrarse
            </Button>
            }
            
            <Grid container justifyContent="flex-end">
                <Grid item>
                <Link onClick={()=>props.setLogin(true)} variant="body2">
                   Ya tienes una cuenta? Inicia sesión
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
        <Box mt={5}>
            <Copyright />
        </Box>
        </Container>
        }
    </Dialog>
    );
}
