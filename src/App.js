import React from 'react';
import './App.css';
import ListChoice from './components/ListChoice';

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <ListChoice onClick={this.fetchOnClick} />
      </div>
    );
  }
}

export default App;
