import React from 'react';
import './Menu.css';

import MenuGroup from '../menuGroup/MenuGroup';
import NavBar from '../../react-components/NavBar/NavBar';
import {register, setRoute} from "../../redux/actions";
import {connect} from "react-redux";


import burger1 from "../../images/Mcdonald-2.png";
import burger2 from "../../images/Mcdonald-3.png";
import burger3 from "../../images/Mcdonald-4.png";
import burger4 from "../../images/Mcdonald-5.png";
import burger5 from "../../images/popeye.jpg";
import burger6 from "../../images/pizzahut.jpg";
import burger7 from "../../images/burger.jpg";
import burger8 from "../../images/user-review-1.jpg";
import burger9 from "../../images/subway.jpg";

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

class Menu extends React.Component {
    state = {
        MenuItems: [
            { name: "Bergur", rating: "5", key: "1", image: burger1, price: "10.0$" },
            { name: "BigMac", rating: "4", key: "2", image: burger2, price: "10.0$" },
            { name: "Chicken Nugget", rating: "5", key: "3", image: burger3, price: "10.0$" },

            { name: "Fries", rating: "5", key: "4", image: burger4, price: "10.0$" },
            { name: "Chicken Sandvich", rating: "5", key: "5", image: burger5, price: "10.0$" },
            { name: "Pizza", rating: "5", key: "6", image: burger6, price: "10.0$" },

            { name: "3 burger", rating: "5", key: "7", image: burger7, price: "10.0$" },
            { name: "1 burger", rating: "5", key: "8", image: burger8, price: "10.0$" },
            { name: "Subway", rating: "5", key: "9", image: burger9, price: "10.0$" }
        ]
    }

    useMeWhenOnClick = (pageNumber) => {
        this.setState({ 
            page: pageNumber
        })
    }


    render() {
        const setRoute = this.props.setRoute
        const row = 5;

        const MenuItemLen = this.state.MenuItems.length;
        const leftover = MenuItemLen % row;
        var cardGroupLen;
        if (leftover === 0) {
            cardGroupLen = MenuItemLen / row;
        } else {
            cardGroupLen = MenuItemLen / row + 1;
        }


        let cardgroups = [];
        var i;
        for (i = 0; i < cardGroupLen; i++) {
            cardgroups.push(i);
        }

        var MenuItemList;
        MenuItemList = (
            <div className={'menu'}>
                {cardgroups.map((index) => {
                    return <MenuGroup
                        key={0}
                        MenuItems={(this.state.MenuItems).slice(row * index, index * row + row)} />
                })}
            </div>
        );



        return (
            <section className='Menu'>
                <button id="back" onClick={() => setRoute("RestaurantPage")}>
                    back
                </button>
                {MenuItemList}
            </section>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
