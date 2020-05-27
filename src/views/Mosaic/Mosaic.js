import React, { forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import img from '../../assets/images/53.jpg';
import { Redirect } from 'react-router-dom';



export default function Mosaic() {
  const classes = useStyles();

  const handleClick = (title) => {
    <Redirect to='/'></Redirect>
  }
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} cols={6} className={classes.gridList}>
        {tileData.map((tile) => (
          <GridListTile
            key={tileData.indexOf(tile)}
            onClick={handleClick(tile.title)}
            className={classes.img}>
            <img src={img} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '20px 20px',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '80%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  img: {
    cursor: 'pointer'
  }
}));
const tileData = [
  {
    id: 1,
    img: img,
    title: 'Image',
    author: 'author',
  },
  {
    id: 2,
    img: img,
    title: 'Image',
    author: 'author',
  },
  {
    id: 3,
    img: img,
    title: 'Image',
    author: 'author',
  },
  {
    id: 4,
    img: img,
    title: 'Image',
    author: 'author',
  },
  {
    id: 5,
    img: img,
    title: 'Image',
    author: 'author',
  },
  {
    id: 6,
    img: img,
    title: 'Image',
    author: 'author',
  },
  {
    id: 7,
    img: img,
    title: 'Image',
    author: 'author',
  },
  {
    id: 8,
    img: img,
    title: 'Image',
    author: 'author',
  },
];