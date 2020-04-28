import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
} from '@material-ui/core';
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

const tileData = [
  {
    img: '',
    title: 'Image',
    author: 'author',
    cols: 2,
  },
];
export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      HOME
    </div>
  );
}