import React, { useEffect, useReducer } from 'react';
import './Menus.css';
import MenuGroup from '../../react-components/menuGroup/MenuGroup';
import { register, setRoute } from "../../redux/actions";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { getRestaurantMenu } from "../../Action/restaurantAction"
import { createImage, createImageForMenu } from '../../Action/imageAction'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

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

class Menus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MenuItems: [],
            newItem: {
                name: "",
                image: null,
                price: ""
            },
            warning: "",
            restaurantId: this.props.user.restaurant_id
        }

        getRestaurantMenu(this, this.props.user.restaurant_id)


    }


    handleUploadMenu = () => {
        if (this.state.newItem.name === "" || this.state.newItem.image == null || this.state.newItem.price === "") {
            this.setState({ warning: "have unfilled field" })
        }
        else {
            // call backend
            this.setState({ warning: "" })
        }
    }
    render() {
        console.log(this.state)

        const setRoute = (newRoute, id) => {
            let targetRoute = `/`
            if (!(newRoute === "StartUp" || newRoute === "")) {
                targetRoute = `${newRoute}`
            }
            this.props.setRoute(newRoute)
            this.props.history.push(targetRoute, id)
        }


        const row = 5;

        const MenuItemLen = this.state.MenuItems.length;
        const leftover = MenuItemLen % row;
        var cardGroupLen;
        if (leftover === 0) {
            cardGroupLen = MenuItemLen / row;
        } else {
            cardGroupLen = MenuItemLen / row + 1;
        }


        let cardgroups = [];
        var i;
        for (i = 0; i < cardGroupLen; i++) {
            cardgroups.push(i);
        }

        const updateState = (newMenuItems) => {
            this.setState({MenuItems:newMenuItems})
        }

        var MenuItemList;
        MenuItemList = (
            <div id='MenuInProfile'>
                {cardgroups.map((index) => {
                    return <MenuGroup
                        MenuItems={(this.state.MenuItems).slice(row * index, index * row + row)} restid={this.state.restaurantId} upper={updateState} state={this.state} display={true}/>
                })}
            </div>
        );

        


        return (
            <section className='Menu'>

                <SideNav className=" o-70"
                    onSelect={(selected) => {
                        // Add your code here
                    }}>

                    <SideNav.Toggle />

                    <SideNav.Nav defaultSelected="home">

                        <NavItem eventKey="Home" onClick={() => setRoute("FirstPage")}>
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>

                            <NavText>
                                Home
                            </NavText>
                        </NavItem>

                        <NavItem eventKey="Profile" onClick={() => setRoute("ProfilePageOwner")}>
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>

                            <NavText>
                                Profile
                            </NavText>
                        </NavItem>

                        <NavItem eventKey="posts" onClick={() => setRoute("Postlist")}>
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>

                            <NavText onClick={() => setRoute("Postlist")} >
                                posts
                            </NavText>
                        </NavItem>

                        <NavItem eventKey="followers" onClick={() => setRoute("Followers")}>
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>

                            <NavText>
                                followers
                            </NavText>
                        </NavItem>

                        <NavItem eventKey="menus" onClick={() => setRoute("Menus")}>
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>

                            <NavText>
                                menus
                            </NavText>
                        </NavItem>

                        <NavItem eventKey="deal" onClick={() => setRoute("Deals")}>
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>

                            <NavText>
                                deal
                            </NavText>
                        </NavItem>

                    </SideNav.Nav>
                </SideNav>
                <h1 className="f3 f2-m f1-l fw2 near-white mv3 center-l">
                    Menu
                </h1>
                {MenuItemList}
                <div id="menuForm" className="o-90">
                    <div className="flex justify-around black">
                        new item:
                        <input onChange={(e) => { this.setState({ newItem: { ...this.state.newItem, ...{ name: e.target.value } } }) }} />
                    </div>
                    <div className="flex justify-around black">
                        Price:
                        <input onChange={(e) => { this.setState({ newItem: { ...this.state.newItem, ...{ price: e.target.value } } }) }} />
                    </div>


                    <form className="image-form" id="form3" onSubmit={(e) => {
                        e.preventDefault();
                        createImageForMenu(document.getElementById("form3"), this)
                        window.location.reload(false);

                    }

                    }>

                        <div class="image-form__field">
                            <label>Image:</label>
                            <input name="image" type="file" />
                        </div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className="image-form__submit-button"
                        >
                            Upload
                    </Button>
                    </form>
                </div>
            </section>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Menus));
