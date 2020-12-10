import React from 'react';
import './Restaurant.css';
import {connect} from 'react-redux'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {register, setRoute} from "../../redux/actions";
import {withRouter, Link} from "react-router-dom";
import {getImageInNav} from "../../Action/imageAction";



const mapStateToProps = (state) => {
    return {
        route: state.route
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (new_route)=> dispatch(setRoute(new_route)),
        setUser: (user_obj) => dispatch(register(user_obj))
    }
}


class Restaurant extends React.Component {
  constructor(props){
    super(props);
    this.state = {image: ""}

    getImageInNav(this, props.image)

  }
  render() {
      const setRoute = (newRoute, id) => {
          let targetRoute = `/`
          if (!(newRoute=== "StartUp" || newRoute === "")){
              targetRoute = `${newRoute}`
          }
          this.props.setRoute(newRoute)
          this.props.history.push(targetRoute, id)
      }

      return (
      <Card id="restaurant1" className="restaurantCard">
        <Link 
        to={{ 
          pathname: "/RestaurantPage", 
          state: this.props.id 
         }}
        className="imageButton" 
        onClick={() => setRoute("RestaurantPage", this.props.id)}>
          <Card.Img className="restaurantPic" variant="top" src={this.state.image} />

        </Link>
        <Card.Body id="cardBody">
          <Card.Title id="restaurantTitle">{this.props.name}</Card.Title>
          <div id="restaurantDescri">
              {this.props.description}
          </div>
        </Card.Body>
        <Card.Footer id={"rating"}>
         Rating: {this.props.rating}
        </Card.Footer>
      </Card>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Restaurant));
