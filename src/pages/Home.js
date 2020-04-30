import React from 'react';
import ListChoice from '../components/ListChoice';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

function Home () {
  return (
    <div className='div-home'>
      <div className='header'>
        <Header />
        <h2>Welcome on Travel Art Website</h2>
        <NavLink exact to='/' className='home' />
        <ListChoice />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
