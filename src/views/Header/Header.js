import React, { forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import logo from '../../assets/images/logo.svg';

import {
    Button,
    AppBar,
    Toolbar,
    Typography,
} from '@material-ui/core';

const pages = [
    {
        title: 'Inicio',
        href: '/',
    },
    {
        title: 'Galería',
        href: '/galery',
    },
    {
        title: 'ColorCayena',
        href: '/color-cayena',
    },
    {
        title: 'Aporta al proyecto',
        href: '/color-cayena',
    },
];
const CustomRouterLink = forwardRef((props, ref) => (
    <div ref={ref} style={{ flexGrow: 1 }} >
        <RouterLink {...props} />
    </div>
));


export default function Header() {
    const classes = useStyles();
    const theme = useTheme(useStyles)
    return (
        <div className={classes.root} >
            <div className={classes.headerContainer}>
                <div className={classes.header}>
                    <img className={classes.logo} src={logo} alt="logo" />
                </div>
                <AppBar className={classes.appBar} position="static">
                    <Toolbar className={classes.toolbar}>
                        {pages.map(page => (
                            <Button
                                className={classes.button}
                                component={CustomRouterLink}
                                color="inherit"
                                key={page.title}
                                to={page.href}
                            >
                                {page.title}
                            </Button>
                        ))}
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    );
}
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
    },
    headerContainer: {
        width: '80%',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.darkmode.contrastText,
        backgroundColor: 'transparent',

    },
    logo: {
        width: '10%',
    },
    appBar: {
        backgroundColor: 'transparent',
        color: theme.palette.darkmode.contrastText,
        height: theme.spacing(8),
        marginTop: 20,
        justifyContent: 'center',
        width: '100%',
    },
    toolbar: {
        backgroundColor: 'transparent',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        width: '100%',
    }
}));
