import React from 'react';
import List from './views/List';
import {createGlobalStyle} from 'styled-components';
import {colors} from './assets/styles'
import './App.css';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${colors.background};
    font-family: 'Open Sans'; 
  }
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <List />
    </div>
  );
}

export default App;
