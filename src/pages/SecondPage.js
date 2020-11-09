import React from 'react';
import './SecondPage.css';

import Advertisment from '../react-components/Advertisment/Advertisment';
import CouponGroup from '../react-components/CouponGroup/CouponGroup';


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



class SecondPage extends React.Component {
    state = {
        restaurants : [
            {name: "BergurKing", rating: "5", key: "1", image: BurgerKing, description: "aba aba"},
            {name: "McDonalds", rating: "4", key: "2", image: Mcdonald, description: "aba aba"},
            {name: "AW", rating: "5", key: "3", image: AW, description: "aba aba"},

            {name: "Subway", rating: "5", key: "4", image: Subway, description: "aba aba"},
            {name: "Popeye", rating: "5", key: "5", image: Popeye, description: "aba aba"},
            {name: "PizzaHut", rating: "5", key: "6", image: PizzaHut, description: "aba aba"},

            {name: "TimHortons", rating: "5", key: "7", image: TimHortons, description: "aba aba"},
            {name: "StarBucks", rating: "5", key: "8", image: StarBucks, description: "aba aba"},
            {name: "TacoBell", rating: "5", key: "9", image: TacoBell, description: "aba aba"}
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

        var CouponList;
        CouponList = (
            <div>
              {cardgroups.map((index) => {
                return <CouponGroup
                restaurants={(this.state.restaurants).slice(row*index,index*row+row)}/>
              })}
            </div>
          );

        return (
        <section className='SecondPage'>
            <NavBar />
            <Advertisment />
            {CouponList}
           
        </section>
        );
    }
}

export default SecondPage;
