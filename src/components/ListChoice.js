import React, { Component } from 'react';
import ButtonChoice from './ButtonChoice';
import axios from 'axios';

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

getArtWork = () => {
  const 
  const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=&{departmentId}`;
    axios.get(url)
      .then(res => res.data)
      .then(data => {
      });
  }
}

const ListChoice = (props) => {
  return (
    <div>
      {themes.map(element => <ButtonChoice name={element.displayName} /> )}
    </div>
  );
};

export default ListChoice;