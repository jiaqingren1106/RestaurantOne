import React from 'react';
import { connect } from 'react-redux';
import { register, setRoute } from "../../redux/actions";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import "./Following.css"
import {getAllFollowingArray} from "../../Action/restaurantAction"


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

class Following extends React.Component {

    constructor(props) {
        super(props)
        const username = this.props.user.username
        const password = this.props.user.password
        this.state = {

            follows: [
            ],

        }

        getAllFollowingArray(props.user.follows, this)
    }

    render() {
        // const user = this.props.user;
        // const showPassword = ("*").repeat(user.password.length);

        const setRoute = (newRoute) => {
            let targetRoute = `/`
            if (!(newRoute === "StartUp" || newRoute === "")) {
                targetRoute = `${newRoute}`
            }

            this.props.history.push(targetRoute)
            this.props.setRoute(newRoute)
        }



        let followingList = (
            <div id="followingLsit">
                {this.state.follows.map((follows) => {
                    return (
                        <div className={'followingBlock'}>
                            <p id="followings">
                                {"Name: " + follows.name}
                                {/* <button id="unfollow">
                                    unfollow
                                </button> */}
                            </p>

                        </div>);
                })}
            </div>
        );


        return (
            <Container id='Profile'>
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

                        <NavItem eventKey="Profile" onClick={() => setRoute("ProfilePage")}>
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>

                            <NavText>
                                Profile
                            </NavText>
                        </NavItem>

                        <NavItem eventKey="posts" onClick={() => setRoute("History")}>
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>

                            <NavText onClick={() => setRoute("Postlist")} >
                                History
                            </NavText>
                        </NavItem>

                        <NavItem eventKey="followers" onClick={() => setRoute("Following")}>
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>

                            <NavText>
                                Followings
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>


                <div id="profile">
                    <Row>
                        <Col>
                            {followingList}
                        </Col>
                    </Row>

                </div>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Following);
