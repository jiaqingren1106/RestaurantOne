import React from 'react';
import "./styles.css"
import checkPic from "../../images/checkPic.png"
import user1 from '../../images/user-review-1.jpg'
import user2 from '../../images/user-review-2.jpg'
import user3 from '../../images/user-review-3.jpg'


class RestaurantInfo extends React.Component{
    render() {

        const length = this.props.info['reviews'].length
        console.log(length)

        let i;
        let list = []
        for(i = 0;i < length; i++){
            list.push(i);
        }

        return (
            <div className={"respage"}>
                <div className={"RestaurantInfo"}>
                    <h1 className={"RestaurantName"}>
                        {this.props.info.title}
                    </h1>
                    <p className={"RestaurantDescription"}>
                        {this.props.info.description}
                    </p>
                    <p className={"Rating"}>
                        {this.props.info.rating}
                    </p>
                    <p className={"OpenTime"}>
                        {this.props.info.opentime}
                    </p>
                    <p className={"Location"}>
                        {this.props.info.location}
                    </p>

                    <p className={"CovidUpdate"}>
                        Covid Update
                    </p>

                    <img className={"checkPic"} src={checkPic} alt={"None"}/>

                    <p className={"condition"}>
                        {this.props.info.safe}
                    </p>

                    <p className={"r"}>
                        Review
                    </p>

                    {list.map((index) => {
                        return (
                            <div className={'reviewBlock'}>
                                <p className={'userName'}>
                                    {this.props.info['users'][index]}
                                </p>

                                <p className={'reviewConcent'}>
                                    {this.props.info['reviews'][index]}
                                </p>

                                <img src={user1} alt={""} className={"reviewpic"} />
                            </div>);
                    })}
                </div>
            </div>
        );
    }
}

export default RestaurantInfo