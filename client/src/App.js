import './App.css';
import React, {useState, useEffect} from 'react';
import './index.css'
import StartUp from "./frontPages/StartUp";
import { connect } from 'react-redux'
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import Register from "./frontPages/Register";
import SignIn from "./frontPages/SignIn";
import AdminPage from "./Admin/AdminPage";
import RestaurantPage from "./pages/RestaurantPage";
import BlogPage from "./pages/BlogPage";
import Post from "./react-components/Post";
import Menu from './react-components/menu/Menu';
import Menus from "./pages/owner/Menus";
import Deals from "./pages/owner/Deals"
import {googleApiKey} from "./data/constants";
import History from "./pages/user/History";
import Following from "./pages/user/Following"

import ProfileOwner from "./pages/owner/ProfileOwner";
import Followers from "./pages/owner/Followers";
import Postlist from "./pages/owner/Postlist"
import Geocode from "react-geocode";
import {Route, withRouter, Switch} from 'react-router-dom'
import ProfileUser from './pages/user/ProfileUser';
import {register, setRoute} from "./redux/actions";

const getTargetPage = (route) => {
    // switch (route) {
    //     case "StartUp":
    //         return (<StartUp/>);
    //     case "SignIn":
    //         return (<SignIn/>);
    //     case "Register":
    //         return (<Register/>)
    //     case "FirstPage":
    //         return (<FirstPage/>)
    //     case "SecondPage":
    //         return (<SecondPage/>)
    //     case "RestaurantPage":
    //         return (<RestaurantPage/>)
    //     case "BlogPage":
    //         return (<BlogPage />)
    //     case "Post":
    //         return (<Post />)
    //     case "AdminPage":
    //         return (<AdminPage/>)
    //     case "MenuPage":
    //         return (<Menu/>)
    //     case "ProfilePage":
    //         return (<Profile/>)
    //     default:
    //         return (<StartUp/>);
    // }

}
const mapStateToProps = (state) => {

    return {route:
        state.routeState.route,
    user: state.userState}


}
const mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (new_route) => dispatch(setRoute(new_route)),
        setUser: (user_obj) => dispatch(register(user_obj))
    }
}

const App = (props) => {
    useEffect( () => {
        Geocode.setApiKey("AIzaSyALh3Jxz38yeMi-GmZ8ID5xMvhDnmaC244");
        Geocode.setLanguage("en");
    }, [])
   return (
           <div>
               <Switch>
                   <Route exact path="/Followers" component={Followers}/>
                   <Route exact path="/" component={StartUp}/>
                   <Route exact path="/Postlist" component={Postlist}/>
                   <Route exact path="/Menus" component={Menus}/>
                   <Route exact path="/Deals" component={Deals}/>

                   <Route exact path="/History" component={History}/>
                   <Route exact path="/Following" component={Following}/>


                   <Route exact path="/ProfilePage" component={ProfileUser}/>
                   <Route exact path="/ProfilePageOwner" component={ProfileOwner}/>
                   <Route exact path="/MenuPage" component={Menu}/>
                   <Route exact path="/AdminPage" component={AdminPage}/>
                   <Route exact path="/Post" component={Post}/>
                   <Route exact path="/BlogPage" component={BlogPage}/>
                   <Route exact path="/RestaurantPage" component={RestaurantPage}/>
                   <Route exact path="/SecondPage" component={SecondPage}/>
                   <Route exact path="/FirstPage" component={FirstPage}/>
                   <Route exact path="/Register" component={Register}/>
                   <Route exact path="/SignIn" component={SignIn}/>
               </Switch>
           </div>


   )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);