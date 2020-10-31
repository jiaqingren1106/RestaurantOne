import React, { Component } from 'react';
import "./styles.css"

class RestaurantInfo extends React.Component{
    render() {
        return (
            <div className={"RestaurantInfo"}>
                <h1 className={"RestaurantName"}>
                    Mcdonald's
                </h1>
                <p className={"RestaurantDescription"}>
                    $ Burgers Fast Food American
                </p>
                <p className={"Rating"}>
                    4.5(500+)
                </p>
                <p className={"OpenTime"}>
                    8:00AM - 10:00PM
                </p>
                <p className={"Location"}>
                    196 Bloor St W, Toronto, ON M5s 1t8, Canada
                </p>
            </div>
        );
    }
}

export default RestaurantInfo