import React, {useState} from "react";
import {setRoute, register} from "../redux/actions";
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
    const entered_user = {
        username: "",
        usernamec: "",
        password:"",
        passwordc:"",
    }
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
                <input type="file" className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib black"
                       id="avatar" name="avatar"
                       accept="image/png, image/jpeg"/>
            </div>)
        }
    }
    const onSubmit = () => {
        for(const key_ in entered_user){
            if (entered_user.key_ === ""){
                setWarning("have unfilled field")
                return
            }
        }
        if (entered_user.username !== entered_user.usernamec) {
            setWarning("username does not match")
            return;
        }
        if (entered_user.password !== entered_user.passwordc) {
            setWarning("password does not match")
            return;
        }
        props.setUser({})

    }
    return (
        <div className="signInContainer">

            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw8 center article-container
                shadow-5 signInContent signInBox " >

                <main className="pa4 black-80">
                    <form className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
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
                                <label className="db fw6 lh-copy f4 " htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                       type="password" name="password" id="password" onChange={(e) => {
                                           entered_user.password = e.target.value
                                }}/>
                                <label className="db fw6 lh-copy f4 " htmlFor="password">Confirm Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                       type="password" name="password" id="password" onChange={(e) => {
                                           entered_user.passwordc = e.target.value
                                }}/>
                            </div>
                            <p className="i red">
                                {warning}
                            </p>

                            <div className="flex items-center mb2">
                                <input className="mr2" type="checkbox"
                                       onChange={(event => {setType(event)})}/>
                                    <label htmlFor="airbud" className="lh-copy">sign up as restaurant</label>
                            </div>
                            {displayDocument()}
                        </fieldset>
                        <div>
                            <input className=" br2 bw2 b ph3 pv2 input-reset ba b--black  bg-transparent grow pointer f6 dib"
                                   onClick={() => setRoute("FirstPage")} type="submit"
                                   value="Create"/>
                        </div>
                    </form>
                </main>
            </article>

        </div>)
};
export default Register