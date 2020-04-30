import React from 'react';
import ListChoice from '../components/ListChoice';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import './Home';

function Home() {
  return (
    <div>

      <div className='header'>
        <Header />
        <h2>Welcome on Travel Art Website</h2>
        <NavLink exact to='/' className='home' />
        <NavLink exact to='/art-works/:id' className='ArtWorks'><ListChoice /></NavLink>
      </div>
    </div>
  );
}

export default Home;
