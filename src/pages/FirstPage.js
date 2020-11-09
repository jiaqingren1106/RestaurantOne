import React from 'react';
import './FirstPage.css';
import {BURGERKING, MCDONALDS,
    AWDES, SUBWAY, POPEYES,PIZZAHUT, TIMHORTONS,
STARBUCKS,
TACOBELL} from "../data/discription_constants";
import RestaurantGroups from '../react-components/RestaurantGroups/RestaurantGroups';


import AW from "../images/AW.png";
import BurgerKing from "../images/burgerking.jpg";
import Mcdonald from "../images/Mcdonald.png";
import PizzaHut from "../images/pizzahut.jpg";
import Popeye from "../images/popeye.jpg";
import StarBucks from "../images/starbucks.jpg";
import TimHortons from "../images/timhortons.jpg";
import TacoBell from "../images/tacobell.jpg";
import Subway from "../images/subway.jpg";
import NavBar from '../react-components/NavBar/NavBar';

class FirstPage extends React.Component {
    state = {
        onSearch: false,
        restaurants: [
            {name: "BurgerKing", rating: "5", key: "1", image: BurgerKing, description: BURGERKING},
            {name: "McDonalds", rating: "4", key: "2", image: Mcdonald, description: MCDONALDS },
            {name: "AW", rating: "5", key: "3", image: AW, description: AWDES },

            {name: "Subway", rating: "5", key: "4", image: Subway, description: SUBWAY },
            {name: "Popeyes", rating: "5", key: "5", image: Popeye, description: POPEYES },
            {name: "PizzaHut", rating: "5", key: "6", image: PizzaHut, description: PIZZAHUT },

            {name: "TimHortons", rating: "5", key: "7", image: TimHortons, description: TIMHORTONS },
            {name: "StarBucks", rating: "5", key: "8", image: StarBucks, description: STARBUCKS },
            {name: "TacoBell", rating: "5", key: "9", image: TacoBell, description: TACOBELL }
        ],
        searched: []
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
        // if (new_restaurant.length === 0){
        //     this.setState({ onSearch: false })
        // }

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
                        key={0}
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

export default FirstPage;
