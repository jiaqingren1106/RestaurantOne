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

class Profile extends React.Component {

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
            post: [
                { postid: 0, date: "2010-9-10", content: "introduce new burger" },
                { postid: 1, date: "2010-9-10", content: "introduce new fries" },
                { postid: 2, date: "2010-9-10", content: "introduce new coke" },
                { postid: 4, date: "2010-9-10", content: "introduce new coffee" }
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

    showEditInput() {
        this.setState({ isEdit: true });
    }
    showHistoryInput() {
        if (this.state.isHistory) {
            this.setState({ isHistory: false });
        } else {
            this.setState({ isHistory: true });
        }

    }
    showPostInput() {
        if (this.state.isPost) {
            this.setState({ isPost: false });
        } else {
            this.setState({ isPost: true });
        }

    }
    showFollowingInput() {
        if (this.state.isFollowing) {
            this.setState({ isFollowing: false });
        } else {
            this.setState({ isFollowing: true });
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

    render() {
        const user = this.props.user;
        const showPassword = ("*").repeat(user.password.length);

        let follow;
        let comment_history;
        if (this.props.user.username === "owner") {
            follow = <Button variant="warning" block onClick={() => this.showFollowerInput()}>Show Follower</Button>
            comment_history = <Button variant="warning" block onClick={() => this.showPostInput()}>Show Post</Button>
        } else {
            follow = <Button variant="warning" block onClick={() => this.showFollowingInput()}>Show Following</Button>
            comment_history = <Button variant="warning" block onClick={() => this.showHistoryInput()}>Show History</Button>
        }

        


        

        const profile = (
           
            <div id="profile">
                <h4 className="subtitle">Username: {user.username}</h4>
                <h4 className="subtitle">User Type: {user.userType}</h4>
                <h4 className="subtitle">Password: {showPassword}</h4>
                <Button block onClick={() => this.showEditInput()}>Edit</Button>
                {comment_history}
                {follow}
            </div>
        );

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

        let postList = (
            <div>
                {this.state.history.map((post) => {
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

        let historyRender = nothing;
        if (this.state.isHistory) {
            historyRender = historyList;
        } else {
            historyRender = nothing;
        }

        let postRender = nothing;
        if (this.state.isPost) {
            postRender = postList;
        } else {
            postRender = nothing;
        }

        let followingRender = nothing;
        if (this.state.isFollowing) {
            followingRender = followingList;
        } else {
            followingRender = nothing;
        }

        let followerRender = nothing;
        if (this.state.isFollower) {
            followerRender = followerList;
        } else {
            followerRender = nothing;
        }

        let isFollow
        if (this.props.user.username === "owner"){
            isFollow = followerRender
        }else {
            isFollow = followingRender
        }

        let isPostComment
        if (this.props.user.username === "owner"){
            isPostComment = postRender
        }else {
            isPostComment = historyRender
        }



        return (
            // <Container id='Profile'>
            //     <Row>
            //         <Col xs={12}>
            //             <NavBar />
            //         </Col>
            //     </Row>
            //     <Row>
            //         <Col xs={2}></Col>
            //         <Col xs={8}>
            //             {profile}
            //         </Col>
            //         <Col xs={2}></Col>
            //     </Row>
            //     <Row>
            //         <Col >{rendering}</Col>
            //         <Col >

            //             {historyRender}

            //         </Col>
            //         <Col> {followingRender}</Col>
            //     </Row>


            // </Container>

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
                            {comment_history}
                            {isPostComment}
                        </Col>
                        <Col>
                            {follow}
                            {isFollow}
                        </Col>
                    </Row>

                </div>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
