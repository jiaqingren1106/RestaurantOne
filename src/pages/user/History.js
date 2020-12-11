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
// import './Postlist.css'


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
            history: [
                { postid: 0, date: "2010-9-10", comment: "really good, 10/10 would come again" },
                { postid: 1, date: "2010-9-10", comment: "really good, 10/10 would come again" },
                { postid: 2, date: "2010-9-10", comment: "really good, 10/10 would come again" },
                { postid: 4, date: "2010-9-10", comment: "really good, 10/10 would come again" }
            ],
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

        let historyList = (
            <div>
                {this.state.history.map((review) => {
                    return (
                        <div className={'reviewBlock'}>
                            <p id="history">
                                {"Date: " + review.date}
                            </p>
                            <p id="history">
                                {"Post ID: " + review.postid}
                            </p>

                            <p id="history">
                                {"Comments:  " + review.comment}
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

                        <NavItem eventKey="Profile" onClick={() => setRoute("ProfilePageUser")}>
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
                                posts
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


                <div id="profile">
                    <Row>
                        <Col>
                            {historyList}
                        </Col>
                    </Row>

                </div>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
