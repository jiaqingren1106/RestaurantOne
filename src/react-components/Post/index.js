import React from 'react'
import burger from "../../images/burger.jpg"
import './styles.css'
import {register, setRoute} from "../../redux/actions";
import {connect} from "react-redux";
import userPic from '../../images/userPhoto.jpg'
import {withRouter} from "react-router-dom";
import {getDescription} from "../../Action/blogAction"

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
        this.state = {value: '', id: "5fcefe28b06a85d4258bdd3a", description:"", title: "", date: "", image:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        getDescription(this);
    }
    
    handleSubmit(event) {
        if(this.props.user.username === ""){
            alert("have to login to make comment")
        }else {
            console.log(this.state.value)
            this.reviews.push(this.state.value)
            console.log(this.reviews)
            this.users.push(this.props.user.username)
            this.setState({value: this.state.value});
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

        return(

            <div className={"postPage"}>
                <button className={"restaurantName"} onClick={() => setRoute("RestaurantPage")}>
                    Blog
                </button>

                <div className={"post"}>

                    <h1 className={"Posttitle"}>
                        {this.state.title}
                    </h1>

                    <img src={burger} className={"blogpic"} />

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

                    {list.map((index) => {
                        return (
                            <div className={'commentsBlock'}>
                                <div className={'userInfo1'}>
                                    <img src={userPic} alt = {''} className={"userPicture1"} />

                                    <p className={'userName'}>
                                        {this.users[index]}
                                    </p>
                                </div>
                                <p className={'reviewContent'}>
                                    {"Comments:  " + this.reviews[index]}
                                </p>

                            </div>);
                    })}

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
