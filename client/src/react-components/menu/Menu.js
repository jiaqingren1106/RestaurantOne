import React, { useEffect, useReducer } from 'react';
// import '../../pages/owner/Menus.css';
import './Menu.css';

import MenuGroup from '../menuGroup/MenuGroup';
import { register, setRoute } from "../../redux/actions";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { getRestaurantMenu } from "../../Action/restaurantAction"
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const mapStateToProps = (state) => {
    return {
        route: state.route,
        user: state.userState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (new_route) => dispatch(setRoute(new_route)),
        setUser: (user_obj) => dispatch(register(user_obj))
    }
}

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MenuItems: [],
            newItem: {
                name: "",
                image: null,
                price: ""
            },
            warning: "",
            restaurantId: this.props.user.restaurant_id
        }

        getRestaurantMenu(this, this.props.user.restaurant_id)


    }



    render() {
        console.log(this.state)

        const setRoute = (newRoute, id) => {
            let targetRoute = `/`
            if (!(newRoute === "StartUp" || newRoute === "")) {
                targetRoute = `${newRoute}`
            }
            this.props.setRoute(newRoute)
            this.props.history.push(targetRoute, id)
        }


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

        const updateState = (newMenuItems) => {
            this.setState({ MenuItems: newMenuItems })
        }

        var MenuItemList;
        MenuItemList = (
            <div id='MenuInProfile'>
                {cardgroups.map((index) => {
                    return <MenuGroup
                        MenuItems={(this.state.MenuItems).slice(row * index, index * row + row)} restid={this.state.restaurantId} upper={updateState} state={this.state} display={false} />
                })}
            </div>
        );




        return (
            <section className='Menu'>
                <h1 className="f3 f2-m f1-l fw2 near-white mv3 center-l">
                    Menu
                </h1>
                <Link
                    id="back"
                    onClick={() => setRoute("RestaurantPage", this.props.location.state)}
                    to={{
                        pathname: "/RestaurantPage",
                        state: this.props.location.state
                    }}
                >
                    back
                </Link>

                {MenuItemList}

            </section>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Menu));
