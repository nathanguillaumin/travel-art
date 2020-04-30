import React from 'react';
import './paintingcards.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// const src = 'https://via.placeholder.com/150';
// const title = 'title';
// const year = 'year';
// const artist = 'artist';
// const country = 'country';
// const comments = 'comments PAGNE SUR ANIMAL CROSSING EN FAISANT SUDO RM -R /* POUR RESET SON ILE ET TOM NOOK (ET PAS HOOK)';

const PaintingsCards = (props) => {
  return (
    <Card className = 'painting-cards'>
      <Card.Img variant='top' src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        <span className='bold'>Artist:</span> {props.artist ? props.artist : props.creditLine}<br/>
        <span className='bold'>Date:</span>{props.date}<br/>
        <span className='bold'>Origin:</span>{props.country ? props.country : props.culture}
        </Card.Text>
        <Button href={props.link} variant='primary'>View more</Button>
      </Card.Body>
    </Card>
  );
};

export default PaintingsCards;
