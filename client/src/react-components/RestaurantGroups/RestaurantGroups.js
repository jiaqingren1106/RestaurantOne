import React from 'react';
import Restaurant from '../Restaurant/Restaurant';
import './RestaurantGroups.css';

import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';





class RestaurantGroups extends React.Component {


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
          let rest_image = ""
          if ((this.props.restaurants)[index].image.length != 0) {
            rest_image = (this.props.restaurants)[index].image[0]
          }
          return <Restaurant
          image={rest_image} 
          description={(this.props.restaurants)[index].description} 
          name={(this.props.restaurants)[index].name} 
          rating={(this.props.restaurants)[index].rating}
          id={(this.props.restaurants)[index]._id}/>
        })}
      </CardGroup>
    );
    

    return (
      <div className="restaurantGroup">
        {RestaurantList}
      </div>
    );
  }
}

export default RestaurantGroups;