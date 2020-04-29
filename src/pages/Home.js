import React from 'react';
import ListChoice from '../components/ListChoice';
import { NavLink } from 'react-router-dom';

function Home () {
  return (
    <div>
      <NavLink exact to='/' className='home' />
      <h1>Welcome on Travel Art Website</h1>
      <NavLink exact to='/art-works' className='ArtWorks'><ListChoice /></NavLink>
    </div>
  );
}

export default Home;
