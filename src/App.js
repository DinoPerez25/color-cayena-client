import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import { GaleryProvider } from './contexts/GaleryContext';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import {
  Header as HeaderView,
  Footer as FooterView,
  Home as HomeView,
  Mosaic as MosaicView,
  Contribute as ContributeView
} from './views';


const browserHistory = createBrowserHistory({ basename: '' });


export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GaleryProvider>
        <Router history={browserHistory}>
          <HeaderView />
          <Route exact path="/" component={HomeView} />
          <Route exact path="/galery" component={MosaicView} />
          <Route exact path="/contribute" component={ContributeView} />
          <FooterView />
        </Router>
        </GaleryProvider>
      </ThemeProvider>
    );
  }
}
