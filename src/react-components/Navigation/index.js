import React from 'react';
import "./styles.css"
import {register, setRoute} from "../../redux/actions";
import {connect} from "react-redux";
import {withRouter, Link} from "react-router-dom";


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


class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {Follow:'Follow', id: props.id};
        this.changeFollow = this.changeFollow.bind(this);
        // console.log("id in navigation is "+this.id)
        console.log(props)
    }

    changeFollow(){
        if(this.state['Follow'] === 'Follow'){
            this.setState({Follow: 'Unfollow', id: this.id})
        }else{
            this.setState({Follow: 'Follow', id: this.id})
        }
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
