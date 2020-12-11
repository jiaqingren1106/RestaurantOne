import React from 'react'
import burger from "../../images/burger.jpg"
import './styles.css'
import {register, setRoute} from "../../redux/actions";
import {connect} from "react-redux";
import userPic from '../../images/userPhoto.jpg'
import {withRouter} from "react-router-dom";
import {getDescription} from "../../Action/postAction"
import { waitFor } from '@testing-library/react';
import { components } from 'react-select';
import {addReviewFromPost} from '../../Action/reviewAction'

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


class Post extends React.Component{

    constructor(props) {
        super(props);
        this.reviews = ['Hebetude joyeuses' +
        ' assister nul ton prochain les commence massacre. Tout ni elle pris il au ma vaut sent hein. Ils pleine net enleve tenter maison centre blancs. Ils voeux que aimer bas linge des verre. Instrument maintenant en miserables au defilaient he. Se torture enlever en dessein. Peur moi age sang deja fort etat fin. Ronfle car car mon ces pareil reunir humain metres peuple. Corbeille sacrifice convertir des ses militaire ans.'];
        this.users = ['ShuaiYuan'];
        this.state = {value: '', id: "5fcefe28b06a85d4258bdd3b", postImage: [],description:"", title: "", date: "", image:[], reviews:[], userid: "5fcfbd01794cb32eb4a928ec"};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        getDescription(this)
        console.log(this.props)
    }
    
    handleSubmit(event) {
        if(this.state.userid == ""){
            alert("have to login to make comment")
        }else {
            // this.reviews.push(this.state.value)
            // this.users.push(this.props.user.username)
            // this.setState({value: this.state.value});
            addReviewFromPost(this, this.state.value, this.state.userid, this.state.id)
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value});
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

        let i;
        let list = []
        for(i = 0; i < this.users.length; i++){
            list.push(i);
        }
        let comp;
        const reviewLength = (this.state['reviews'].length == 0)


        if(reviewLength == true){
            comp = <div> </div>
        }else{
            let review_list = []
            for(let i = 0; i < this.state['reviews'].length; i ++){
                review_list.push(i)
            }

            comp = review_list.map((index) => {
                return (
                    <div className={'commentsBlock'}>
                        <div className={'userInfo1'}>
                            <img src={this.state['reviews'][index][1]} alt = {''} className={"userPicture1"} />

                            <p className={'userName'}>
                                {this.state['reviews'][index][0]}
                            </p>
                        </div>
                        <p className={'reviewContent'}>
                            {"Comments:  " + this.state['reviews'][index][2]}
                        </p>

                    </div>);
            })
        }


        return(

            <div className={"postPage"}>
                <button className={"restaurantName"} onClick={() => setRoute("RestaurantPage")}>
                    Blog
                </button>

                <div className={"post"}>

                    <h1 className={"Posttitle"}>
                        {this.state.title}
                    </h1>

                    
                    {this.state['image'].map((image) => {
                        return (
                            <div className>
                                <img src={image} alt = {''} className={"blogpic"} />
                            </div>);
                    })}


                    <p className={"date"}>
                        {this.state.date}
                    </p>

                    <div className={"PostcontentDiv"}>
                        <p className={"Postcontent"}>
                            {this.state.description}
                        </p>
                    </div>

                    <p className={"commentsTitle"}>
                        Comments
                    </p>

                    {comp}
                    {/* {this.state['reviews'].map((index) => {
                        return (
                            <div className={'commentsBlock'}>
                                <div className={'userInfo1'}>
                                    <img src={this.state['reviews'][index]} alt = {''} className={"userPicture1"} />

                                    <p className={'userName'}>
                                        {this.state['reviews'][index]}
                                    </p>
                                </div>
                                <p className={'reviewContent'}>
                                    {"Comments:  " + this.state['reviews'][index]}
                                </p>

                            </div>);
                    })} */}

                    <div className = {"PosttextEditorDiv"}>
                        <textarea className={"PosttextEditor"}
                                ref={c => (this.textarea = c)}
                                placeholder="Type your comments here!"
                                rows={10}
                                cols={100}
                                defaultValue=""
                                onChange={this.handleChange}
                        />
                    </div>

                    <button onClick={this.handleSubmit} className={"PostsubmitButton"}>
                        submit
                    </button>

                </div>
            </div>
        )

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Post));
