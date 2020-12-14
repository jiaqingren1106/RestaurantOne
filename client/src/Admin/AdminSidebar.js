import React from 'react';

import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './AdminSidebar.css'
import { connect } from 'react-redux'
import {register, setRoute} from "../redux/actions";

const mapStateToProps = (state) => {
    return {route:
        state.routeState.route,
        user: state.userState}

}
const mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (new_route)=> dispatch(setRoute(new_route)),
        setUser: (user_obj) => dispatch(register(user_obj))
    }
}


class AdminSidebar extends React.Component {
    render() {
        return (
            <Navigation id = "navBar" className = 'nav'
                onSelect={({itemId}) => {
                    this.props.onPageSelected(itemId)
                }}
                items={[
                    {
                        title: 'Dashboard',
                        itemId: 0
                    },
                    {
                        title: 'User',
                        itemId: 1
                    },
                    {
                        title: 'Restaurant Owner',
                        itemId: 2
                    },
                    {
                        title: 'Posts',
                        itemId: 3
                    },
                    {
                        title: 'Reviews',
                        itemId: 4
                    },
                    // {
                    //     title: 'LogOut',
                    //     itemId: 5
                    // },
                ]}
            />
        );
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(AdminSidebar)