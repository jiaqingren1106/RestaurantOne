import React from 'react';
import "./styles.css"
import checkPic from "../../images/checkPic.png"
import { connect } from 'react-redux';
import user1 from '../../images/user-review-1.jpg'
import user2 from '../../images/user-review-2.jpg'
import user3 from '../../images/user-review-3.jpg'
import MapContainer from '../MapContainer/MapContainer'
import userPic from '../../images/userPhoto.jpg'
import { register, setRoute } from "../../redux/actions";
import { addReview } from "../../Action/reviewAction"
import { getRestaurantReviews } from "../../Action/restaurantAction"

let comp;

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

class RestaurantInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '', reviews: [] };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);

        this.state.userId = this.props.info.userId
        this.state.reviews = this.props.info['reviews'];
        this.reviewpic = this.props.info['reviewpic'];
        this.update = false;
    }


    handleSubmit(event) {

        addReview(this, this.state.value, this.props.user.id, this.props.info.restaurantId)
        // getRestaurantReviews(this, this.props.info.restaurantId)
        if (this.state.userName != undefined) {
            const value = this.state.value
            this.state.reviews.push([this.props.user.username, this.state.userImage, value])
        }

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit2(event) {
        event.preventDefault();
    }

    render() {

        // console.log(this.state.userName)
        // console.log(this.state.userImage)
        console.log(this.state.reviews)

        const reviewLength = (this.state.reviews.length == 0)

        if (reviewLength == true) {
            comp = <div> </div>
        } else {
            let review_list = []
            for (let i = 0; i < this.state.reviews.length; i++) {
                review_list.push(i)
            }

            comp = review_list.map((index) => {
                return (
                    <div className={'reviewBlock'}>
                        <div className={'reviewBlock2'}>

                            <div className={'userInfo'}>
                                <img src={this.state.reviews[index][1]} alt={'https://res.cloudinary.com/ddmruegqh/image/upload/v1607896942/jmdv0vhsyttwndfx4umg.jpg'} className={"userPic"} />

                                <p className={'userName1'}>
                                    {this.state.reviews[index][0]}
                                </p>
                            </div>
                        </div>
                        <p className={'reviewConcent'}>
                            {"Comments:  " + this.state.reviews[index][2]}
                        </p>

                        <hr
                            style={{
                                margin: '1em auto',
                            }} />

                    </div>);
            })
        }


        const length = this.state.reviews.length

        let i;
        let list = []
        for (i = 0; i < length; i++) {
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

                            <img className={"checkPic"} src={checkPic} alt={"None"} />

                            <p className={"condition"}>
                                {this.props.info.safe}
                            </p>
                        </div>
                        <div className={"googleMap"}>
                            <MapContainer />
                        </div>
                    </div>


                    <p className={"r"}>
                        Review
                    </p>

                    {comp}
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