import React, {useState} from 'react';
import './SignIn.css'
import { connect } from 'react-redux'
import {register, setRoute} from "../redux/actions";
import loginData from "../data/LoginData";

const mapStateToProps = (state) => {
    return {route:
        state.routeState.route,
        user: state.userState}

}
const mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (new_route)=> dispatch(setRoute(new_route)),
        setUser: (user_obj) => dispatch(register(user_obj))
    }
}

const SignIn = ({setRoute, setUser}) => {
    const [entered_user, setEntered_user] = useState({
        username: "",
        password: "",
    })
    const [warning, setWarning] = useState("")
    const handleLogin = () => {
        let targetUser = loginData.filter((user => user.username === entered_user.username
            && user.password === entered_user.password))
        if (targetUser.length === 0) {
            setWarning("no such user or password is incorrect")
            setEntered_user(entered_user)
            return
        }
        setUser(targetUser[0])
        if (targetUser[0].userType === "admin") {
            setRoute("AdminPage")
        }
        else {
            setRoute("FirstPage")
        }


    }
    return (
        <div className="signInContainer">

                <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw8 center article-container
                shadow-5 signInContent signInBox " >

                    <main className="pa4 black-80">
                        <div className="measure center">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f1 fw6 ph0 mh0 ">Sign In</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f4 " >Username</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                           onChange={(e) => {entered_user.username = e.target.value}}/>
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f4 " htmlFor="password">Password</label>
                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                           type="password" name="password" id="password"
                                    onChange={(e) => {entered_user.password = e.target.value}}/>
                                </div>
                                <p className="i red">
                                    {warning}
                                </p>
                            </fieldset>
                            <div className="">
                                <button className=" br2 bw2 b ph3 pv2 input-reset ba b--black  bg-transparent grow pointer f6 dib"
                                       onClick={() =>handleLogin()}
                                       > Login </button>
                            </div>
                            <div className="lh-copy mt3 ">
                                <a href="#0" onClick={() => setRoute("Register")} className="f6 link dim black db">Register</a>
                            </div>
                            <div className="lh-copy mt3 ">
                                <a href="#0" onClick={() => setRoute("StartUp")} className="f6 link dim black db">Back To Start</a>
                            </div>
                        </div>
                    </main>
                </article>

        </div>)
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)