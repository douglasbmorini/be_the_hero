import React from 'react';

import './global.css';

import Routes from './routes';

//JSX (JavaScript XML(sintaxe do HTML)) - HTML integrado no JavaScript

function App() {
  // Array [valor, função de atualização do valor]
  // A criação de um Estado reflete nas alterções de interface
  return (
    <Routes />
  );
}

export default App;
