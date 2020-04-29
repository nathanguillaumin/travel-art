import React, { Component } from 'react';

const ButtonChoice = (props) => {
  return (
    <div className="buttonChoice">
      <button value={props.name} />
    </div>
  );
};

export default ButtonChoice;
