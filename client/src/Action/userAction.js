
import ENV from '../config.js'
import {getImageForReview} from "./imageAction"
import {getImageForReviewTwo} from "./imageAction"
import {createRestaurant} from "./restaurantAction"
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

export const createUser = async (userName, userPassword, userEmail, rest_arr) => {
    let type = "regular";
    let jsonInput = {
        name: userName,
        password: userPassword,
        email:userEmail,
        type: type
    }
    for (const field_ in rest_arr) {
        if (rest_arr[field_] !== "") {
            console.log(field_)
            type = "restaurant"
            break
        }
    }

    const url = `${API_HOST}/users`;

    if(type === "restaurant"){
        const {
            name, 
            address, 
            description, 
            postcode, 
            opentime 
        } = rest_arr;

        const foundRestaurant = JSON.parse(
            createRestaurant(
                name, 
                address, 
                description, 
                postcode, 
                opentime
            )
        );

        jsonInput = {
            name: userName,
            password: userPassword,
            email:userEmail,
            type: type,
            isNewRestaurant: true,
            restaurant_id: foundRestaurant._id
        }
    }
    console.log(jsonInput);
    
    const UserBody = JSON.stringify(jsonInput);
    console.log("userbody: ", UserBody)

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
                console.log("Could not get description");
            }
        })
        .catch(error => {
            console.log(error);
        });
};