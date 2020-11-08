import React from 'react';
import './Restaurant.css';
import {connect} from 'react-redux'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {register, setRoute} from "../../redux/actions";


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
  render() {
      const setRoute = this.props.setRoute

    return (
      <Card id="restaurant1" className="restaurantCard">
        <button onClick={() => setRoute("RestaurantPage")}>
          <Card.Img className="restaurantPic" variant="top" src={this.props.image} />

        </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);



