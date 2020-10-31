import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

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

export const NavBar = () => (
  <Styles>
    <Navbar expand="lg" fixed="top">
      <Navbar.Brand href="/">RestaurantOne</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Hello, Customer</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">Profile</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/about">Log Out</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);