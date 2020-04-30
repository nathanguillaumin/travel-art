import React from 'react';
import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  return (
    <Router>
      <div className='App'>
        <Main />
      </div>
    </Router>
  );
}

export default App;
