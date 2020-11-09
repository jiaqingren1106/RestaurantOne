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
            isEdit: false,
            updateUsername: username,
            updatePassword: password
        }
     }
    

    showEditInput(){
        this.setState({isEdit : true});
    }

    onSubmit(){
        const user = this.props.user;
        if(this.state.updateUsername === "" || this.state.updatePassword === ""){
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

    closeEdit(){
        const user = this.props.user;
        this.setState({
            isEdit: false,
            updateUsername: user.username,
            updatePassword: user.password
        });
        this.setState({isEdit: false});
        return;
    }

    render() {
        const user = this.props.user;
        const showPassword = ("*").repeat(user.password.length);

        const profile = (
            <div id="profile">
                <h4 className="subtitle">Username: {user.username}</h4>
                <h4 className="subtitle">User Type: {user.userType}</h4>
                <h4 className="subtitle">Password: {showPassword}</h4>
                <Button variant="warning" block onClick={() => this.showEditInput()}>Edit</Button>
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
                        onChange={(e)=>{this.setState({updateUsername: e.target.value})}}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        value={this.state.updatePassword}
                        onChange={(e)=>{this.setState({updatePassword: e.target.value})}}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your password with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" block onClick={()=>{this.onSubmit()}}>
                    Submit
                </Button>
                <Button variant="danger" block onClick={()=>{this.closeEdit()}}>
                    Cancel
                </Button>
            </Form>
        );

        const nothing = (<br />);

        let rendering = nothing;
        if(this.state.isEdit){
            rendering = form;
        } else{
            rendering = nothing;
        }

        return (
            <Container id='Profile'>
                <Row>
                    <Col xs={12}>
                        <NavBar />
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}></Col>
                    <Col xs={8}>
                        {profile}
                    </Col>
                    <Col xs={2}></Col>
                </Row>
                <Row>
                    <Col xs={2}></Col>
                    <Col xs={8}>
                        {rendering}
                    </Col>
                    <Col xs={2}></Col>
                </Row>
                {/* <Row>
                    <Col xs={2}></Col>
                    <Col xs={8}>
                        {rendering}
                    </Col>
                    <Col xs={2}></Col>
                </Row> */}
                
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
