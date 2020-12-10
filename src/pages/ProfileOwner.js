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

            post: [
                { postid: 0, date: "2010-9-10", content: "introduce new burger" },
                { postid: 1, date: "2010-9-10", content: "introduce new fries" },
                { postid: 2, date: "2010-9-10", content: "introduce new coke" },
                { postid: 4, date: "2010-9-10", content: "introduce new coffee" }
            ],

            follower: [
                { name: "alan", key: "1" },
                { name: "yuan", key: "2" },
                { name: "yinke", key: "3" },
                { name: "patric", key: "4" },
              
            ]

        }
    }
    useMeWhenClickedDashBoard = () => {
        this.setState({ onSearch: false })
    }

  
  
    showPostInput() {
        if (this.state.isPost) {
            this.setState({ isPost: false });
        } else {
            this.setState({ isPost: true });
        }

    }

    
    showFollowerInput() {
        if (this.state.isFollower) {
            this.setState({ isFollower: false });
        } else {
            this.setState({ isFollower: true });
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

      
        let postList = (
            <div>
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
                })}
            </div>
        );

    
        let followerList = (
            <div>
                {this.state.follower.map((follower) => {
                    return (
                        <div className={'reviewBlock'}>
                            <p id="followers">
                                {"Name: " + follower.name}
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
                            <Button variant="warning" block onClick={() => this.showPostInput()}>Show Post</Button>
                            {postList}
                        </Col>
                        <Col>
                            <Button variant="warning" block onClick={() => this.showFollowerInput()}>Show Follower</Button>
                            {followerList}
                        </Col>
                    </Row>

                </div>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileOwner);
