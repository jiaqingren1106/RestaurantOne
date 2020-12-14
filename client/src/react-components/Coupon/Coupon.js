import React from 'react';
import './Coupon.css';

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../Restaurant/Restaurant.css'
import { updateRestCoupon } from "../../Action/restaurantAction";



class Coupon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { couponid: props.couponid, restid: props.restid, upper: props.upper, data: props.state }
    console.log(props)
  }
  render() {
    const setRoute = (newRoute) => {
      let targetRoute = `/`
      if (!(newRoute === "StartUp" || newRoute === "")) {
        targetRoute = `${newRoute}`
      }

      this.props.history.push(targetRoute)
      this.props.setRoute(newRoute)
    }
    const deleteCoupon = () => {
      let changed = this.state.data.couponItems;
      console.log(changed)
      let target = null;
      for (let i = 0; i < changed.length; i++) {
        if (changed[i].couponid === this.state.couponid) {
          target = i;
        }
      }
      if (target != null) {
        changed.splice(target, 1);
        console.log(changed)
        this.state.upper(changed)
        updateRestCoupon(this.state.couponid, this.state.restid, this)
      }
    }
    let show = ""
    if (this.props.display != false){
      show = <i onClick={deleteCoupon} className="fas fa-times absolute dark-red  mt1 ml2 delete-icon" />

    }
    return (
      <Card id="coupon1" className="couponCard">
        <div className="imageButton" style={{ height: "200px" }}>
          {show}
          <Card.Img className="restaurantPic" variant="top" src={this.props.image} />
        </div>

        <Card.Footer className="couponFooter">
          <small className="text-muted">
            {this.props.name}
          </small>
        </Card.Footer>

        <Card.Footer className="couponFooter">
          <small className="text-muted">
            {this.props.price}
          </small>
        </Card.Footer>

      </Card>
    );
  }
}

export default Coupon;



