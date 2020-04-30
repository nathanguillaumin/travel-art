import React, { Component } from 'react';
import ButtonChoice from './ButtonChoice';
import axios from 'axios';
import './ButtonStyle.css';

const themes =
[
  {
    departmentId: 1,
    displayName: 'American Decorative Arts',
    class: 'Button1'
  },
  {
    departmentId: 5,
    displayName: 'Arts of Africa, Oceania, and the Americas',
    class: 'Button2'
  },
  {
    departmentId: 6,
    displayName: 'Asian Art',
    class: 'Button3'
  },
  {
    departmentId: 10,
    displayName: 'Egyptian Art',
    class: 'Button4'
  },
  {
    departmentId: 11,
    displayName: 'European Paintings',
    class: 'Button5'
  },
  {
    departmentId: 12,
    displayName: 'European Sculpture and Decorative Arts',
    class: 'Button6'

  },
  {
    departmentId: 13,
    displayName: 'Greek and Roman Art',
    class: 'Button7'
  },
  {
    departmentId: 14,
    displayName: 'Islamic Art',
    class: 'Button8'
  }
];

class ListChoice extends Component {
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

    this.setState({ dataResults: dataResults });
  }

  render () {
    return (
      <div className='div-buttons'>
        {themes.map(element => <ButtonChoice 
          className={element.class} 
          onClick={() => this.handleClick(element.displayName, element.departmentId)} 
          id={element.departmentId} 
          name={element.displayName} 
          key={element.departmentId} />)}
      </div>
    );
  }
}

export default ListChoice;
