import React, { Component } from 'react';
import ButtonStyle from './ButtonStyle.css';

class ButtonChoice extends Component {
  render () {
    return (
      <div>
        <button className="Button1">American Decorative Art</button>
        <button className="Button2">Arts of Africa, Oceania, and the Americas</button>
        <button className="Button3">Asian Art</button>
        <button className="Button4">Egyptian Art</button>
        <button className="Button5">European Painting</button>
        <button className="Button6">European Sculpture and Decorative Arts</button>
        <button className="Button7">Greek and Roman Art</button>
      </div>
    );
  }
}


export default ButtonChoice;
