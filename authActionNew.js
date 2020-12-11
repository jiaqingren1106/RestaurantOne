import ENV from './src/config.js'
// import {getImage} from "./imageAction"
// import {getReview} from "./reviewAction"
const API_HOST = ENV.api_host

// A function to send a POST request with the user to be logged in
export const login = (email, password, setWarning, setUser, setRoute) => {
    // Create our request constructor with all the parameters we need
    const request = new Request(`${API_HOST}/login`, {
        method: "post",
        body: JSON.stringify({
            email: email,
            password: password
        }),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            setUser();
            if (json.isAdmin) {
                setRoute("AdminPage");
            }else{
                setRoute("FirstPage");
            }
        })
        .catch(error => {
            setWarning(error.message);
            console.log(error);
        });
};

// A function to send a GET request to logout the current user
export const logout = (app) => {
    const url = `${API_HOST}/logout`;

    fetch(url)
        .then(res => {
            app.setState({
                currentUser: null,
                message: { type: "", body: "" }
            });
        })
        .catch(error => {
            console.log(error);
        });
};