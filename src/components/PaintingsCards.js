import React, { Component } from 'react';
import '../pages/paintingsCards.css';

const src = 'https://via.placeholder.com/150';
const title = 'title';
const year = 'year';
const artist = 'artist';
const country = 'country';
const comments = 'comments PAGNE SUR ANIMAL CROSSING EN FAISANT SUDO RM -R /* POUR RESET SON ILE ET TOM NOOK (ET PAS HOOK)';

class PaintingsCards extends Component {
  render () {
    return (
      <div className='paintingCard'>
        <img src={src} alt={title} className='imgArtist' />

        <div className='textDiv'>
          <div className='titleDiv'>
            <p>{title} - {year}</p>
            <p>{artist} - {country}</p>
          </div>

          <div className='commentDiv'>
            <p>{comments}</p>
          </div>

        </div>
      </div>
    );
  }
}

export default PaintingsCards;
