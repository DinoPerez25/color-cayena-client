import React, {useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {
  Button,
  Typography, 
  Dialog, 
  DialogActions, 
  DialogContent,
  DialogTitle,
  Switch,
  Grid
} from '@material-ui/core';

import { GaleryContext } from '../contexts/GaleryContext';

export default function CustomizedDialogs() {
  const classes = useStyles();
  const {open, setOpen, currentPhoto} = useContext(GaleryContext);
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
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Dialog maxWidth='lg' onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose} align='center'>
          MESA DE COLOREADO  
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={3} className={classes.content}>
            <Grid item xs={10} onClick={onChangeImage} align='right'>
              <Switch
              checked={state}
              onChange={onChangeImage}
              inputProps={{ 'aria-label': 'primary checkbox' }}
              align='right'
              />
              <span>{getImage()}</span>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='h5' align='left'>Id: {currentPhoto.id}</Typography>
              <Typography variant='h5' align='left'>Título: {currentPhoto.title}</Typography>
              <Typography variant='h5' align='left'>Author: {currentPhoto.author}</Typography>
              <Typography variant='h5' align='left'>Descripción: {currentPhoto.description}</Typography>
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