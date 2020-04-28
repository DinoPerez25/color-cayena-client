import React, { forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import {
    Button,
    AppBar,
    Toolbar,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.darkmode.main,
        color: theme.palette.darkmode.contrastText,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: theme.spacing(10),
        color: theme.palette.darkmode.contrastText

    },
    appBar: {
        backgroundColor: 'transparent',
        color: theme.palette.darkmode.contrastText,
        height: theme.spacing(8),
        justifyContent: 'space-between'
    },
    toolbar: {
        justifyContent: 'space-between'
    },
}));


const pages = [
    {
        title: 'Inicio',
        href: '/',
        icon: ''
    },
    {
        title: 'Galería',
        href: '/galery',
        icon: ''
    },
    {
        title: 'ColorCayena',
        href: '/color-cayena',
        icon: ''
    },
];
const CustomRouterLink = forwardRef((props, ref) => (
    <div
        ref={ref}
        style={{ flexGrow: 1 }}
    >
        <RouterLink {...props} />
    </div>
));


export default function Header() {
    const classes = useStyles();
    const theme = useTheme(useStyles)
    return (
        <div className={classes.root} >
            <div className={classes.header}>
                <Typography variant='h5' color='inherit'>ColorCayena</Typography>
            </div>
            <AppBar className={classes.appBar} position="static">
                <Toolbar className={toolbar}>
                    {pages.map(page => (
                        <Button
                            activeClassName={classes.active}
                            className={classes.button}
                            component={CustomRouterLink}
                            color="inherit"
                            key={pages.indexOf(page)}
                            to={page.href}
                        >
                            <div className={classes.icon}>{page.icon}</div>
                            {page.title}
                        </Button>
                    ))}
                </Toolbar>
            </AppBar>

        </div>
    );
}