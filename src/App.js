import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ButtonMain from './components/generic/button/button';
import Header from './components/header/header';
import Main from './components/main/main'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
