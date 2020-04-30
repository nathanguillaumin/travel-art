import React from 'react';
import './ButtonStyle.css';
import ArtWorks from '../pages/ArtWorks';
import { Link } from 'react-router-dom';

const ButtonChoice = (props) => {
  return (
    <div>
      <Link to={`/art-works/${props.id}`}>
        <button className={props.className} value={props.name}>{props.name}</button>
      </Link>
    </div>
  );
};

export default ButtonChoice;
