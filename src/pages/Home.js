import React from 'react';
import ListChoice from '../components/ListChoice';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';

function Home() {
  return (
    <div className='containerheader'>
        <div className='firstplan'>
          <div className='header'>
            <Header />
            <h2>Welcome on Travel Art Website</h2>
            <NavLink exact to='/' className='home' />
            <NavLink exact to='/ArtWorks/:id' className='ArtWorks'><ListChoice /></NavLink>
          </div>
        </div>
      </div>
  );
}

export default Home;
