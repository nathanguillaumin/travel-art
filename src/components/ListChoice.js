import React, { Component } from 'react';
import ButtonChoice from './ButtonChoice';

const themes =
[
  {
    departmentId: 1,
    displayName: 'American Decorative Arts'
  },
  {
    departmentId: 5,
    displayName: 'Arts of Africa, Oceania, and the Americas'
  },
  {
    departmentId: 6,
    displayName: 'Asian Art'
  },
  {
    departmentId: 10,
    displayName: 'Egyptian Art'
  },
  {
    departmentId: 11,
    displayName: 'European Paintings'
  },
  {
    departmentId: 12,
    displayName: 'European Sculpture and Decorative Arts'
  },
  {
    departmentId: 13,
    displayName: 'Greek and Roman Art'
  },
  {
    departmentId: 14,
    displayName: 'Islamic Art'
  }
];

const ListChoice = (props) => {
  return (
    <div>
      {themes.map(element => <ButtonChoice name={element.displayName} />)}
    </div>
  );
};

export default ListChoice;
