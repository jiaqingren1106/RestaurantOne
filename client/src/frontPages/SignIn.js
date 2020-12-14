// import React, {useEffect, useState} from 'react';
// import './SignIn.css'
// import { connect } from 'react-redux'
// import {register, setRoute} from "../redux/actions";
// // import {getUserInLogin} from "../Action/userAction";
// import {login} from "../Action/authAction";

// const mapStateToProps = (state) => {
//     return {route:
//         state.routeState.route,
//         user: state.userState}

// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setRoute: (new_route)=> dispatch(setRoute(new_route)),
//         setUser: (user_obj) => dispatch(register(user_obj))
//     }
// }

// const SignIn = (props) => {
//     const setRoute = (newRoute) => {
//         let targetRoute = `/`
//         if (!(newRoute=== "StartUp" || newRoute === "")){
//             targetRoute = `${newRoute}`
//         }

//         props.history.push(targetRoute)
//         props.setRoute(newRoute)
//     }
//     const [entered_user, setEntered_user] = useState({
//         email: "",
//         password: "",
//     })
//     const [warning, setWarning] = useState("")
//     const [loginLoadingMsg, setLoginLoadingMsg] = useState("")


//     const changeRoute = () => {
//         if (props.user.username === "") {
//             return
//         }
//         if (props.user.userType === "admin") {
//             setRoute("AdminPage")
//         }
//         else if (props.user.userType === "restaurant" || props.user.userType === "regular"){
//             setRoute("FirstPage")
//         } else {
//             alert("something went wrong!")
//         }
//     }
//     useEffect(changeRoute, [props.user])
//     const handleLogin = async () => {

//         try{
//             let foundUser = await login(entered_user.email, entered_user.password);

//             if(!foundUser){
//                 setWarning("no such email or password is incorrect")
//                 setEntered_user({
//                     email: "",
//                     password: "",
//                 })
//                 return;
//             }

//             // console.log("email:", foundUser.email)
//             // console.log("id:", foundUser._id)
//             // console.log("images:", foundUser.images)
//             // console.log("password:", foundUser.password)
//             // console.log("userType:", foundUser.type)
//             // console.log("username:", foundUser.name)
//             // console.log("restaurant_id:", foundUser.restaurant_id)

//             props.setUser({
//                 email: foundUser.email,
//                 id: foundUser._id,
//                 images: foundUser.images,
//                 password: foundUser.password,
//                 userType: foundUser.type,
//                 username: foundUser.name,
//                 restaurant_id:foundUser.restaurant_id
//             });
//             // console.log("USER:", props.user)


//         } catch(e){
//             console.log(e);
//         }
//     }

//     return (
//         <div className="signInContainer">

//                 <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw8 center article-container
//                 shadow-5 signInContent signInBox " >

//                     <main className="pa4 black-80">
//                         <div className="measure center">
//                             <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
//                                 <legend className="f1 fw6 ph0 mh0 ">Sign In</legend>
//                                 <div className="mt3">
//                                     <label className="db fw6 lh-copy f4 " >Email</label>
//                                     <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//                                            onChange={(e) => {entered_user.email = e.target.value}}/>
//                                 </div>
//                                 <div className="mv3">
//                                     <label className="db fw6 lh-copy f4 " htmlFor="password">Password</label>
//                                     <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//                                            type="password" name="password" id="password"
//                                     onChange={(e) => {entered_user.password = e.target.value}}/>
//                                 </div>
//                                 <p className="i red">
//                                     {warning}
//                                 </p>
//                                 <p className="i dark-blue">
//                                     {loginLoadingMsg}
//                                 </p>
//                             </fieldset>
//                             <div className="">
//                                 <button className=" br2 bw2 b ph3 pv2 input-reset ba b--black  bg-transparent grow pointer f6 dib"
//                                        onClick={() =>handleLogin()}
//                                        > Login </button>
//                             </div>
//                             <div className="lh-copy mt3 ">
//                                 <a href="#0" onClick={() => setRoute("Register")} className="f6 link dim black db">Register</a>
//                             </div>
//                             <div className="lh-copy mt3 ">
//                                 <a href="#0" onClick={() => setRoute("StartUp")} className="f6 link dim black db">Back To Start</a>
//                             </div>
//                         </div>
//                     </main>
//                 </article>

//         </div>)
// }

// export default connect(mapStateToProps,mapDispatchToProps)(SignIn)



import React, {useEffect, useState} from 'react';
import './SignIn.css'
import { connect } from 'react-redux'
import {register, setRoute} from "../redux/actions";
import {getUserInLogin} from "../Action/userAction";

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

const SignIn = (props) => {
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
        password: "",
    })
    const [warning, setWarning] = useState("")
    const [loginLoadingMsg, setLoginLoadingMsg] = useState("")
    const [result, setResult] = useState([])

    const checkLoginInfo = () => {
    if(result.length > 0){
        let targetUser = (result).filter((user => user.name === entered_user.username
            && user.password === entered_user.password))
        if (targetUser.length === 0) {
            setLoginLoadingMsg("")
            setWarning("no such user or password is incorrect")
            setEntered_user(entered_user)
            return
        }
        let new_targetUser = {
            username: targetUser[0].name,
            userType: targetUser[0].type,
            password: targetUser[0].password,
            id: targetUser[0]._id,
            email: targetUser[0].email,
            images: targetUser[0].images,
            restaurant_id: targetUser[0].restaurant_id,
            reviews: targetUser[0].reviews,  
            follows: targetUser[0].follows,
        }

        console.log(new_targetUser)

        props.setUser(new_targetUser)
        if (targetUser[0].isAdmin) {
            setRoute("AdminPage")
        }
        else {
            setRoute("FirstPage")
            localStorage.setItem('userData', JSON.stringify(new_targetUser))
        }
    }

    }
    useEffect(checkLoginInfo, [result])
    const handleLogin = () => {
        setResult([])
        getUserInLogin(setResult, result)


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
                                <p className="i dark-blue">
                                    {loginLoadingMsg}
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