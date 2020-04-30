import React from 'react';
import './ButtonStyle.css';
import { Link } from 'react-router-dom';

const ButtonChoice = (props) => {
  return (
      <Link to={`/art-works/${props.id}`}>
        <button className={props.className} value={props.name}>{props.name}</button>
      </Link>
  );
};

export default ButtonChoice;
