import './App.css';
import React, {useState} from 'react';
import './index.css'
import StartUp from "./fontPages/StartUp";
import { connect } from 'react-redux'
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import Register from "./fontPages/Register";
import SignIn from "./fontPages/SignIn";
import {routeState, userState} from "./redux/reducer";
import RestaurantPage from "./pages/RestaurantPage";

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

    }
}
const mapStateToProps = (state) => {
    return {route:
        state.routeState.route,
    user: state.userState.username}

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