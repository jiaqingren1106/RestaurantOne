import React from 'react';
import './Menus.css';

import MenuGroup from '../../react-components/menuGroup/MenuGroup';


import { register, setRoute } from "../../redux/actions";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";


import burger1 from "../../images/Mcdonald-2.png";
import burger2 from "../../images/Mcdonald-3.png";
import burger3 from "../../images/Mcdonald-4.png";
import burger4 from "../../images/Mcdonald-5.png";
import burger5 from "../../images/popeye.jpg";
import burger6 from "../../images/pizzahut.jpg";
import burger7 from "../../images/burger.jpg";
import burger8 from "../../images/user-review-1.jpg";
import burger9 from "../../images/subway.jpg";

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const mapStateToProps = (state) => {
    return {
        route: state.route
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (new_route) => dispatch(setRoute(new_route)),
        setUser: (user_obj) => dispatch(register(user_obj))
    }
}

class Menus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    }


    render() {
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

        var MenuItemList;
        MenuItemList = (
            <div id='MenuInProfile'>
                {cardgroups.map((index) => {
                    return <MenuGroup
                        key={0}
                        MenuItems={(this.state.MenuItems).slice(row * index, index * row + row)} />
                })}
            </div>
        );


        return (
            <section className='Menu'>

                <SideNav
                    onSelect={(selected) => {
                        // Add your code here
                    }}>

                    <SideNav.Toggle />

                    <SideNav.Nav defaultSelected="home">

                        <NavItem eventKey="Home" onClick={() => setRoute("FirstPage")}>
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>

                            <NavText>
                                Home
                            </NavText>
                        </NavItem>

                        <NavItem eventKey="Profile" onClick={() => setRoute("ProfilePageOwner")}>
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>

                            <NavText>
                                Profile
                            </NavText>
                        </NavItem>

                        <NavItem eventKey="posts" onClick={() => setRoute("Postlist")}>
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>

                            <NavText onClick={() => setRoute("Postlist")} >
                                posts
                            </NavText>
                        </NavItem>

                        <NavItem eventKey="followers" onClick={() => setRoute("Followers")}>
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>

                            <NavText>
                                followers
                            </NavText>
                        </NavItem>

                        <NavItem eventKey="menus" onClick={() => setRoute("Menus")}>
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>

                            <NavText>
                                menus
                            </NavText>
                        </NavItem>

                        <NavItem eventKey="deal" onClick={() => setRoute("Deals")}>
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>

                            <NavText>
                                deal
                            </NavText>
                        </NavItem>

                    </SideNav.Nav>
                </SideNav>

                <form id="menuForm">
                    new item:
                    <input/>

                    Price:
                    <input/>

                    <button>
                        Add
                    </button>
                </form>

                {MenuItemList}
            </section>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Menus));
