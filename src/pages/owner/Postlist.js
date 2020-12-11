import React from 'react';
import { connect } from 'react-redux';
import { register, setRoute } from "../redux/actions";

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
        }
    }


    render() {

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

        return (
            <Container id='Profile'>
                <div id="profile">
                    <Row>
                        <Col>
                            {postList}
                        </Col>
                    </Row>

                </div>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
