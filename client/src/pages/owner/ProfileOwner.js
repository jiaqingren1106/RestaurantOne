import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register, setRoute } from "../../redux/actions";

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import './ProfileOwner.css';

import { createUser } from '../../Action/userAction'
import "../../frontPages/SignIn.css"




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

class ProfileOwner extends React.Component {

    constructor(props) {
        super(props);
        this.state = { id: "" }
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

        const displayRestInfo = () => {
            return (<div >
                <div className="mt3">
                    <label className="db fw6 lh-copy f4 " >Restaurant Name</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"

                           onChange={(e) => {}}/>
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f4 " >Restaurant Description</label>
                    <textarea className="pa2 input-reset ba bg-transparent hover-bg-black  w-100 h5"

                           onChange={(e) => {}}/>
                </div>
                <div className="mt3 flex flex-row justify-between">
                    <label className="db fw6 lh-copy f4 " >Open Time:</label>
                    <textarea className="pa2 input-reset ba bg-transparent hover-bg-black  w-60 "

                              onChange={(e) => {}}/>
                </div>
            </div>)


        }

        return (
            <div id="main">
                <SideNav className="navBarProfile"
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

                <div className="updatProfileContainer">

                    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw8 center article-container
                shadow-5 signInContent signInBox " >

                        <main className="pa4 black-80">
                            <div className="measure center">
                                <div  className="ba b--transparent ph0 mh0">
                                    <legend className="f1 fw6 ph0 mh0 ">User Profile</legend>
                                    <div className="mt3">
                                        <label className="db fw6 lh-copy f4 " >Username</label>
                                        <input className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                                               value={""}
                                               onChange={(e) => {}}/>
                                    </div>
                                    <div className="mt3">
                                        <label className="db fw6 lh-copy f4 " >Password</label>
                                        <input className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                                               value={""}
                                               onChange={(e) => {}}/>
                                    </div>
                                    <div className="mv3">
                                        <label className="db fw6 lh-copy f4 " htmlFor="password">Email</label>
                                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black  w-100"

                                               onChange={(e) => {}}/>
                                    </div>
                                    {displayRestInfo()}
                                </div>
                                <div className="">
                                    <button className=" br2 bw2 b ph3 pv2 input-reset ba b--blue  bg-transparent grow pointer f6 dib"
                                            onClick={() => {}}
                                    > Update </button>
                                </div>
                            </div>
                        </main>
                    </article>
                </div>
            </div>
    );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileOwner);







