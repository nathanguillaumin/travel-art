import React, { Component } from 'react';
import ArtWorks from '../pages/ArtWorks';

const ButtonChoice = (props) => {
  return (
    <div>
      <button onClick={<ArtWorks />} value={props.name} />
    </div>
  );
};

export default ButtonChoice;
