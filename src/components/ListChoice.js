import React, { Component } from 'react';
import ButtonChoice from './ButtonChoice';
import Themes from '../themes.json';


const ListChoice = (props) => {
  return (
    <div>
        {console.log({Themes})}
      {/* {Themes.map(element => <ButtonChoice key={element.departmentId} name={element.displayName} />)}; */}
    </div>
  );
};

export default ListChoice;
