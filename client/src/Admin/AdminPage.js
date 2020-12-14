import React from 'react';
import './AdminPage.css';
import PostsTable from './admin-components/PostsTable';
import ResaurantOwnerTable from './admin-components/RestaurantOwnerTable';
import ReviewsTable from './admin-components/ReviewsTable';
import UserTable from './admin-components/UserTable';
import DashboardTable from "./admin-components/DashboardTable"

import AdminSidebar from './AdminSidebar';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { connect } from 'react-redux'
import { register, setRoute } from "../redux/actions";


const mapStateToProps = (state) => {
    return {
        route:
            state.routeState.route,
        user: state.userState
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (new_route) => dispatch(setRoute(new_route)),
        setUser: (user_obj) => dispatch(register(user_obj))
    }
}



class AdminPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            users: [],
            pending: [],
            posts: [],
            reviews: [],
        }
    }



    useMeWhenOnClick = (pageNumber) => {
        if (pageNumber === 5) {
            setRoute("SignIn");
        }
        this.setState({
            page: pageNumber
        })
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

        let page
        switch (this.state.page) {
            case 0:
                page = <DashboardTable />
                break
            case 1:
                page = <UserTable />
                break
            case 2:
                page = <ResaurantOwnerTable />
                break
            case 3:
                page = <PostsTable />
                break
            case 4:
                page = <ReviewsTable />
                break
            // case 5:
            //     page = <PostsTable />
            //     break
            default:
                page = <PostsTable />
                break
        }

        return (
            <div id='adminPage' fluid>
                <Row id='adminRow'>
                    <Col xs={3} id="sidebar-wrapper">
                        <AdminSidebar onPageSelected={this.useMeWhenOnClick} />
                    </Col>
                    <Col xs={9} id="page-content-wrapper">
                        <div className = "flex justify-end pt3 ph5">
                            <a className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-pink" href="#0"
                               onClick={() => setRoute("SignIn")}>Log out</a>
                        </div>
                        {page}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage)