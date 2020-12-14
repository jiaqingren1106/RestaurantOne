import React from 'react';
import { connect } from 'react-redux';
import { register, setRoute } from "../../redux/actions";
import NavBar from '../../react-components/NavBar/NavBar'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {setAndUpdateRest} from "../../Action/restaurantAction";
import {setAndUpdateUser} from "../../Action/userAction";

// import './ProfileUser.css';




const mql = window.matchMedia(`(min-width: 800px)`);


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

class ProfileUser extends React.Component {

    constructor(props) {
        super(props);
        const user = props.user
        this.state = {
            userType: user.userType,
            username: user.username,
            password: user.password,
            _id: user.id,
            email: user.email,
            restId: user.restaurant_id,
            openTime: "",
            restaurantName: "",
            restaurantDes: "",
            warning: ""
        }
    }

    handleUpDate = () => {
        let user_fields = ["userType", "username", "password", "_id", "email"]
        let result = true;
        for (const user_field in user_fields) {
            if (this.state[user_fields[parseInt(user_field)]] === "") {
                result = false
            }
        }
        if (!result) {
            this.setState({warning: "has unfilled input"})
        } else {
            this.setState({warning: "update successfully"})
            if (this.state.userType === "restaurant") {
                setAndUpdateRest(this, this.state.restId)
            }
            let new_targetUser = {
                username: this.state.username,
                userType: this.state.userType,
                password: this.state.password,
                id: this.state._id,
                email: this.state.email,
                images: this.props.user.images,
                restaurant_id: this.props.user.restaurant_id
            }

            this.props.setUser(new_targetUser)
            localStorage.setItem('userData', JSON.stringify(new_targetUser))
            setAndUpdateUser(this, this.state._id)
        }
    }
    render() {
        const setRoute = (newRoute) => {
            let targetRoute = `/`
            if (!(newRoute === "StartUp" || newRoute === "")) {
                targetRoute = `${newRoute}`
            }

            this.props.history.push(targetRoute)
            this.props.setRoute(newRoute)
        }

    return (
            <div id="main">
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

                            <NavText onClick={() => setRoute("History")} >
                                History
                            </NavText>
                        </NavItem>

                        <NavItem eventKey="followers" onClick={() => setRoute("Following")}>
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>

                            <NavText>
                                followers
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>

                <div className="updatProfileContainer">

                    <div className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw8 center article-container
                shadow-5 signInContent signInBox " >

                        <main className="pa4 black-80">
                            <div className="measure center">
                                <div  className="ba b--transparent ph0 mh0">
                                    <legend className="f1 fw6 ph0 mh0 ">User Profile</legend>
                                    <div className="mt3">
                                        <label className="db fw6 lh-copy f4 " >Username</label>
                                        <input className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                                               value={this.state.username}
                                               onChange={(e) => {this.setState({username:e.target.value})}}/>
                                    </div>
                                    <div className="mt3">
                                        <label className="db fw6 lh-copy f4 " >Password</label>
                                        <input className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                                               value={this.state.password}
                                               onChange={(e) => {this.setState({password: e.target.value})}}/>
                                    </div>
                                    <div className="mv3">
                                        <label className="db fw6 lh-copy f4 " htmlFor="password">Email</label>
                                        <input className=" pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                                               value={this.state.email}
                                               onChange={(e) => {this.setState({email: e.target.value})}}
                                        />
                                    </div>

                                </div>
                                <div className="">
                                    <button className=" br2 bw2 b ph3 pv2 input-reset ba b--blue  bg-transparent grow pointer f6 dib"
                                            onClick={this.handleUpDate}
                                    > Update </button>
                                </div>
                                <p className={this.state.warning.includes("input")? "i dark-red" : "i dark-green"}>
                                    {this.state.warning}
                                </p>
                            </div>
                        </main>
                    </div>
                </div>

            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUser);
