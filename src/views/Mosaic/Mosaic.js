import React, { useContext } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import {GALERY_IMAGES} from '../../utils/GaleryItems';

import { GaleryContext} from '../../contexts/GaleryContext';

import {
  Typography,
  ButtonBase
} from '@material-ui/core';

const Mosaic = (props) => {
  const classes = useStyles();
  const { setCurrentPhoto, setOpen } = useContext(GaleryContext);

  const getImg = (id) => {
    return <img className={classes.img} src={'/images/'+id+'.jpg'}/>
  }
  const onClickSelection = (img) => {
    setCurrentPhoto({
      id:img.id,
      title:img.title,
      author:img.author,
      description:img.description
    });
    setOpen(true);
  };

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
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            className={classes.title}
          >
            {img.title}
          </Typography>
      </ButtonBase>
        )}
      </div>
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
