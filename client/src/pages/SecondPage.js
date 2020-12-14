// import React from 'react';
// import './SecondPage.css';

// import '../react-components/Restaurant/Restaurant.css'

// import Advertisment from '../react-components/Advertisment/Advertisment';
// import {BURGERKING, MCDONALDS,
//     AWDES, SUBWAY, POPEYES,PIZZAHUT, TIMHORTONS,
// STARBUCKS,
// TACOBELL} from "../data/discription_constants";

// import CouponGroup from '../react-components/CouponGroup/CouponGroup';

// import AW from "../images/AW.png";
// import BurgerKing from "../images/burgerking.jpg";
// import Mcdonald from "../images/Mcdonald.png";
// import PizzaHut from "../images/pizzahut.jpg";
// import Popeye from "../images/popeye.jpg";
// import StarBucks from "../images/starbucks.jpg";
// import TimHortons from "../images/timhortons.jpg";
// import TacoBell from "../images/tacobell.jpg";
// import Subway from "../images/subway.jpg";
// import NavBar from '../react-components/NavBar/NavBar';

// class SecondPage extends React.Component {
//     state = {
//         onSearch: false,
//         restaurants: [
//             {name: "BurgerKing", rating: "5", key: "1", image: BurgerKing, description: BURGERKING},
//             {name: "McDonalds", rating: "4", key: "2", image: Mcdonald, description: MCDONALDS },
//             {name: "AW", rating: "5", key: "3", image: AW, description: AWDES },

//             {name: "Subway", rating: "5", key: "4", image: Subway, description: SUBWAY },
//             {name: "Popeyes", rating: "5", key: "5", image: Popeye, description: POPEYES },
//             {name: "PizzaHut", rating: "5", key: "6", image: PizzaHut, description: PIZZAHUT },

//             {name: "TimHortons", rating: "5", key: "7", image: TimHortons, description: TIMHORTONS },
//             {name: "StarBucks", rating: "5", key: "8", image: StarBucks, description: STARBUCKS },
//             {name: "TacoBell", rating: "5", key: "9", image: TacoBell, description: TACOBELL }
//         ],
//         searched: []
//     }

//     useMeWhenYouDoSearch = (props) => {
//         let new_restaurant = []
//         if (props.trim() === "") {
//             this.setState({ onSearch: false })
//         } else {
//             let i = 0
//             for (i; i < this.state.restaurants.length; i++) {
//                 if (this.state.restaurants[i].name.toUpperCase().includes(props.toUpperCase())) {
//                     new_restaurant.push(this.state.restaurants[i])
//                 }
//             }
//             this.setState({ onSearch: true })
//             this.setState({ searched: new_restaurant })
//         }
//     }

//     useMeWhenClickedDashBoard = () => {
//         this.setState({ onSearch: false })
//     }


//     render() {
//         const column = 5;

//         let restaurants
//         if (this.state.onSearch){
//             restaurants = this.state.searched
//         } else {
//             restaurants = this.state.restaurants
//         }


//         const restaurantLen = restaurants.length;
//         const leftover = restaurantLen % column;
//         var cardGroupLen;
//         if (leftover === 0) {
//             cardGroupLen = restaurantLen / column;
//         } else {
//             cardGroupLen = restaurantLen / column + 1;
//         }

        
//         let cardgroups = [];
//         var i;
//         for (i = 0; i < cardGroupLen; i++) {
//             cardgroups.push(i);
//         }

//         var CouponList;
//         CouponList = (
//             <div>
//               {cardgroups.map((index) => {
//                 return <CouponGroup
//                 restaurants={(restaurants).slice(column * index, index * column + column)}/>

//               })}
//             </div>
//           );


          
//         return (
//         <section className='SecondPage'>
//             <NavBar onSearch={this.useMeWhenYouDoSearch} setSearched={this.useMeWhenClickedDashBoard}/>
//             {CouponList}
//         </section>
//         );
//     }
// }

// export default SecondPage;



import React from 'react';
import '../pages/owner/Deals.css';
import { register, setRoute } from "../redux/actions";
import { connect } from 'react-redux';
import { withRouter, Link } from "react-router-dom";
import { getAllCoupon } from '../Action/couponAction'
import CouponGroup from '../react-components/CouponGroup/CouponGroup';
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

class SecondPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            couponItems: []
        }
        getAllCoupon(this)
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
                        coupons={(this.state.couponItems).slice(row * index, index * row + row)} display={false}/>
                })}
            </div>
        );

        
        return (
            <section className='Menu'>
                <h1 className="f3 f2-m f1-l fw2 near-white mv3 center-l">
                    Coupon
                </h1>
                <Link
                    id="back"
                    onClick={() => setRoute("FirstPage", this.props.location.state)}
                    to={{
                        pathname: "/FirstPage",
                        state: this.props.location.state
                    }}
                >
                    back
                </Link>
                {CouponList}
               
            </section>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondPage);