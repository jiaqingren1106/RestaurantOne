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
        coupon: [
            { image: BurgerKing, code: "2341535245642453", expire: "2020" },
            { image: Mcdonald, code: "dfdfsggfgb", expire: "2020" },
            { image: AW, code: "dfasfsdsd", expire: "qy53  rGER" },
            { image: Subway, code: "KTYRHTEGRW", expire: "2020" },
            { image: Popeye, code: "42IOFH33F", expire: "2020" },
            { image: PizzaHut, code: "REGGQWR", expire: "2020" },

            { image: TimHortons, code: "34TQGTQ43", expire: "2020" },
            { image: StarBucks, code: "EQRGERQER", expire: "2020" },
            { image: TacoBell, code: "QERGERGQ", expire: "2020" }
        ],
    }



    setCreatePostAppear = (newAppear) => {
        this.setState({ createPostAppear: newAppear })
    }
    setPostSendingMsg = (msg) => {
        this.setState({ newPostingMsg: msg })
    }


    render() {
        const column = 4;


        let coupon = this.state.coupon



        const restaurantLen = coupon.length;
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
                        restaurants={(coupon).slice(column * index, index * column + column)} />

                })}
            </div>
        );

        const setRoute = (newRoute) => {
            let targetRoute = `/`
            if (!(newRoute === "StartUp" || newRoute === "")) {
                targetRoute = `${newRoute}`
            }

            this.props.history.push(targetRoute)
            this.props.setRoute(newRoute)
        }

        const fileSelectedHandler = (e) => {
            const file = e.target.files[0]

            this.setState({ postPic: file })
            this.setState({ warning: "upload img successfully" })
            this.setState({ picMsg: "" })

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
                    <input />

                    Expire Date:
                    <input />

                    <input type="file"
                        id="makeDealFileUpload" name="avatar"
                        accept="image/png, image/jpeg" onChange={(e) => { fileSelectedHandler(e) }} />

                    <Button variant="primary" onClick={() => {
                        this.setPostSendingMsg("")
                        this.setState({ createPostAppear: !this.state.createPostAppear })
                    }}>
                        ADD
                    </Button>
                </form>


                {CouponList}
            </section>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deals);
