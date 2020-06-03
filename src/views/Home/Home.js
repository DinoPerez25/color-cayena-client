import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
  Typography,
  Switch
} from '@material-ui/core';

export default function Home() {
  const classes = useStyles();
  const [state, setState] = useState(false);
  const onChangeImage=()=>{
    setState(!state)
  }
  const getImage =() => {
    if(!state){
      return <img className={classes.imgHome}  src='/images/54.jpg'/>
    }else{
      return <img className={classes.imgHome}  src='/images/54_color.png'/>
    }
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.content}>
        <Grid item xs={6} align='right'>
          <Switch
          checked={state}
          onChange={onChangeImage}
          inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </Grid>
        <Grid item xs={6}>
        </Grid>
        <Grid item xs={6} onClick={onChangeImage}>
          <span>{getImage()}</span>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h3' align='center' className={classes.text}>¿Qué es ColorCayena?</Typography>
          <Typography variant='h4' className={classes.text} paragraph>
            ColorCayena es un proyecto que tiene como objetivo darle color a la historia de
            Barranquilla mediante herramientas de ComputerVision. Se presentan 65 fotografías
            escogidas de un conjunto, las cuales se alojan en los recursos de la Biblioteca de
            Universidad del Norte, Karl C. Parrish. Ingresa a la <a className={classes.link} href="./colaborate">GALERÍA</a> y descubre a la 
            Barranquilla antigua a color.
          </Typography>
          <Typography variant='h4' className={classes.text} paragraph>
            Tambien queremos iniciar la recopilacion colectiva de esa parte de la historia de la
            ciudad que ha crecido con las familias Barranquilleras, en sus albumnes y herencia 
            familiar. Si desean particiar y hacer parte de esta recopilación, pueden hacerlo en
            la pestaña <a className={classes.link} href="./colaborate">APORTA AL PROYECTO.</a>

          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'100%',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  content:{
    width:'80%'
  },
  imgHome:{
    width:'100%',
    cursor:'pointer'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.white
  },
  text:{
    fontFamily:'Poppins',
    marginBottom:20
  },
  link:{
    fontFamily:'Poppins',
    color: theme.palette.primary.main
  },
  gradient:{
    borderRadius: 2,
    background: theme.palette.white,
    background: 'linear-gradient(90deg, rgba(166,15,15,1) 0%, rgba(40,135,47,1) 53%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent'
  }
}));
