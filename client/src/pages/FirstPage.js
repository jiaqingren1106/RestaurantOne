import React, { useState, useEffect } from 'react';
import { register, setRoute } from "../redux/actions";
import { connect } from 'react-redux';
import './FirstPage.css';
import RestaurantGroups from '../react-components/RestaurantGroups/RestaurantGroups';
import {getRestaurants} from "../Action/restaurantAction"
import NavBar from '../react-components/NavBar/NavBar';



const mapStateToProps = (state) => {
    return {
        route: state.routeState.route,
        user: state.userState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (new_route) => dispatch(setRoute(new_route)),
        setUser: (user_obj) => dispatch(register(user_obj))
    }
}

class FirstPage extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            onSearch: false,
            restaurants: [
                // {name: "BurgerKing", rating: "5", id: "1", image_url: BurgerKing, description: BURGERKING, address:"", posts:[], reviews:[]},
                // {name: "McDonalds", rating: "4", id: "2", image_url: Mcdonald, description: MCDONALDS, address:"", posts:[], reviews:[] },
                // {name: "AW", rating: "5", id: "3", image_url: AW, description: AWDES, address:"", posts:[], reviews:[] },
    
                // {name: "Subway", rating: "5", id: "4", image_url: Subway, description: SUBWAY, address:"", posts:[], reviews:[] },
                // {name: "Popeyes", rating: "5", id: "5", image_url: Popeye, description: POPEYES, address:"", posts:[], reviews:[] },
                // {name: "PizzaHut", rating: "5", id: "6", image_url: PizzaHut, description: PIZZAHUT, address:"", posts:[], reviews:[] },
    
                // {name: "TimHortons", rating: "5", id: "7", image_url: TimHortons, description: TIMHORTONS, address:"", posts:[], reviews:[] },
                // {name: "StarBucks", rating: "5", id: "8", image_url: StarBucks, description: STARBUCKS, address:"", posts:[], reviews:[] },
                // {name: "TacoBell", rating: "5", id: "9", image_url: TacoBell, description: TACOBELL, address:"", posts:[], reviews:[] }
            ],
            searched: []
        };
        getRestaurants(this);
        console.log(props)
    }

    useMeWhenYouDoSearch = (props) => {
        let new_restaurant = []
        if (props.trim() === "") {
            this.setState({ onSearch: false })
        } else {
            let i = 0
            for (i; i < this.state.restaurants.length; i++) {
                if (this.state.restaurants[i].name.toUpperCase().includes(props.toUpperCase())) {
                    new_restaurant.push(this.state.restaurants[i])
                }
            }
            this.setState({ onSearch: true })
            this.setState({ searched: new_restaurant })
        }
    }

    useMeWhenClickedDashBoard = () => {
        this.setState({ onSearch: false })
    }

    


    render() {


        const column = 3;

        let restaurants
        if (this.state.onSearch){
            restaurants = this.state.searched
        } else {
            restaurants = this.state.restaurants
        }


        const restaurantLen = restaurants.length;
        const leftover = restaurantLen % column;
        var cardGroupLen;
        if (leftover === 0) {
            cardGroupLen = restaurantLen / column;
        } else {
            cardGroupLen = restaurantLen / column + 1;
        }


        let cardgroups = [];
        var i;
        for (i = 0; i < cardGroupLen; i++) {
            cardgroups.push(i);
        }

        var RestaurantList;
        RestaurantList = (
            <div id = "Restaurants">
                {cardgroups.map((index) => {
                    return <RestaurantGroups
                        restaurants={(restaurants).slice(column * index, index * column + column)} />
                })}
            </div>
        );



        return (
            <section className='FirstPage'>
                <NavBar onSearch={this.useMeWhenYouDoSearch} setSearched={this.useMeWhenClickedDashBoard}/>
                {RestaurantList}
            </section>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstPage);
