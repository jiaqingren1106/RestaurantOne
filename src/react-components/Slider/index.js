import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Mcdonald1 from "./static/Mcdonald-1.png"
import Mcdonald2 from "./static/Mcdonald-2.png"
import Mcdonald3 from "./static/Mcdonald-3.png"
import Mcdonald4 from "./static/Mcdonald-4.png"
import Mcdonald5 from "./static/Mcdonald-5.png"

class MyCarousel extends Component {
    render() {
        return (
            <Carousel>
                <img style={{
                    width: 450,
                    height: 450}}
                    src={Mcdonald1} alt = {"hotpot"}/>
                <img style={{
                    width: 450,
                    height: 450}} src={Mcdonald2} alt = {"hotpot"}/>
                <img style={{
                    width: 450,
                    height: 450}} src={Mcdonald3} alt = {"hotpot"}/>
                <img style={{
                    width: 450,
                    height: 450}} src={Mcdonald4} alt = {"hotpot"}/>
                <img style={{
                    width: 450,
                    height: 450}} src={Mcdonald5} alt = {"hotpot"}/>
            </Carousel>
        );
    }
}

export default MyCarousel