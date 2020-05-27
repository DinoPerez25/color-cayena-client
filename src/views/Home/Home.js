import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
} from '@material-ui/core';

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      HOME
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-strech',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));
