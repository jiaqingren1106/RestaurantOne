import React from 'react';
import WebsiteName from "../react-components/WebsiteName";
import Slider from "../react-components/Slider";
import RestaurantInfo from "../react-components/RestaurantInfo";
import "./RestaurantPage.css"
import rightArrow from '../images/rightarrow.png'
import leftArrow from '../images/leftarrow.png'
import Navigation from "../react-components/Navigation";
import { withRouter } from "react-router-dom";
import { register, setRoute } from "../redux/actions";
import { connect } from "react-redux";
import {getRestaurantsByID} from "../Action/restaurantAction"

let ready = false;

const mapStateToProps = (state) => {
    return {
        route: state.route,
        user: state.userState

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (new_route) => dispatch(setRoute(new_route)),
        setUser: (user_obj) => dispatch(register(user_obj))
    }
}

class RestaurantPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                image: [],
                leftArrow: leftArrow,
                rightArrow: rightArrow,
                usersid: "5fcfbd01794cb32eb4a928ec",
                id: props.location.state,
                reviews:[],
                posts: []
        }
        
        if (props.location.state) {
            getRestaurantsByID(this, props.location.state)
        }
        
    }

    render() {
        const setRoute = (newRoute) => {
            let targetRoute = `/`
            if (!(newRoute === "StartUp" || newRoute === "")) {
                targetRoute = `${newRoute}`
            }

            this.props.history.push(targetRoute)
            this.props.setRoute(newRoute)
        }
        return (
            <section className={"restaurantPage"}>
                <div className={"upper"}>
                    <button className={"restaurantName"} onClick={() => setRoute("FirstPage")}>
                        RestaurantOne!
                    </button>
                    <div className={"right"}>
                        <Navigation id={this.state.id} posts={this.state.posts}/>
                    </div>
                </div>
                <div className={"page"}>
                    <Slider pic={{images:this.state.image, leftArrow:this.state.leftArrow, rightArrow: this.state.rightArrow}}/>

                    <RestaurantInfo info={{title: this.state.title, description:this.state.description, rating:this.state.rating, 
                        opentime:this.state.opentime, location:this.state.address, safe:this.state.safe, reviews:this.state.reviews,
                        userId:this.state.usersid, restaurantId: this.state.id
                        }} className = {"info"}/>
                </div>
            </section>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RestaurantPage));
