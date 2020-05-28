import React, { forwardRef, Fragment } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button, Avatar, Typography } from '@material-ui/core';

const CustomRouterLink = forwardRef((props, ref) => (
	<div ref={ref} style={{ flexGrow: 1 }}>
		<RouterLink {...props} />
	</div>
));

const ImageMin = (props) => {
	const classes = useStyles();
  const { id, title, description } = props;
	return (
		<Fragment>
      <Typography>{description}</Typography>
		</Fragment>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
    display:'flex',
    flexDirection:'column'
  },
  description:{
    position:'fixed'
  }
}));

export default ImageMin;
