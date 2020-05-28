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
        <Grid item xs={6} onClick={onChangeImage}>
          <Switch
          checked={state}
          onChange={onChangeImage}
          inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <span>{getImage()}</span>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h5' align='center'>¿Qué es ColorCayena?</Typography>
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
}));
