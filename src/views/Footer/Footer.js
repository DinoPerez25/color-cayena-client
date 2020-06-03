import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
  Grid,
  Typography,
  IconButton
} from '@material-ui/core';

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container wrap="nowrap" spacing={1}>
        <Grid item xs={12}>
          <IconButton href='https://github.com/DinoPerez25/color-cayena-front' aria-label="delete" className={classes.gradient}>
            <GitHubIcon fontSize="small"/>
          </IconButton>
          <Typography >ColorCayena</Typography>
          <Typography >Andrés Pérez y Dinorah Pérez</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    padding: 40,
    textAlign: 'center'
  },
  gradient:{
    borderRadius: 2,
    background: theme.palette.white,
    background: 'linear-gradient(90deg, rgba(166,15,15,1) 0%, rgba(40,135,47,1) 53%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent'
  }
}));
