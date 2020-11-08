import './App.css';
import React, {useState} from 'react';
import './index.css'
import StartUp from "./fontPages/StartUp";
import { connect } from 'react-redux'
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import Register from "./fontPages/Register";
import SignIn from "./fontPages/SignIn";
import {routeState} from "./redux/reducer";
import RestaurantPage from "./pages/RestaurantPage";
import BlogPage from "./pages/BlogPage";

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

    }
}
const mapStateToProps = (state) => {
    return {route:
        state.routeState.route}
}
const mapDispatchToProps = (dispatch) => ({})

const App = ({route}) => {
// import Deals from "./react-components/Deals/Deals";


// const App = () => <Deals/>

   return (
       <div>
           {getTargetPage(route)}
       </div>

   )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);