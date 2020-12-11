import React from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import { register, setRoute } from "../redux/actions";
import NavBar from '../react-components/NavBar/NavBar'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
        super(props)
        const username = this.props.user.username
        const password = this.props.user.password
        this.state = {
            onSearch: false,
            isEdit: false,

            isPost: false,
            isHistory: false,

            isFollowing: false,
            isFollower: false,
            
            updateUsername: username,
            updatePassword: password,

            history: [
                { postid: 0, date: "2010-9-10", comment: "really good, 10/10 would come again" },
                { postid: 1, date: "2010-9-10", comment: "really good, 10/10 would come again" },
                { postid: 2, date: "2010-9-10", comment: "really good, 10/10 would come again" },
                { postid: 4, date: "2010-9-10", comment: "really good, 10/10 would come again" }
            ],
            following: [
                { name: "BergurKing", rating: "5", key: "1" },
                { name: "McDonalds", rating: "4", key: "2" },
                { name: "AW", rating: "5", key: "3" },

                { name: "Subway", rating: "5", key: "4" },
                { name: "Popeye", rating: "5", key: "5" },
                { name: "PizzaHut", rating: "5", key: "6" },

                { name: "TimHortons", rating: "5", key: "7" },
                { name: "StarBucks", rating: "5", key: "8" },
                { name: "TacoBell", rating: "5", key: "9" }
            ],
        }
    }
    useMeWhenClickedDashBoard = () => {
        this.setState({ onSearch: false })
    }

  
  
    showFollowingInput() {
        if (this.state.isFollowing) {
            this.setState({ isFollowing: false });
        } else {
            this.setState({ isFollowing: true });
        }
    }

    showHistoryInput() {
        if (this.state.isHistory) {
            this.setState({ isHistory: false });
        } else {
            this.setState({ isHistory: true });
        }
    }

    

    onSubmit() {
        const user = this.props.user;
        if (this.state.updateUsername === "" || this.state.updatePassword === "") {
            alert("Username or Password is Empty");
            return;
        }
        this.props.setUser({
            username: this.state.updateUsername,
            password: this.state.updatePassword,
            userType: user.userType,
        })

        this.closeEdit();

        return;
    }

    closeEdit() {
        const user = this.props.user;
        this.setState({
            isEdit: false,
            updateUsername: user.username,
            updatePassword: user.password
        });
        this.setState({ isEdit: false });
        return;
    }

    showEditInput() {
        this.setState({ isEdit: true });
    }

    render() {
        const user = this.props.user;
        const showPassword = ("*").repeat(user.password.length);

    

        const form = (
            <Form>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter new Username"
                        value={this.state.updateUsername}
                        onChange={(e) => { this.setState({ updateUsername: e.target.value }) }}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={this.state.updatePassword}
                        onChange={(e) => { this.setState({ updatePassword: e.target.value }) }}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your password with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" block onClick={() => { this.onSubmit() }}>
                    Submit
                </Button>
                <Button variant="danger" block onClick={() => { this.closeEdit() }}>
                    Cancel
                </Button>
            </Form>
        );

      
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

    
        let followingList = (
            <div>
                {this.state.following.map((following) => {
                    return (
                        <div className={'reviewBlock'}>
                            <p id="followings">
                                {"Name: " + following.name}
                            </p>
                            <p id="followings">
                                {"Rating: " + following.rating}
                            </p>
                        </div>);
                })}
            </div>
        );

        const nothing = (<br />);

        let rendering = nothing;
        if (this.state.isEdit) {
            rendering = form;
        } else {
            rendering = nothing;
        }


        return (
            <Container id='Profile'>
                <NavBar 
                // onSearch={this.useMeWhenYouDoSearch} 
                setSearched={this.useMeWhenClickedDashBoard}/>
                <div id="profile">
                    <h4 className="subtitle">Username: {user.username}</h4>
                    <h4 className="subtitle">User Type: {user.userType}</h4>
                    <h4 className="subtitle">Password: {showPassword}</h4>
                    <Row>
                        <Col>
                            <Button block onClick={() => this.showEditInput()}>Edit</Button>
                            {rendering}
                        </Col>
                        <Col>
                        <Button variant="warning" block onClick={() => this.showFollowingInput()}>Show Following</Button>
                            {followingList}
                        </Col>
                        <Col>
                        <Button variant="warning" block onClick={() => this.showHistoryInput()}>Show History</Button>
                            {historyList}
                        </Col>
                    </Row>

                </div>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileOwner);
