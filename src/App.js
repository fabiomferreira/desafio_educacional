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
import {PUBLIC_URL} from './config';

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
        <Route path={[`/${PUBLIC_URL}form/:id`, `${PUBLIC_URL}/form`]}>
          <Form />
        </Route>
        <Route exact path={`${PUBLIC_URL}`}>
          <List />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
