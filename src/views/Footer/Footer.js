import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
  Paper,
  Grid,
  Typography,
  Avatar,
  IconButton
} from '@material-ui/core';

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container wrap="nowrap" spacing={1}>
        <Grid item xs={12}>
          <IconButton aria-label="delete" className={classes.margin}>
            <GitHubIcon fontSize="small" />
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
  }
}));
