import React from 'react';
import ListChoice from '../components/ListChoice';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';

function Home () {
  return (
    <div>
      <Header />
      <NavLink exact to='/' className='home' />
      <h2>Welcome on Travel Art Website</h2>
      <NavLink exact to='/art-works/:id' className='ArtWorks'><ListChoice /></NavLink>
    </div>
  );
}

export default Home;
