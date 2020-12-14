import React from 'react';
import './Deals.css';
import { register, setRoute } from "../../redux/actions";
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { getRestaurantCoupon } from '../../Action/restaurantAction'
import { createImageForCoupon } from "../../Action/imageAction"


import CouponGroup from '../../react-components/CouponGroup/CouponGroup';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const mapStateToProps = (state) => {
    return {
        route: state.routeState.route,
        user: state.userState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (new_route) => dispatch(setRoute(new_route)),
        setUser: (user_obj) => dispatch(register(user_obj))
    }
}

class Deals extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            couponItems: [],
            newCoupon: {
                name: "",
                image: null,
                price: ""
            },

            warning: "",
            restaurantId: this.props.user.restaurant_id
        }

        getRestaurantCoupon(this, this.props.user.restaurant_id)

    }


    setCreatePostAppear = (newAppear) => {
        this.setState({ createPostAppear: newAppear })
    }
    setPostSendingMsg = (msg) => {
        this.setState({ newPostingMsg: msg })
    }
    handleUploadMenu = () => {
        if (this.state.newCoupon.name === "" || this.state.newCoupon.image == null || this.state.newCoupon.price === "") {
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


        const row = 4;

        const couponLen = this.state.couponItems.length;
        const leftover = couponLen % row;
        var cardGroupLen;
        if (leftover === 0) {
            cardGroupLen = couponLen / row;
        } else {
            cardGroupLen = couponLen / row + 1;
        }


        let cardgroups = [];
        var i;
        for (i = 0; i < cardGroupLen; i++) {
            cardgroups.push(i);
        }

        const updateState = (newCouponItems) => {
            this.setState({couponItems:newCouponItems})
        }

        var CouponList;
        CouponList = (
            <div id="dealsInProfile">
                {cardgroups.map((index) => {
                    return <CouponGroup
                        coupons={(this.state.couponItems).slice(row * index, index * row + row)} restid={this.state.restaurantId} upper={updateState} state={this.state} display={true}/>
                })}
            </div>
        );

        
        const fileSelectedHandler = (e) => {
            const file = e.target.files[0]

            this.setState({ postPic: file })
            this.setState({ warning: "upload img successfully" })
            this.setState({ picMsg: "" })

        }

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
                    Coupon
                </h1>


                {CouponList}
                <div id="couponForm" className="o-90">
                    <div className="flex justify-around black">
                        new Coupon:
                        <input onChange={(e) => { this.setState({ newCoupon: { ...this.state.newCoupon, ...{ name: e.target.value } } }) }} />
                    </div>
                    <div className="flex justify-around black">
                        Expire Date:
                        <input onChange={(e) => { this.setState({ newCoupon: { ...this.state.newCoupon, ...{ price: e.target.value } } }) }} />
                    </div>


                    <form className="image-form" id="form4" onSubmit={(e) => {
                        e.preventDefault();
                        createImageForCoupon(document.getElementById("form4"), this)

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

export default connect(mapStateToProps, mapDispatchToProps)(Deals);