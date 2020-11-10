import React from 'react';
import "./styles.css"
import checkPic from "../../images/checkPic.png"
import { connect } from 'react-redux';
import user1 from '../../images/user-review-1.jpg'
import user2 from '../../images/user-review-2.jpg'
import user3 from '../../images/user-review-3.jpg'
import MapContainer from '../MapContainer/MapContainer'
import userPic from '../../images/userPhoto.jpg'
import {register, setRoute} from "../../redux/actions";

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

class RestaurantInfo extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);

        this.reviews = this.props.info['reviews'];
        this.users = this.props.info['users'];
        this.reviewpic = this.props.info['reviewpic'];
    }


    handleSubmit(event) {
        this.reviews.push(this.state.value)
        if (this.props.user.username === "") {
            alert("have to login to make comment")
        }
        else{
            this.users.push(this.props.user.username)
            this.reviewpic.push('none')
            this.setState({value: this.state.value});
        }

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit2(event) {
        event.preventDefault();
    }

    render() {

        const length = this.reviews.length

        let i;
        let list = []
        for(i = 0;i < length; i++){
            list.push(i);
        }

        return (
            <div className={"respage"}>
                <div className={"RestaurantInfo"}>

                    <div className={"RestaurantTop"}>
                        <div className={"RestaurantLeft"}>
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
                        </div>
                        <div  className={"googleMap"}>
                            <MapContainer/>
                        </div>
                    </div>


                    <p className={"r"}>
                        Review
                    </p>

                    {list.map((index) => {
                        return (
                            <div className={'reviewBlock'}>
                                <div className={'reviewBlock2'}>
                                    <div className={'userInfo'}>
                                        <img src={userPic} alt={''} className={'userPic'} />
                                        <p className={'userName1'} >
                                            {this.users[index]}
                                        </p>
                                    </div>

                                    <p className={'reviewConcent'}>
                                        {"Comments:  " + this.reviews[index]}
                                    </p>

                                    <img src={user1} alt={""} className={"reviewpic"} />
                                </div>
                                <>
                                <hr
                                    style={{
                                        margin: '1em auto',
                                    }} />
                                </>
                            </div>);
                    })}
                    </div>

                    <div className={"rate"}>
                        <form onSubmit={this.handleSubmit2}>
                            <label>
                                Select your rate:
                                <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="1">1</option>

                                    <option value="2">2</option>

                                    <option value="3">3</option>

                                    <option value="4">4</option>

                                    <option value="5">5</option>
                                </select>
                            </label>
                        </form>
                    </div>

                    <div>
                    <textarea className={"textEditor"}
                        ref={c => (this.textarea = c)}
                        placeholder="Type your comments here!"
                        rows={10}
                        cols={100}
                        defaultValue=""
                        onChange={this.handleChange}
                    />
                    </div>

                    <button onClick={this.handleSubmit} className={"submitButton"}>
                        submit
                    </button>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantInfo)