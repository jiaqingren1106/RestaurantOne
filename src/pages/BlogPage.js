import React from 'react';
import "./BlogPage.css"
import Blog from "../react-components/Blog"
import burger from '../images/burger.jpg'
import {BrowserRouter, withRouter, Link, Route} from "react-router-dom";
import {register, setRoute} from "../redux/actions";
import {connect} from "react-redux";
import leftarrow from '../images/leftarrow.png'

const mapStateToProps = (state) => {
    return {
        route: state.route
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (new_route)=> dispatch(setRoute(new_route)),
        setUser: (user_obj) => dispatch(register(user_obj))
    }
}

class BlogPage extends React.Component{
    constructor(props){
        super(props);
        console.log(props.location.state)
    }


    state = {
        info:[
            {image: burger, title: "Introduce our new burger", comments: ["Nice !", "Nice !", "Nice !", "Nice !",
                    "Nice !"], users:["Yuan", "Yuan", "Yuan", "Yuan", "Yuan"], descriptions: "A hamburger (also burger" +
                    " for short) is a sandwich consisting of one or more cooked patties of ground meat, usually beef," +
                    " placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame " +
                    "broiled. Hamburgers are often served with cheese, lettuce, tomato, onion, pickles, bacon, or " +
                    "chiles; condiments such as ketchup, mustard, mayonnaise, relish, or a \"special sauce\", often a " +
                    "variation of Thousand Island dressing; and are frequently placed on sesame seed buns. A hamburger " +
                    "topped with cheese is called a cheeseburger", date: 'Nov 1, 2020'},
            {image: burger, title: "Introduce our new burger", comments: ["Nice !", "Nice !", "Nice !", "Nice !",
                    "Nice !"], users:["Yuan", "Yuan", "Yuan", "Yuan", "Yuan"], descriptions: "A hamburger (also burger" +
                    " for short) is a sandwich consisting of one or more cooked patties of ground meat, usually beef," +
                    " placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame " +
                    "broiled. Hamburgers are often served with cheese, lettuce, tomato, onion, pickles, bacon, or " +
                    "chiles; condiments such as ketchup, mustard, mayonnaise, relish, or a \"special sauce\", often a " +
                    "variation of Thousand Island dressing; and are frequently placed on sesame seed buns. A hamburger " +
                    "topped with cheese is called a cheeseburger", date: 'Nov 1, 2020'},
            {image: burger, title: "Introduce our new burger", comments: ["Nice !", "Nice !", "Nice !", "Nice !",
                    "Nice !"], users:["Yuan", "Yuan", "Yuan", "Yuan", "Yuan"], descriptions: "A hamburger (also burger" +
                    " for short) is a sandwich consisting of one or more cooked patties of ground meat, usually beef," +
                    " placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame " +
                    "broiled. Hamburgers are often served with cheese, lettuce, tomato, onion, pickles, bacon, or " +
                    "chiles; condiments such as ketchup, mustard, mayonnaise, relish, or a \"special sauce\", often a " +
                    "variation of Thousand Island dressing; and are frequently placed on sesame seed buns. A hamburger " +
                    "topped with cheese is called a cheeseburger", date: 'Nov 1, 2020'},
            {image: burger, title: "Introduce our new burger", comments: ["Nice !", "Nice !", "Nice !", "Nice !",
                    "Nice !"], users:["Yuan", "Yuan", "Yuan", "Yuan", "Yuan"], descriptions: "A hamburger (also burger" +
                    " for short) is a sandwich consisting of one or more cooked patties of ground meat, usually beef," +
                    " placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame " +
                    "broiled. Hamburgers are often served with cheese, lettuce, tomato, onion, pickles, bacon, or " +
                    "chiles; condiments such as ketchup, mustard, mayonnaise, relish, or a \"special sauce\", often a " +
                    "variation of Thousand Island dressing; and are frequently placed on sesame seed buns. A hamburger " +
                    "topped with cheese is called a cheeseburger", date: 'Nov 1, 2020'},
            {image: burger, title: "Introduce our new burger", comments: ["Nice !", "Nice !", "Nice !", "Nice !",
                    "Nice !"], users:["Yuan", "Yuan", "Yuan", "Yuan", "Yuan"], descriptions: "A hamburger (also burger" +
                    " for short) is a sandwich consisting of one or more cooked patties of ground meat, usually beef," +
                    " placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame " +
                    "broiled. Hamburgers are often served with cheese, lettuce, tomato, onion, pickles, bacon, or " +
                    "chiles; condiments such as ketchup, mustard, mayonnaise, relish, or a \"special sauce\", often a " +
                    "variation of Thousand Island dressing; and are frequently placed on sesame seed buns. A hamburger " +
                    "topped with cheese is called a cheeseburger", date: 'Nov 1, 2020'}
        ]
    }

    render() {

        const setRoute = (newRoute) => {
            let targetRoute = `/`
            if (!(newRoute=== "StartUp" || newRoute === "")){
                targetRoute = `${newRoute}`
            }

            this.props.history.push(targetRoute)
            this.props.setRoute(newRoute)
        }

        const row = 1
        const restaurantLen = this.state.info.length;
        const leftover = restaurantLen % row;
        var cardGroupLen;
        if (leftover === 0) {
            cardGroupLen = restaurantLen / row;
        } else {
            cardGroupLen = restaurantLen / row + 1;
        }


        let cardgroups = [];
        var i;
        for (i = 0; i < cardGroupLen; i++) {
            cardgroups.push(i);
        }

        var CouponList;
        CouponList = (
            <div>
                {cardgroups.map((index) => {
                    return <Blog
                        info={(this.state.info).slice(row*index,index*row+row)}/>
                })}
            </div>
        );

        return (
                <BrowserRouter>
                    <div className={'BlogPage'}>
                        <div className={'BlogPageUpper'}>
                            <button className={"restaurantName"} onClick={() => setRoute("RestaurantPage")}>
                                Restaurant
                            </button>
                        </div>

                        <p className={'BlogPageTitle'}>
                            Blog
                        </p>

                        <div className={"back"}>
                            <div className={'titlediv'}>
                            </div>
                            <div className={"blogpage"}>
                                <div className='blogblock'>
                                    {CouponList}
                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BlogPage));
