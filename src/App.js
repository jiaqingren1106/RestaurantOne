import './App.css';
import React, {useState} from 'react';
import './index.css'
import StartUp from "./fontPages/StartUp";

import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import Register from "./fontPages/Register";
import SignIn from "./fontPages/SignIn";
const getTargetPage = (route, setRoute) => {
    switch (route) {
        case "StartUp":
            return (<StartUp setRoute = {setRoute}/>);
        case "SignIn":
            return (<SignIn setRoute = {setRoute}/>);
        case "Register":
            return (<Register setRoute = {setRoute}/>)
        case "FirstPage":
            return (<FirstPage setRoute = {setRoute}/>)
        case "SecondPage":
            return (<SecondPage setRoute = {setRoute}/>)
        default:
            return (<StartUp setRoute = {setRoute}/>);
    }
}
const App = () => {

   const [route, setRoute] =  useState('StartUp');

// import Deals from "./react-components/Deals/Deals";


// const App = () => <Deals/>

   return (
       <div>
           {getTargetPage(route, setRoute)}
       </div>

   )
}

export default App;