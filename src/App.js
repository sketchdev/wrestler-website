import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { createMuiTheme } from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/es/styles/MuiThemeProvider';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: 'none'
      }
    }
  },
  palette: {
    primary: {
      main: blue[900],
      contrastText: '#fff',
    }
  },
  typography: {
    fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
    headline: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    title: {
      fontWeight: 400,
    },
    useNextVariants: true,
  },
  spacing: {
    unit: 12,
  }
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Header/>
    <Switch>
      <Route component={Home}/>
    </Switch>
    <Footer/>
  </MuiThemeProvider>
);

export default App;
