import React from 'react';
import './Restaurant.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class Restaurant extends React.Component {
  render() {
    return (
      <Card id="restaurant1" className="restaurantCard">
        <Card.Img className="restaurantPic" variant="top" src={this.props.image} />
        <Card.Body className="restaurantBody">
          <Card.Title className="restaurantTitle">{this.props.name}</Card.Title>
          <Card.Text>
            {this.props.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Rating: {this.props.rating}</small>
        </Card.Footer>
      </Card>
    );
  }
}

export default Restaurant;



