import React, {useEffect, useState} from "react";
import {setRoute, register} from "../redux/actions";
import { connect } from 'react-redux'
import {createUser} from '../Action/userAction'
import { getElementError } from "@testing-library/react";
import {createImage} from '../Action/imageAction'
import {createRestaurant} from "../Action/restaurantAction"
import "./SignIn.css"
const delay = ms => new Promise(res => setTimeout(res, ms));


let state = {}

let submitStatus = false
const mapStateToProps = (state) => {
    return {
        route: state.routeState.route
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (new_route)=> dispatch(setRoute(new_route)),
        setUser: (user_obj) => dispatch(register(user_obj))
    }
}

const Register = (props)=> {


    const setRoute = (newRoute) => {
        let targetRoute = `/`
        if (!(newRoute=== "StartUp" || newRoute === "")){
            targetRoute = `${newRoute}`
        }

        props.history.push(targetRoute)
        props.setRoute(newRoute)
    }
    const [entered_user, setEntered_user] = useState({
        username: "",
        usernamec: "",
        password:"",
        passwordc:"",
        email:"",
        emailc:""
    }
)
    const [certificate, setCertificate] = useState(null)
    const [certificate1, setCertificate1] = useState(null)

    const [uploadimage, setUploadImage] = useState(null)
    const [entered_restaurant, setEntered_restaurant] = useState({
        restName: "",
        restDescription: "",
        restAddress: "",
        restOpentime: ""
    })
    const [warning, setWarning] = useState("")
    const [userType, setUserType] = useState("regular") // regular restaurant
    const [submitMsg, setSubmitMsg] = useState("")
    const [restaurantMsg, setRestaurantMsg] = useState("")
    const [userMsg, setUserMsg] = useState("")
    const [restaurantid, setRestaurantid] = useState("")
    const [imageId, setImageId] = useState("")

    const setType = (e) => {
        if (e.target.checked === true) {
            setUserType("restaurant")
        }
        else {
            setUserType("regular")
        }
    }



    const displayRestaurant = () => {
        if (userType === "regular") {}
        else {
            return (
                <div>
                    <div className="uploadBox">
                        <label htmlFor="img">Select Certificate image:</label>

                        <form className="image-form" id = "form1" onChange={(e) => {
                            e.preventDefault();
                            createImage(document.getElementById("form1"), setImageId)
                            setCertificate(document.getElementById("form1"))
                            // createImage(certificate, setimageId)
                            }}>
                            <div class="image-form__field" id = "imageI">
                                <label>Image:</label>
                                <input name="image" type="file" />
                            </div>
                        </form>


                        <label htmlFor="img">Select restaurant image:</label>
                        <form className="image-form" id = "form5" onChange={(e) => {
                            e.preventDefault();
                            createImage(document.getElementById("form5"), setUploadImage)
                            setCertificate1(document.getElementById("form5"))
                            }}>
                            <div class="image-form__field" id = "imageI">
                                <label>Image:</label>
                                <input name="image" type="file" />
                            </div>
                        </form>


                        
                    </div>
                    <label className="db fw6 lh-copy f4" >Restaurant Name</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 registerInputField" onChange={(e) => {entered_restaurant.restName = e.target.value}}/>
                    <label className="db fw6 lh-copy f4" >Restaurant Descriptions</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 registerInputField" onChange={(e) => {entered_restaurant.restDescription = e.target.value}}/>
                    <label className="db fw6 lh-copy f4" >Restaurant Address</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 registerInputField" onChange={(e) => {entered_restaurant.restAddress = e.target.value}}/>
                    <label className="db fw6 lh-copy f4" >Restaurant Open Time</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 registerInputField" onChange={(e) => {
                        entered_restaurant.restOpentime = e.target.value         
                        }}/>
                </div>
                )
        }
    }
    const restaurantOnSubmit = () => {
        console.log(restaurantid)
        let result = true
        for (const field_ in entered_restaurant) {
            if (entered_restaurant[field_] === "") {
                console.log(field_)
                result = false
            }
        }
        if (certificate === null){
            result = false
        }
        if (result === false) {
            setSubmitMsg("")
            setEntered_restaurant(entered_restaurant)
            setWarning("has unfilled field in restaurant")
        }
        return result
    }

    useEffect(() => {createUser(entered_user.username, entered_user.password, entered_user.email, setUserMsg, userType, restaurantid)}, [restaurantid]) 
    useEffect(() => {       

                            if(submitStatus == true){
                                if(userMsg != "success"){
                                    setSubmitMsg("User sign up fails")
                                    setUserMsg("")
                                }else if(restaurantMsg != "success" && userType === "restaurant"){
                                    setSubmitMsg("Restaurant sign up fails")
                                    setRestaurantMsg("")
                                }else{
                                    setSubmitMsg("Success sign up")
                            }
    }},
    [userMsg])


    const onSubmit = () => {
        submitStatus = true
        for(const field_ in entered_user){
            if (entered_user[field_] === "" ){
                setWarning("have unfilled field")
                setSubmitMsg("")
                setEntered_restaurant(entered_restaurant)
                setEntered_user(entered_user)
                return
            }
        }
        if (entered_user.username !== entered_user.usernamec) {
            setWarning("username does not match")
            setSubmitMsg("")
            setEntered_restaurant(entered_restaurant)
            setEntered_user(entered_user)
            return;
        }
        if (entered_user.password !== entered_user.passwordc) {
            setWarning("password does not match")
            setSubmitMsg("")
            setEntered_restaurant(entered_restaurant)
            setEntered_user(entered_user)
            return;
        }

        if (entered_user.email !== entered_user.emailc) {
            setWarning("email does not match")
            setSubmitMsg("")
            return;
        }
        let result = true;
        if (userType === "restaurant") {
            result = restaurantOnSubmit()
        }


        if (result)  {
            setWarning("")
            setSubmitMsg("uploading data...")
            if(userType === "regular"){
                console.log(entered_user)
                createUser(entered_user.username, entered_user.password, entered_user.email, setUserMsg, userType, "")
            }else{
                console.log(uploadimage)
                createRestaurant(entered_restaurant.restName, entered_restaurant.restDescription, entered_restaurant.restAddress, entered_restaurant.restOpentime,imageId, setRestaurantMsg, setRestaurantid, uploadimage)
                // createUser(entered_user.username, entered_user.password, entered_user.email, setSubmitMsg, userType, restaurantid)
            }
        }
        // console.log(restaurantMsg)
        // console.log(userMsg)

        if(restaurantMsg == "fail"){
            setSubmitMsg("Restaurant sign up fails")
        }

        if(userMsg == "fail"){
            setSubmitMsg("User sign up fails")
        }
    }
    return (
        <div className="signInContainer">

            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw8 center article-container
                shadow-5 signInBox" >

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
                                       type="password" onChange={(e) => {
                                           entered_user.passwordc = e.target.value
                                }}/>
                            </div>


                            <div className="mt3">
                                <label className="db fw6 lh-copy f4 " >Email</label>
                                <input className=" pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        onChange={(e) => {
                                           entered_user.email = e.target.value
                                }}/>
                                <label className="db fw6 lh-copy f4 " htmlFor="password">Confirm Email</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                       type="password" onChange={(e) => {
                                           entered_user.emailc = e.target.value
                                }}/>
                            </div>


                            <div className="flex items-center mb2">
                                <input className="mr2" type="checkbox"
                                       onChange={(event => {setType(event)})}/>
                                    <label  className="lh-copy">sign up as restaurant</label>
                            </div>
                            {displayRestaurant()}
                            <p className="i red">
                                {warning}
                            </p>
                            <p className={submitMsg === "uploading data..."? "i dark-blue" : "i dark-green"}>
                                {submitMsg}
                            </p>
                        </fieldset>
                        <div>
                            <button className=" br2 bw2 b ph3 pv2 input-reset ba b--black  bg-transparent grow pointer f6 dib"
                                   onClick={() => onSubmit()}> Create </button>
                        </div>
                        <div className="lh-copy mt3 ">
                            <a href="#0" onClick={() => setRoute("SignIn")} className="f6 link dim black db">Sign In</a>
                        </div>
                        <div className="lh-copy mt3 ">
                            <a href="#0" onClick={() => setRoute("StartUp")} className="f6 link dim black db">Back To Start</a> 
                        </div>
                    </div>
                </main>
            </article>
        </div>)
};
export default connect(mapStateToProps, mapDispatchToProps)(Register)