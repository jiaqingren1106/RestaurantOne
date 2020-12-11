import React from 'react';
import './Deals.css';
import { register, setRoute } from "../../redux/actions";
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';



import {
    BURGERKING, MCDONALDS,
    AWDES, SUBWAY, POPEYES, PIZZAHUT, TIMHORTONS,
    STARBUCKS,
    TACOBELL
} from "../../data/discription_constants";

import CouponGroup from '../../react-components/CouponGroup/CouponGroup';
import AW from "../../images/AW.png";
import BurgerKing from "../../images/burgerking.jpg";
import Mcdonald from "../../images/Mcdonald.png";
import PizzaHut from "../../images/pizzahut.jpg";
import Popeye from "../../images/popeye.jpg";
import StarBucks from "../../images/starbucks.jpg";
import TimHortons from "../../images/timhortons.jpg";
import TacoBell from "../../images/tacobell.jpg";
import Subway from "../../images/subway.jpg";

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


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


class Deals extends React.Component {
    state = {
        onSearch: false,
        restaurants: [
            { name: "BurgerKing", rating: "5", key: "1", image: BurgerKing, description: BURGERKING },
            { name: "McDonalds", rating: "4", key: "2", image: Mcdonald, description: MCDONALDS },
            { name: "AW", rating: "5", key: "3", image: AW, description: AWDES },

            { name: "Subway", rating: "5", key: "4", image: Subway, description: SUBWAY },
            { name: "Popeyes", rating: "5", key: "5", image: Popeye, description: POPEYES },
            { name: "PizzaHut", rating: "5", key: "6", image: PizzaHut, description: PIZZAHUT },

            { name: "TimHortons", rating: "5", key: "7", image: TimHortons, description: TIMHORTONS },
            { name: "StarBucks", rating: "5", key: "8", image: StarBucks, description: STARBUCKS },
            { name: "TacoBell", rating: "5", key: "9", image: TacoBell, description: TACOBELL }
        ],
        createPostAppear: false,
        newPostingMsg: "",
        postPic:null,
        warning:"",
        picMsg:"",
        searched: [],

    }

    

    setCreatePostAppear = (newAppear) => {
        this.setState({createPostAppear: newAppear})
    }
    setPostSendingMsg = (msg) => {
        this.setState({newPostingMsg: msg})
    }


    render() {
        const column = 4;

        let restaurants
        if (this.state.onSearch) {
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

        var CouponList;
        CouponList = (
            <div id="dealsInProfile">
                {cardgroups.map((index) => {
                    return <CouponGroup
                        restaurants={(restaurants).slice(column * index, index * column + column)} />

                })}
            </div>
        );

        const setRoute = (newRoute) => {
            let targetRoute = `/`
            if (!(newRoute=== "StartUp" || newRoute === "")){
                targetRoute = `${newRoute}`
            }

            this.props.history.push(targetRoute)
            this.props.setRoute(newRoute)
        }

        const fileSelectedHandler = (e) => {
            const file = e.target.files[0]

            this.setState({postPic: file})
            this.setState({warning: "upload img successfully"})
            this.setState({picMsg: ""})
           
        }

        return (
            <section className='SecondPage'>
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

                <form id="dealForm">
                    New coupon code:
                    <input/>

                    Expire Date:
                    <input/>

                    <input type="file"
                           id="makeDealFileUpload" name="avatar"
                           accept="image/png, image/jpeg" onChange={(e) => {fileSelectedHandler(e)}}/>

                    <Button variant="primary" onClick = {() => {
                        this.setPostSendingMsg("")
                        this.setState({createPostAppear: !this.state.createPostAppear})}}>
                        ADD
                    </Button>
                </form>


                {CouponList}
            </section>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deals);
