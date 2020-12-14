import React from 'react';
import Coupon from '../Coupon/Coupon';
import './CouponGroup.css';

import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';




class CouponGroup extends React.Component {

  render() {
    const restaurantcount = (this.props).coupons.length;

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
          image={(this.props.coupons)[index].image} 
          price={(this.props.coupons)[index].price} 
          name={(this.props.coupons)[index].name} 
          couponid={(this.props.coupons)[index].couponid}
          restid={this.props.restid}
          upper={this.props.upper}
          state={this.props.state}
          display={this.props.display}
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