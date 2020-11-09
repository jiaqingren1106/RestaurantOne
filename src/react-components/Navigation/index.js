import React from 'react';
import "./styles.css"
import {register, setRoute} from "../../redux/actions";
import {connect} from "react-redux";


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
    render() {
        const setRoute = this.props.setRoute

        return(
            <div className={"navigation"}>

                <button className={'navigationButton'} onClick={() => setRoute("FirstPage")}>
                    Back
                </button>

                <button className={"navigationButton"} onClick={() => setRoute("BlogPage")}>
                    Blog
                </button>

                <button className={"navigationButton"}>
                    Menu
                </button>

            </div>
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
