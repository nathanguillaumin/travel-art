import React from 'react';
import './App.css';
<<<<<<< HEAD
import Header from './components/Header';
import ButtonChoice from './components/ButtonChoice';

function App () {
  return (
    <div className='App'>
      <Header />
      <ButtonChoice />
    </div>
=======
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';

function App () {
  return (
    <Router>
      <div className='App'>
        <Main />
      </div>
    </Router>
>>>>>>> 2be4c1e7054c6997fbc2ade3019d3cf2b954fccb
  );
}

export default App;
