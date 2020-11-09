import './App.css';
import React, {useState} from 'react';
import './index.css'
import StartUp from "./fontPages/StartUp";
import { connect } from 'react-redux'
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import Register from "./fontPages/Register";
import SignIn from "./fontPages/SignIn";
import AdminPage from "./Admin/AdminPage";
import {routeState, userState} from "./redux/reducer";
import RestaurantPage from "./pages/RestaurantPage";
import BlogPage from "./pages/BlogPage";
import Post from "./react-components/Post";
import Menu from './react-components/menu/Menu';

const getTargetPage = (route) => {
    switch (route) {
        case "StartUp":
            return (<StartUp/>);
        case "SignIn":
            return (<SignIn/>);
        case "Register":
            return (<Register/>)
        case "FirstPage":
            return (<FirstPage/>)
        case "SecondPage":
            return (<SecondPage/>)
        case "RestaurantPage":
            return (<RestaurantPage/>)
        case "BlogPage":
            return (<BlogPage />)
        case "Post":
            return (<Post />)
        case "AdminPage":
            return (<AdminPage/>)
        case "MenuPage":
            return (<Menu/>)
        default:
            return (<StartUp/>);
    }
}
const mapStateToProps = (state) => {

    return {route:
        state.routeState.route,
    user: state.userState}


}
const mapDispatchToProps = (dispatch) => ({})

const App = ({route, user}) => {
// import Deals from "./react-components/Deals/Deals";

// const App = () => <Deals/>

   return (
       <div>
           {getTargetPage(route)}
       </div>

   )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);