import React from "react";

const Register = ({setRoute})=> {
    return (
        <div className="signInContainer">

            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw8 center article-container
                shadow-5 signInContent signInBox " >

                <main className="pa4 black-80">
                    <form className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0 ">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f4 " htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email"
                                       name="email-address" id="email-address"/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f4 " htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                       type="password" name="password" id="password"/>
                                <label className="db fw6 lh-copy f4 " htmlFor="password">Confirm Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                       type="password" name="password" id="password"/>
                            </div>
                        </fieldset>
                        <div className="">
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