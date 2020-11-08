import React from 'react';
import './AdminPage.css';

import Header from '../react-components/Header/Header';
import AccountBar from '../react-components/AccountBar/AccountBar';
import Advertisment from '../react-components/Advertisment/Advertisment';
import SearchBar from '../react-components/SearchBar/SearchBar';
import RestaurantGroups from '../react-components/RestaurantGroups/RestaurantGroups';
import SideBar from '../react-components/SideBar/SideBar';


import AW from "../images/AW.png";
import BurgerKing from "../images/burgerking.jpg";
import Mcdonald from "../images/Mcdonald.png";
import PizzaHut from "../images/pizzahut.jpg";
import Popeye from "../images/popeye.jpg";
import StarBucks from "../images/starbucks.jpg";
import TimHortons from "../images/timhortons.jpg";
import TacoBell from "../images/tacobell.jpg";
import Subway from "../images/subway.jpg";
import { NavBar } from '../react-components/NavBar/NavBar';


class AdminPage extends React.Component {
    state = {
        users : [
            {id: "1", name: "Alan", email: "12345@gmail.com", status: "banned"},
            {id: "2", name: "Yinka", email: "678910@gmail.com", status: "banned"},
            {id: "3", name: "Yuan", email: "abcde@gmail.com", status: "banned"},
            {id: "4", name: "Patric", email: "ghjterw@gmail.com", status: "banned"}
        ]
    }

    render() {
        const row = 3;

        const restaurantLen = this.state.restaurants.length;
        const leftover = restaurantLen % row;
        var cardGroupLen;
        if (leftover === 0) {
            cardGroupLen = restaurantLen / row;
        } else {
            cardGroupLen = restaurantLen / row + 1;
        }

        
        let cardgroups = [];
        var i;
        for (i = 0; i < cardGroupLen; i++) {
            cardgroups.push(i);
        }

        var RestaurantList;
        RestaurantList = (
            <div>
              {cardgroups.map((index) => {
                return <RestaurantGroups
                restaurants={(this.state.restaurants).slice(row*index,index*row+row)}/>
              })}
            </div>
          );
        
        

        return (
        <section className='FirstPage'>
            <NavBar />
            {RestaurantList}
           
        </section>
        );
    }
}

export default AdminPage;
