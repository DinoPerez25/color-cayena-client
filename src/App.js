import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import { Header as HeaderView } from './views/Layout';
import { Home as HomeView } from './views/';


const browserHistory = createBrowserHistory({ basename: '' });


export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <HeaderView />
          <Route exact path="/" component={HomeView} />
        </Router>
      </ThemeProvider>
    );
  }
}
