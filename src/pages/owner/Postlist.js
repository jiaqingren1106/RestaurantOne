import React from 'react';
import { connect } from 'react-redux';
import { register, setRoute } from "../../redux/actions";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import MakePost from "../../react-components/MakePost/MakePost";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './Postlist.css'


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

class PostList extends React.Component {

    constructor(props) {
        super(props)
        // const username = this.props.user.username
        // const password = this.props.user.password
        this.state = {
            post: [
                { postid: 0, date: "2010-9-10", content: "introduce new burger" },
                { postid: 1, date: "2010-9-10", content: "introduce new fries" },
                { postid: 2, date: "2010-9-10", content: "introduce new coke" },
                { postid: 4, date: "2010-9-10", content: "introduce new coffee" }
            ],
            createPostAppear: false
        }
    }

    render() {
        const setRoute = (newRoute) => {
            let targetRoute = `/`
            if (!(newRoute=== "StartUp" || newRoute === "")){
                targetRoute = `${newRoute}`
            }

            this.props.history.push(targetRoute)
            this.props.setRoute(newRoute)
        }

        let postList = (
            <div id="profilePage">
                {this.state.post.map((post) => {
                    return (
                        <div className={'postBlock'}>
                            <p id="history">
                                {"Date: " + post.date}
                            </p>
                            <p id="history">
                                {"Post ID: " + post.postid}
                            </p>

                            <p id="history">
                                {"Content:  " + post.content}
                            </p>

                         </div>);
                        // <Card>
                        //     <Card.Header>Post ID: {post.postid}</Card.Header>
                        //     <Card.Body class={'profilecard'}>
                        //         <Card.Title >Date: {post.date}</Card.Title>
                        //         <Card.Text>
                        //         Content:  {post.content}
                        //         </Card.Text>
                        //         <Button variant="primary">Edit</Button>
                        //         <Button variant="danger">Delete</Button>
                        //     </Card.Body>
                        // </Card>
                })}
            </div>
        );

        return (
            <div>
                <SideNav className = "navBarProfile"
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

                <div id="profiletitle">
                    <h1>Restaurant Posts</h1>
                </div>

                <div id="profileContainer">
                    {postList}
                </div>
                <div id="profilenewpost">
                    <Button variant="primary" onClick = {() => this.setState({createPostAppear: !this.state.createPostAppear})}>
                        {this.state.createPostAppear? "Exit Create Post": "Create Post"}</Button>
                </div>

                {this.state.createPostAppear? (<div id="createPostContainer">
                    <div style={{height: "500px", width: "500px"}}>
                        <MakePost/>
                    </div>
                </div>):null}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
