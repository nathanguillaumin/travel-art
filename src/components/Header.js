import React, { Component } from 'react';
import './Headerstyle.css';
import logo from '../images/favicon.png';

class Header extends Component {
  render () {
    return (
      <div className='header-div'>
        <h1>TRAVEL-ART</h1>
        <img className='logo-travel-art' src={logo} alt='logo-travel-art' />
      </div>
    );
  }
}

export default Header;
