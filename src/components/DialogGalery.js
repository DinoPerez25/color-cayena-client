import React, {useContext, useState,useEffect, forwardRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as Redirect } from 'react-router-dom';

import {
  Button,
  Typography,
  Dialog, 
  DialogActions, 
  DialogContent,
  DialogTitle,
  Switch,
  Grid,
  Tooltip,
  Link,
  LinearProgress
} from '@material-ui/core';

import { GaleryContext } from '../contexts/GaleryContext';

export default function CustomizedDialogs() {
  const classes = useStyles();
  const {currentPhoto, open, setOpen} = useContext(GaleryContext);
  const [state, setState] = useState(false);
  const [openGuide, setOpenGuide] = useState(true);
  const [buffer, setBuffer] = useState(0);
  const onChangeImage=()=>{
    setState(!state)
    setBuffer(getbuffer())
  }
  const getbuffer = () =>{
    if(state){
      return 0
    }else{
      return 100
    }
  }
  const getImage =() => {
    if(!state){
      return <img className={classes.imgHome}  src={process.env.BUCKET_URL+'/originals/'+currentPhoto.id+'.jpg'}/>
    }else{
      return <img className={classes.imgHome}  src={process.env.BUCKET_URL+'/colors/'+currentPhoto.id+'_color.png'}/>
    }
  }
  const handleClose = () => {
    setOpen(false);
    setState(false);
    setBuffer(getbuffer())
  };
  useEffect(()=>{
  },[state, buffer])

  return (
    <div className={classes.root}>
      <Dialog maxWidth='md' onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose} align='center'>
          MESA DE COLOREADO  
        </DialogTitle>
        <DialogContent dividers>
        <Grid container spacing={3} className={classes.content}>
            <Grid item xs={8} onClick={onChangeImage} align='right'>
              <Switch
              checked={state}
              onChange={onChangeImage}
              inputProps={{ 'aria-label': 'primary checkbox' }}
              align='right'
              />
            </Grid>
            <Grid item xs={4}>
            </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.content}>
            <Grid item xs={8} onClick={onChangeImage} align='right'>
              <LinearProgress variant='buffer' value={buffer} />
              <span>{getImage()}</span>
            </Grid>
            <Grid item xs={4}>
              <Typography variant='h5' className={classes.text}>Título: {currentPhoto.title}</Typography>
              <Typography variant='h5' className={classes.text}>Author: {currentPhoto.author}</Typography>
              <Typography variant='h5' className={classes.text}>Descripción: {currentPhoto.description}</Typography>
              <Tooltip title="Memoria caribe - Universidad del Norte">
                <Link href={currentPhoto.reference} variant="outlined" color="secondary">
                    Repositorio original
                </Link>
              </Tooltip>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      backgroundColor: 'transparent',
      color: theme.palette.darkmode.contrastText,
      marginBottom: 20,
      padding: theme.spacing(2),
      fontFamily:'Poppins'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  fab: {
      position: 'absolute',
      bottom: theme.spacing(10),
      right: theme.spacing(10),
  },
  root: {
    flexGrow: 1,
    width:'100%',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  content:{
    width:'95%'
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

  }
}));