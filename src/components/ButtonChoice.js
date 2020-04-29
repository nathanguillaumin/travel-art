import React from 'react';
import { Button } from 'semantic-ui-react';
import ArtWorks from '../pages/ArtWorks';

const ButtonChoice = (props) => {
  return (
    <Button onClick={props.onClick}>{props.name}</Button>
  );
};

export default ButtonChoice;
