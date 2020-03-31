import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ButtonMain from './components/generic/button/button';
import Header from './components/header/header'

function App() {
  return (
    <div className="App">
     <Header/>
      <main className='App-main'>
      {/* <ButtonMain>Записаться</ButtonMain> */}
      </main>
    </div>
  );
}

export default App;
