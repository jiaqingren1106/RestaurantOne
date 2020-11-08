import './App.css';
import React, {useState} from 'react';
import './index.css'
import StartUp from "./fontPages/StartUp";
import { connect } from 'react-redux'
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import Register from "./fontPages/Register";
import SignIn from "./fontPages/SignIn";

const getTargetPage = (route, setRoute) => {
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

    }
}
const mapStateToProps = (state) => {
    return {route:
        state.route}
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