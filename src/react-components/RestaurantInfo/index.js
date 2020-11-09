import React from 'react';
import "./styles.css"
import checkPic from "../../images/checkPic.png"
import user1 from '../../images/user-review-1.jpg'
import user2 from '../../images/user-review-2.jpg'
import user3 from '../../images/user-review-3.jpg'


class RestaurantInfo extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.reviews = this.props.info['reviews'];
        this.users = this.props.info['users'];
        this.reviewpic = this.props.info['reviewpic'];
    }


    componentDidMount() {
        this.textarea.focus();
    }

    handleSubmit(event) {
        console.log(this.state.value)
        this.reviews.push(this.state.value)
        console.log(this.reviews)
        this.users.push('Anonymous')
        this.reviewpic.push('none')
        this.setState({value: this.state.value});
    }

    handleChange(event) {
        this.setState({value: event.target.value});
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
                                    {"User: " + this.users[index]}
                                </p>

                                <p className={'reviewConcent'}>
                                    {"Comments:  " + this.reviews[index]}
                                </p>

                                <img src={user1} alt={""} className={"reviewpic"} />
                            </div>);
                    })}
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

export default RestaurantInfo