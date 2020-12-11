
import ENV from '../config.js'
import {getImageForReview} from "./imageAction"
import {getImageForReviewTwo} from "./imageAction"
const API_HOST = ENV.api_host

export const getUser = (Comp, user_id, review_content) => {
    const url = `${API_HOST}/users/${user_id}`
    const request = new Request(url,
        {
            method:"get"
        })
        
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                alert("Could not get description");
            }
        })
        .then(json => {
            const userName = json.name
            const userImage = json.images[0]

            getImageForReview(Comp, userName, userImage, review_content)
        })
        .catch(error => {
            console.log(error);
        });
};

export const getUserInLogin = (setResult, result) => {
    const url = `${API_HOST}/users`
    const request = new Request(url,
        {
            method:"get"
        })
        
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                alert("Could not get description");
            }
        })
        .then(json => {
            setResult(json)
            
        })
        .catch(error => {
            console.log(error);
        });
};



export const getUserForReview = (Comp, user_id) => {
    const url = `${API_HOST}/users/${user_id}`
    const request = new Request(url,
        {
            method:"get"
        })
        
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                alert("Could not get description");
            }
        })
        .then(json => {
            const userName = json.name
            const userImage = json.images[0]
            
            getImageForReviewTwo(Comp, userName, userImage)
        })
        .catch(error => {
            console.log(error);
        });
};

export const createUser =  (userName, userPassword, userEmail, setSubmitMsg) => {
    const url = `${API_HOST}/users`
    const UserBody = JSON.stringify({
        name: userName,
        password: userPassword,
        email:userEmail
    })
    console.log(UserBody)

    const request = new Request(url,
        {
            method:"post",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body: UserBody
        })
        
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                alert("Could not get description");
            }
        })
        .then(json => {
            setSubmitMsg(json.condition)
        })
        .catch(error => {
            console.log(error);
        });
};