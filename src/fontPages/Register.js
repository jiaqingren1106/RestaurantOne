import React, {useState} from "react";
import {setRoute, register} from "../redux/actions";
import { connect } from 'react-redux'
import "./SignIn.css"

const mapStateToProps = (state) => {
    return {
        route: state.route
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (new_route)=> dispatch(setRoute(new_route)),
        setUser: (user_obj) => dispatch(register(user_obj))
    }
}

const Register = (props)=> {
    const {setRoute, setUser} = props
    const [entered_user, setEntered_user] = useState({
        username: "",
        usernamec: "",
        password:"",
        passwordc:"",
    })
    const [warning, setWarning] = useState("")
    const [userType, setUserType] = useState("regular")
    const setType = (e) => {
        if (e.target.checked === true) {
            setUserType("restaurant")
        }
        else {
            setUserType("regular")
        }
    }
    const displayDocument = () => {
        if (userType === "regular") {

        }
        else {
            return (<div className="uploadBox">
                <label htmlFor="img">Select certificate image:</label>
                <input type="file"
                       id="fileUpload" name="avatar"
                       accept="image/png, image/jpeg"/>
                <button id="fileButton" onClick={ function(){
                    document.getElementById("fileUpload").click()} }
                        className="f6 link dim br-pill ba bw1 ph3 pv2 mb2 dib black">choose file</button>
            </div>)
        }
    }
    const onSubmit = () => {
        for(const field_ in entered_user){
            if (entered_user[field_] === ""){
                setWarning("have unfilled field")
                setEntered_user(entered_user)
                return
            }
        }
        if (entered_user.username !== entered_user.usernamec) {
            setWarning("username does not match")
            setEntered_user(entered_user)
            return;
        }
        if (entered_user.password !== entered_user.passwordc) {
            setWarning("password does not match")
            setEntered_user(entered_user)
            return;
        }
        register({
            username: entered_user.username,
            userType: userType,
            password: entered_user.password
        })

        setRoute("FirstPage")


    }
    return (
        <div className="signInContainer">

            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw8 center article-container
                shadow-5" >

                <main className="pa4 black-80">
                    <div className="measure center">
                        <fieldset  className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0 ">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f4" >Username</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={(e) => {entered_user.username = e.target.value}}/>
                                <label className="db fw6 lh-copy f4 ">Confirm Username</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"onChange={(e) => {
                                           entered_user.usernamec =
                                       e.target.value
                                       }}/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f4 " >Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                       type="password" onChange={(e) => {
                                           entered_user.password = e.target.value
                                }}/>
                                <label className="db fw6 lh-copy f4 " htmlFor="password">Confirm Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                       type="password"onChange={(e) => {
                                           entered_user.passwordc = e.target.value
                                }}/>
                            </div>
                            <p className="i red">
                                {warning}
                            </p>

                            <div className="flex items-center mb2">
                                <input className="mr2" type="checkbox"
                                       onChange={(event => {setType(event)})}/>
                                    <label  className="lh-copy">sign up as restaurant</label>
                            </div>
                            {displayDocument()}
                        </fieldset>
                        <div>
                            <button className=" br2 bw2 b ph3 pv2 input-reset ba b--black  bg-transparent grow pointer f6 dib"
                                   onClick={() => onSubmit()}> Create </button>
                        </div>
                    </div>
                </main>
            </article>
        </div>)
};
export default connect(mapStateToProps, mapDispatchToProps)(Register)
