import React from 'react';
import "./styles.css"
import {register, setRoute} from "../../redux/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


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
        this.state = {Follow:'Follow'};
        this.changeFollow = this.changeFollow.bind(this);
    }

    changeFollow(){
        if(this.state['Follow'] === 'Follow'){
            this.setState({Follow: 'Unfollow'})
        }else{
            this.setState({Follow: 'Follow'})
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

                <button className={"navigationButton"} onClick={() => setRoute("BlogPage")}>
                    Blog
                </button>

                <button className={"navigationButton"} onClick={() => setRoute("MenuPage")}>
                    Menu
                </button>


            </div>
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation));
