import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render () {
    return (
      <div className='footer-copyright text-center py-3 footer-style'>© 2020 Copyright: By Wilders <i className='fas fa-heart coeur' />
        <a href='/'> Travel Art</a>
      </div>
    );
  }
}

export default Footer;
