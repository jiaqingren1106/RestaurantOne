import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { register, setRoute } from "../../redux/actions";

const Styles = styled.div`
  .navbar { 
      background-color: #ffc800; 
      box-shadow: 0px 0px 18px #888888;
      height: 80px;
  }
  a, .navbar-nav, .navbar-light .nav-link {
    color: black;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color:  #ff5506;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 30%;
    right: 30%;
  }
`;

const mapStateToProps = (state) => {
  return {
  route: state.routeState.route,
  user: state.userState}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRoute: (new_route) => dispatch(setRoute(new_route)),
    setUser: (user_obj) => dispatch(register(user_obj))
  }
}


class NavBar extends React.Component {

    handleLogOut = () => {
        this.props.setUser( {
            username: "",
            userType:"",
            password: ""
        })
        this.props.setRoute("StartUp")
    }
  render() {
    const user = this.props.user

    let navRender = (
      <Nav className="ml-auto">
        <Nav.Item>
          <Nav.Link style = {
              {cursor: "context-menu",
              }}>Hello, Friend!</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="point_cursor" onClick={ () => this.props.setRoute("SignIn")}>Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="point_cursor" onClick={ () => this.props.setRoute("Register")}>Sign Up</Nav.Link>
        </Nav.Item>
      </Nav>
    )
    if (user.userType !== ""){
      navRender = (
        <Nav className="ml-auto">
            <Nav.Item><Nav.Link style = {
                {cursor: "context-menu",
                }}>Hello, {user.username}</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link onClick={() => this.props.setRoute("ProfilePage")}>Profile</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link onClick={() => this.handleLogOut() }>Log Out</Nav.Link></Nav.Item>
        </Nav>
      )
    }

    return (
      <Styles>
        <Navbar expand="lg" fixed="top">
            <div>
                <Navbar.Brand  className='point_cursor' onClick={() => this.props.setRoute("SecondPage")}>Deals</Navbar.Brand>
                <Navbar.Brand  className='point_cursor' onClick={() => this.props.setRoute("FirstPage")}>Dashboard</Navbar.Brand>
            </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Form className="form-center">
            <FormControl type="text" placeholder="Search" className="" />
          </Form>
          <Navbar.Collapse id="basic-navbar-nav">
            {navRender}
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    )
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
