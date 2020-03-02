import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {colors} from './assets/styles'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import List from './views/List';
import Form from './views/Form';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${colors.background};
    font-family: 'Open Sans'; 
    color: ${colors.dark};
  }
`

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path={['/form/:id', '/form']}>
          <Form />
        </Route>
        <Route exact path="/">
          <List />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
