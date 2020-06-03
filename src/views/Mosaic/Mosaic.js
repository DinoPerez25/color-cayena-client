import React, { useContext, useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {GALERY_IMAGES} from '../../utils/GaleryItems';

import { GaleryContext} from '../../contexts/GaleryContext';

import {
  DialogActions,
  ButtonBase,
  Dialog,
  DialogContent,
  DialogTitle,
  Button
} from '@material-ui/core';

const Mosaic = (props) => {
  const classes = useStyles();
  const { setCurrentPhoto, setOpen } = useContext(GaleryContext);
  const [openGuide, setOpenGuide] = useState(false);
  const handleClose = () => {
    setOpenGuide(false);
  };
  /*const Colorization = (id) => {
    colorization(id)
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json);
        })
        .catch(error => {
            console.log("Colorization(Mosaic.js):" + error.message);
        });
  };*/
  const getImg = (id) => {
    return <img className={classes.img} src={process.env.BUCKET_URL+'/originals/'+id+'.jpg'}/>
  }
  const onClickSelection = (img) => {
    setCurrentPhoto({
      id:img.id,
      title:img.title,
      author:img.author,
      reference:img.reference,
      description:img.description
    });
    setOpen(true);
  };
  useEffect(()=>{
    /*setOpenGuide(true)*/
  },[])

  return (
    <div className={classes.root}>
      <div className={classes.galery}>
        {GALERY_IMAGES.map((img) => 
        <ButtonBase
        key={GALERY_IMAGES.indexOf(img)}
        focusRipple
        className={classes.imgContainer}
        onClick={(event) => onClickSelection(img)}
      >
        <span>
          {getImg(img.id)}
        </span>
      </ButtonBase>
        )}
      </div>
      <Dialog maxWidth='md' onClose={handleClose} aria-labelledby="customized-dialog-title" open={openGuide}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose} align='center'>
          BIENVENIDO A LA GALERÍA 
        </DialogTitle>
        <DialogContent dividers>
        <img src="" alt="Guía de uso"/>
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

const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  galery:{
    width:'80%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imgContainer: {
    margin:10
  },
  img: {
    width:'200px',
  },
}));
export default Mosaic;
