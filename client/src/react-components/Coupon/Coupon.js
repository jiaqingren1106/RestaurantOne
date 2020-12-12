import React from 'react';
import './Coupon.css';

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../Restaurant/Restaurant.css'


class Coupon extends React.Component {
  render() {
    return (
      <Card id="coupon1" className="couponCard">
          <div className="imageButton" style={{height: "200px"}}>
              <Card.Img className="restaurantPic" variant="top" src={this.props.image} />
          </div>

        <Card.Footer className="couponFooter">
          <small className="text-muted">
          Code: {this.props.code}
          </small>
        </Card.Footer>

      <Card.Footer className="couponFooter">
          <small className="text-muted">
          Expired date: {this.props.expire}
          </small>
      </Card.Footer>

      </Card>
    );
  }
}

export default Coupon;



