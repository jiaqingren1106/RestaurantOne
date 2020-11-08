import React from 'react';
import WebsiteName from "../react-components/WebsiteName";
import Slider from "../react-components/Slider";
import RestaurantInfo from "../react-components/RestaurantInfo";
import Mcdonald1 from '../images/Mcdonald-1.png'
import Mcdonald2 from '../images/Mcdonald-2.png'
import Mcdonald3 from '../images/Mcdonald-3.png'
import Mcdonald4 from '../images/Mcdonald-4.png'
import Mcdonald5 from '../images/Mcdonald-5.png'
import rightArrow from '../images/rightarrow.png'
import leftArrow from '../images/leftarrow.png'


class RestaurantPage extends React.Component{

    state = {
        restaurant_info: [{images:[Mcdonald1, Mcdonald2, Mcdonald3, Mcdonald4, Mcdonald5], leftArrow: leftArrow,
            rightArrow: rightArrow},

            {title: 'Mcdonald', description: '$ Burgers Fast Food American', rating: '4.5(500+)',
                opentime: '8:00AM - 10:00PM', location: '196 Bloor St W, Toronto, ON M5s 1t8, Canada',
                safe: 'Safe environment!', reviews:["Good", "Nice", "yes"], users:["Yuan", "Yuan2", "Yuan3"]}]
    }

    render() {
        return (
            <section>
                <div>
                    <WebsiteName />
                    <Slider pic={this.state.restaurant_info[0]}/>
                    <RestaurantInfo info={this.state.restaurant_info[1]} />
                </div>
            </section>
        );
    }
}

export default RestaurantPage