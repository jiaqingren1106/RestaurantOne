import ENV from '../config.js'
const API_HOST = ENV.api_host

// A function to send a POST request with the user to be logged in
export const login = async (email, password) => {
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
    try{
        const foundUser = await fetch(request)
        .then(res => {
            console.log("response: ", res);
            if (res.status === 200) {
                return res.json();
            }
        }).then( json =>{
            if (json.currentUser !== undefined) {
                return json.currentUser
            }
        })

        return foundUser;
    } catch(e){
        console.log(e)
    }
};

// A function to send a GET request to logout the current user
export const logout = async (app) => {
    const url = `${API_HOST}/logout`;

    try{
        const foundUser = await fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })

        return foundUser;
    } catch(e){
        console.log(e)
    }
    
};