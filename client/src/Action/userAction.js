
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


export const getFollowerToArray = (Comp, result, id) => {
    const url = `${API_HOST}/users/${id}`
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
            console.log(json.name)
            result.push({name: json.name, email: json.email})
            Comp.setState({follower: result})
            
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

    const request = new Request(url,
        {
            method:"post",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body: UserBody
        })
    
    console.log(UserBody)

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



export const updateUserInfo = (data, userid) => {
    const url = `${API_HOST}/users/${userid}`
    const UserBody = JSON.stringify({name:data.name, email:data.email, password:data.password, isAdmin:false})
    console.log(UserBody)


    console.log(UserBody)

    const request = new Request(url,
        {
            method:"put",
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
                alert("Could not get restaurants");
            }
        })
        .then(json => {
            return json
        })
        .catch(error => {
            console.log(error);
        });
};


export const setAndUpdateUser = (Comp, userid) => {
    const url = `${API_HOST}/users/${userid}`

    const request = new Request(url,
        {
            method:"get",
        })

    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                alert("Could not get restaurants");
            }
        })
        .then(json => {
            json.name = Comp.state.username;
            json.password = Comp.state.password;
            json.email = Comp.state.email;

            updateUserInfo(json, userid);

        })
        .catch(error => {
            console.log(error);
        });
};