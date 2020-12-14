import React from 'react';
import "./styles.css"
import {register, setRoute} from "../../redux/actions";
import {connect} from "react-redux";
import {withRouter, Link} from "react-router-dom";
import {deleteFollowtoUser, addFollowtoUser} from "../../Action/userAction"
import {addFollowtoRestaurant, deleteFollowtoRestaurant} from "../../Action/restaurantAction"

const mapStateToProps = (state) => {
    return {
        route: state.route,
        user: state.userState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (new_route)=> dispatch(setRoute(new_route)),
        setUser: (user_obj) => dispatch(register(user_obj))
    }
}


class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {Follow:'Follow', id: props.id};
        this.changeFollow = this.changeFollow.bind(this);
    }

    changeFollow(){
        if(this.state['Follow'] === 'Follow'){
            console.log(this.id)
            this.setState({Follow: 'Unfollow'})
            // addFollowtoUser(this.props.user.id, this.state.id)
            // addFollowtoRestaurant(this.state.id, this.props.user.id)
        }else{
            this.setState({Follow: 'Follow'})
            // deleteFollowtoUser(this.props.user.id, this.state.id)
            // deleteFollowtoRestaurant(this.state.id, this.props.user.id)
        }
    }


    render() {

        // console.log(this.props.user.id)
        // console.log(this.props.user.restaurant_id)

        const setRoute = (newRoute) => {
            let targetRoute = `/`
            if (!(newRoute=== "StartUp" || newRoute === "")){
                targetRoute = `${newRoute}`
            }

            this.props.history.push(targetRoute)
            this.props.setRoute(newRoute)
        }

        return(
            <div className={"navigation1"}>

                <button className={"navigationButton"} onClick= {this.changeFollow}>
                    {this.state['Follow']}
                </button>

                <Link 
                className={"navigationButton"} 
                onClick={() => setRoute("BlogPage")}
                to={{ 
                    pathname: "/BlogPage", 
                    state: this.state.id 
                   }}
                >
                    Blog
                </Link>

                <Link 
                className={"navigationButton"} 
                onClick={() => setRoute("MenuPage")}
                to={{ 
                    pathname: "/MenuPage", 
                    state: this.state.id
                   }}
                >
                    Menu
                </Link>


            </div>
        )
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation));
