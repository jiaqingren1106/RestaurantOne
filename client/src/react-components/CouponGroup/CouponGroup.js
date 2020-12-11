import React from 'react';
import Coupon from '../Coupon/Coupon';
import './CouponGroup.css';

import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';




class CouponGroup extends React.Component {

  render() {
    const restaurantcount = this.props.restaurants.length;

    let cardgroups = [];
    var i;
    for (i = 0; i < restaurantcount; i++) {
        cardgroups.push(i);
    }

    var CouponList;
    CouponList = (
      <CardGroup id="Coupon">
        {cardgroups.map((index) => {
          return <Coupon
          image={(this.props.restaurants)[index].image} 
          code={(this.props.restaurants)[index].code} 
          expire={(this.props.restaurants)[index].expire} 
          />
        })}
      </CardGroup>
    );
    

    return (
      <div className="couponGroup">
        {CouponList}
      </div>
    );
  }
}

export default CouponGroup;