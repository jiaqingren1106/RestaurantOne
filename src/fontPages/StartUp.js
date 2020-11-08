import React from 'react';
import './StartUp.css'
import {connect} from "react-redux";
import {setRoute} from "../redux/actions";

const mapStateToProps = (state) => {
    return {
        route: state.routeState.route
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (new_route)=> dispatch(setRoute(new_route))
    }
}


const StartUp = (props) => {

    return (<section className= "frontPage">
        <div className="log_sign_container">
            <div className="icon">
                RestaurantsOne
            </div>

            <div className="log_sign">
            <a className="point_cursor" onClick={ () => props.setRoute("SignIn")}>Login</a>
            /
            <a className="point_cursor" onClick={ () => props.setRoute("Register")}> Sign Up</a>
        </div>
        </div>
        <div className="body_container">

                <h1 className="h1_front"> Explore Great Restaurant</h1>

                <button type="button" className="btn btn-outline-danger btn-xl" onClick={() =>props.setRoute("FirstPage")}>
                    get started</button>

        </div>
    </section>) }


export default connect(mapStateToProps, mapDispatchToProps)(StartUp)