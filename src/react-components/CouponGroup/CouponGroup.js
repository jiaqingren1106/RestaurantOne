import React from 'react';
import Coupon from '../Coupon/Coupon';
import './CouponGroup.css';

import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';




class CouponGroup extends React.Component {

  render() {
    const restaurantcount = this.props.restaurants.length;

    let cardgroups = [];
    var i;
    for (i = 0; i < restaurantcount; i++) {
        cardgroups.push(i);
    }

    var RestaurantList;
    RestaurantList = (
      <CardGroup>
        {cardgroups.map((index) => {
          return <Coupon
          image={(this.props.restaurants)[index].image} 
          description={(this.props.restaurants)[index].description} 
          name={(this.props.restaurants)[index].name} 
          rating={(this.props.restaurants)[index].rating}/>
        })}
      </CardGroup>
    );
    

    return (
      <div className="couponGroup">
        {RestaurantList}
      </div>
    );
  }
}

export default CouponGroup;