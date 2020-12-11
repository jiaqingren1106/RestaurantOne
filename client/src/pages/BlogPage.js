import React from 'react';
import "./BlogPage.css"
import Blog from "../react-components/Blog"
import burger from '../images/burger.jpg'
import {BrowserRouter, withRouter, Link, Route} from "react-router-dom";
import {register, setRoute} from "../redux/actions";
import {connect} from "react-redux";
import leftarrow from '../images/leftarrow.png'
import {getBlogs} from '../Action/blogAction'
import {getRestaurantsPost} from "../Action/restaurantAction"

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

        this.state = {
            id: props.location.state,
            post_id: [],
            title:[],
            date:[],
            description:[],
            image: [],
            info:[]
        }

        getRestaurantsPost(this, props.location.state)
        console.log(props)

    }


    render() {


        const row = 1
        const restaurantLen = this.state.title.length;
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


        if(this.state.title.length > 0 && this.state.description.length > 0 && this.state.image.length > 0 && this.state.date.length > 0 && this.state.post_id.length > 0){
            CouponList = (
                <div>
                    {cardgroups.map((index) => {
                        return <Blog
                            title={(this.state.title).slice(row*index,index*row+row)}
                            date= {(this.state.date).slice(row*index,index*row+row)}
                            description= {(this.state.description).slice(row*index,index*row+row)}
                            image = {(this.state.image).slice(row*index,index*row+row)}
                            post_id = {(this.state.post_id).slice(row*index,index*row+row)}
                            />
                    })}
                </div>
            );
        }else{
            CouponList = (
                <div></div>
            )
        }

      
     

        const setRoute = (newRoute, id) => {
            let targetRoute = `/`
            if (!(newRoute=== "StartUp" || newRoute === "")){
                targetRoute = `${newRoute}`
            }
            this.props.setRoute(newRoute)
            this.props.history.push(targetRoute, id)
        }

        return (
                <BrowserRouter >
                    <div className={'BlogPage'}>
                        <div className={'BlogPageUpper'}>
                            <Link 
                            className={"restaurantName"} 
                            onClick={() => setRoute("RestaurantPage", this.state.id )}
                            to={{ 
                                pathname: "/RestaurantPage", 
                                state: this.state.id 
                               }}
                            >
                                Restaurant
                            </Link>
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
