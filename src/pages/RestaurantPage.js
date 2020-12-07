import React from 'react';
import WebsiteName from "../react-components/WebsiteName";
import Slider from "../react-components/Slider";
import RestaurantInfo from "../react-components/RestaurantInfo";
import "./RestaurantPage.css"
import Mcdonald1 from '../images/Mcdonald-1.png'
import Mcdonald2 from '../images/Mcdonald-2.png'
import Mcdonald3 from '../images/Mcdonald-3.png'
import Mcdonald4 from '../images/Mcdonald-4.png'
import Mcdonald5 from '../images/Mcdonald-5.png'
import rightArrow from '../images/rightarrow.png'
import leftArrow from '../images/leftarrow.png'
import Navigation from "../react-components/Navigation";
import user1 from '../images/user-review-1.jpg'
import leftarrow from "../images/leftarrow.png";
import {withRouter} from "react-router-dom";
import {register, setRoute} from "../redux/actions";
import {connect} from "react-redux";


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

class RestaurantPage extends React.Component{


    state = {
        restaurant_info: [{images:[Mcdonald1, Mcdonald2, Mcdonald3, Mcdonald4, Mcdonald5], leftArrow: leftArrow,
            rightArrow: rightArrow},

            {title: 'Mcdonald', description: '$ Burgers Fast Food American', rating: '4.5(500+)',
                opentime: '8:00AM - 10:00PM', location: '196 Bloor St W, Toronto, ON M5s 1t8, Canada',
                safe: 'Safe environment!', reviews:["En vergoeding uitstekend denzelfden ik. Dik daar acre zijn voor ver veel. Ter allen den telde kan heeft. Verklaart om voldoende degelijke er overvloed al afstanden weerstand. Vijf tot meer woud zoo dik bron. Ze snelleren nu bezorgden krachtige af na wonderwel. Afscheidt nu aangelegd vernieuwd ad overvloed. Forten andere streek te in er europa nu. ", "Dikwijls lateriet van een uitgeput bak. Onderwoeld gunstigste elk ondernomen ton wat. Dal aanmerking wetenschap ontginning wantrouwen lot aangeplant. Brandhout ook wijselijk ontginnen kettingen elk men stichting belovende. Ik tooverslag kilometers economisch al. Op in verbouwen ontginnen stichting bovendien. Een als behandelt ontrukten liverpool moerassen wij zes. Middellijn er insnijding noodlottig tinprijzen ad rijkdommen interesten. Twee toe maar aard een veel doel zelf dik. ",
                    "Breken na op te en metaal zelden levert varens. Lang stof meer mei werd wat weer wie. Wie are verklaart wel mag aandeelen eigenaars gebruiken. Vergrooten caoutchouc kongostaat ingenieuse een voorschijn weg. Hand geen tijd daar is ad en wier. Ongebruikt gomsoorten hij kongostaat uit monopolies mag die natuurlijk. Zesde na rijst ad en meest sinds omdat ze. Vervangen degelijke ad meehelpen bepaalden ik viaducten en evenwicht. Welk in geld en kilo puin noch. "], users:["Yuan", "Yuan2", "Yuan3"],
                reviewpic: [user1, user1, user1]}],
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

        return (
            <section className={"restaurantPage"}>
                <div className={"upper"}>
                    <button className={"restaurantName"} onClick={() => setRoute("FirstPage")}>
                        RestaurantOne!
                    </button>
                    <div className={"right"}>
                        <Navigation/>
                    </div>
                </div>
                <div className={"page"}>
                    <Slider pic={this.state.restaurant_info[0]}/>

                    <RestaurantInfo info={this.state.restaurant_info[1]} className = {"info"}/>
                </div>
            </section>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RestaurantPage));
