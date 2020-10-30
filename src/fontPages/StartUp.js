import React from 'react';
import './StartUp.css'

const StartUp = () => {
    return (<section className= "frontPage">
        <div className="log_sign_container">
            <div className="icon">
                RestaurantsOne
            </div>

            <div className="log_sign">
            <a href="">Login</a>
            /
            <a href=""> Sign Up</a>
        </div>
        </div>
        <div className="body_container">

                <h1 className="h1_front"> Explore Great Restaurant</h1>

                <button type="button" className="btn btn-outline-danger btn-xl">get started</button>

        </div>
    </section>) }


export default StartUp