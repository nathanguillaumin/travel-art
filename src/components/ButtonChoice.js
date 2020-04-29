import React from 'react';
import ArtWorks from '../pages/ArtWorks';
import { Link } from 'react-router-dom';

const ButtonChoice = (props) => {
  return (
    <Link to={`/art-works/${props.id}`}>
      <button onClick={<ArtWorks />} value={props.name} />
    </Link>
  );
};

export default ButtonChoice;
