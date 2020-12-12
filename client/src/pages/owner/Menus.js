import React from 'react';
import './Menus.css';

import MenuGroup from '../../react-components/menuGroup/MenuGroup';


import { register, setRoute } from "../../redux/actions";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


import burger1 from "../../images/Mcdonald-2.png";
import burger2 from "../../images/Mcdonald-3.png";
import burger3 from "../../images/Mcdonald-4.png";
import burger4 from "../../images/Mcdonald-5.png";
import burger5 from "../../images/popeye.jpg";
import burger6 from "../../images/pizzahut.jpg";
import burger7 from "../../images/burger.jpg";
import burger8 from "../../images/user-review-1.jpg";
import burger9 from "../../images/subway.jpg";

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const mapStateToProps = (state) => {
    return {
        route: state.route
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
            MenuItems: [ // get from the backend
                { name: "Bergur", image: burger1, price: "10.0$" },
                { name: "BigMac",  image: burger2, price: "10.0$" },
                { name: "Chicken Nugget",  image: burger3, price: "10.0$" },

                { name: "Fries",  image: burger4, price: "10.0$" },
                { name: "Chicken Sandvich",  image: burger5, price: "10.0$" },
                { name: "Pizza", rating: "5", key: "6", image: burger6, price: "10.0$" },

                { name: "3 burger",  image: burger7, price: "10.0$" },
                { name: "1 burger",  image: burger8, price: "10.0$" },
                { name: "Subway", image: burger9, price: "10.0$" }
            ],
           newItem: {
                name: "",
               image: null,
               price: ""},
            warning: "",
        }
    }
    componentDidMount() {
        // call to get Menu Items:

    }
    handleUploadMenu =  () => {
        if (this.state.newItem.name === "" || this.state.newItem.image == null || this.state.newItem.price === ""){
            this.setState({warning: "have unfilled field"})
        }
        else{
            // call backend
        }
    }

    render() {
        const setRoute = (newRoute, id) => {
            let targetRoute = `/`
            if (!(newRoute === "StartUp" || newRoute === "")) {
                targetRoute = `${newRoute}`
            }
            this.props.setRoute(newRoute)
            this.props.history.push(targetRoute, id)
        }

        const fileSelectedHandler = (e) => {
            const file = e.target.files[0]
            this.setState({ postPic: file })
            this.setState({ warning: "upload img successfully" })
            this.setState({ picMsg: "" })
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

        var MenuItemList;
        MenuItemList = (
            <div id='MenuInProfile'>
                {cardgroups.map((index) => {
                    return <MenuGroup
                        key={0}
                        MenuItems={(this.state.MenuItems).slice(row * index, index * row + row)} />
                })}
            </div>
        );


        return (
            <section className='Menu'>

                <SideNav className = " o-70"
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
                    This is the title
                </h1>
                {MenuItemList}
                <div id="menuForm" className="o-80">
                    <div className="flex justify-around">
                        new item:
                        <input  onChange={(e) => {this.setState({newItem: {...this.state.newItem, ...{name: e.target.value}}})}}/>
                    </div>
                    <div className="flex justify-around">
                        Price:
                        <input  onChange={(e) => {this.setState({newItem: {...this.state.newItem, ...{price: e.target.value}}})}}/>
                    </div>
                    <input type="file"
                           id="makeMenuFileUpload" name="avatar"
                           accept="image/png, image/jpeg" onChange={(e) => {  }} />

                    <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-light-purple" href="#0" onClick={this.handleUploadMenu}> add Menu</a>
                    <p className=" i red">
                        {this.state.warning}
                    </p>
                </div>
            </section>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Menus));
