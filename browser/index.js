'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './Routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import indigoTealTheme from './themes/indigoTeal';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';


render(
  <MuiThemeProvider muiTheme={getMuiTheme(indigoTealTheme)}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
