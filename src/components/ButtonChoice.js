import React from 'react';
import ArtWorks from '../pages/ArtWorks';
import { Link } from 'react-router-dom';

const ButtonChoice = (props) => {
  return (
    <Link to={`/art-works/${props.id}`}>
      <button onClick={<ArtWorks />} value={props.name}>{props.name}</button>
    </Link>
  );
};

export default ButtonChoice;
