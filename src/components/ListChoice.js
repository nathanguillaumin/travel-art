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

class ListChoice extends React.Component {
  constructor () {
    super();
    this.state = {
      departmentId: '',
      departmentName: '',
      dataResults: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (name, id) {
    this.setState(() => ({ departmentName: name, departmentId: id }), () => this.fetchOnClick(this.state.departmentId));
  }

  async fetchOnClick (elementID) {
    const searchUrl = `https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${elementID}&q=cat`;
    const objectIds = await axios.get(searchUrl).then(res => res.data.objectIDs);

    const dataResults = await Promise.all(objectIds.slice(0, 10).map(id => axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`).then(res => res.data)));

    this.setState({dataResults: dataResults})
}

  render () {
    return (
      <div>
        {themes.map(element => <ButtonChoice dataResults={this.state.dataResults} onClick={() => this.handleClick(element.displayName, element.departmentId)} id={element.departmentId} name={element.displayName} />)}
      
        {this.state.dataResults ? <h1></h1> : ''}
      </div>
    );
  }
}

export default ListChoice;
