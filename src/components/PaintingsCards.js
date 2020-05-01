import React from 'react';
import './paintingcards.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const PaintingsCards = (props) => {
  return (
    <Card className='painting-cards'>
      <Card.Img variant='top' src={props.image} />
      <Card.Body>
        <Card.Title><h2 className='card-title'>{props.title}</h2></Card.Title>
        <Card.Text>
          <span className='bold'>Artist: </span>{props.artist ? props.artist : props.creditLine}<br/>
          <span className='bold'>Date: </span>{props.date}<br/>
          <span className='bold'>Origin: </span>{props.country ? props.country : props.culture}
        </Card.Text>
        <Button href={props.link} target="_blank" variant='primary'>View more</Button>
      </Card.Body>
    </Card>
  );
};

export default PaintingsCards;
