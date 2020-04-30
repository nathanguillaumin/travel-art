import React from 'react';
import '../pages/paintingsCards.css';
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
    <Card id='infinite-list' style={{ width: '18rem' }}>
      <Card.Img variant='top' src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
        </Card.Text>
        <Button variant='primary'>View more</Button>
      </Card.Body>
    </Card>
  );
};

export default PaintingsCards;
