import React from 'react';
import './Coupon.css';

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';




class Coupon extends React.Component {
  render() {
    return (
      <Card id="coupon1" className="couponCard">
        <Card.Img className="couponPic" variant="top" src={this.props.image} />
        <Card.Footer className="couponFooter">
          <small className="text-muted">Rating: {this.props.rating}</small>
        </Card.Footer>
      </Card>
    );
  }
}

export default Coupon;



