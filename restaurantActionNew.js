
import { components } from 'react-select';
import ENV from '../config.js'
import {getReview} from './reviewAction'
import {getImage} from './imageAction'
import {getMultipleDescription} from './postAction'
const API_HOST = ENV.api_host

export const getRestaurants = (Comp) => {
    const url = `${API_HOST}/restaurants`

    const request = new Request(url,
        {
            method:"get"
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
            Comp.setState({restaurants: json})
        })
        .catch(error => {
            console.log(error);
        });
};


export const getRestaurantsByID = (Comp, id) => {
    const url = `${API_HOST}/restaurants/${id}`
    console.log(url)

    const request = new Request(url,
        {
            method:"get"
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
            Comp.setState({name: json.name, address:json.address, 
                description: json.description, rating: json.rating, opentime: json.opentime,
                safe: json.safe, posts:json.posts}, function(){
                    for(let i = 0; i < json['reviews'].length; i ++){
                        getReview(Comp, json['reviews'][i])
                    }
                    for(let i = 0; i < json['image'].length; i++){
                        getImage(Comp, json['image'][i])
                    }
                })    

        })
        .catch(error => {
            console.log(error);
        });
};

export const getRestaurantsPost = (Comp, id) => {
    const url = `${API_HOST}/restaurants/${id}`

    console.log(url)
    const request = new Request(url,
        {
            method:"get"
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
            for(let i = 0; i < json.posts.length; i++){
                getMultipleDescription(Comp, json.posts[i])
            }
        })
        .catch(error => {
            console.log(error);
        });
};


export const addRestaurantReview = (Comp, restaurantid, reviewid) => {
    const url = `${API_HOST}/restaurants/${restaurantid}/${reviewid}`

    const request = new Request(url,
        {
            method:"post"
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


export const getRestaurantReviews = (Comp, restaurantid) => {
    const url = `${API_HOST}/restaurants/${restaurantid}`

    const request = new Request(url,
        {
            method:"get"
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
            Comp.setState({"reviews": json.reviews})
        })
        .catch(error => {
            console.log(error);
        });
};

export const createRestaurant = async (userName, userPassword, userEmail, name, address, description, postcode, opentime, setSubmitMsg) => {
    const url = `${API_HOST}/restaurants`
    const RestaurantBody = JSON.stringify({
        name: name,
        address: address,
        description: description
    })
    console.log(RestaurantBody)

    const request = new Request(url,
        {
            method:"post",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body: RestaurantBody
        })
        
    await fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                alert("Could not get description");
            }
        }).then( json => {
            console.log("postcode & opentime implemented later");
            console.log("postcode: ", postcode);
            console.log("opentime: ", opentime);
            createRestaurantOwner(userName, userPassword, userEmail, json._id);
        }

        )
        .then(json => {
            setSubmitMsg(json.condition)
        })
        .catch(error => {
            console.log(error);
        });
};

// Restaurant Owner Route Actions //

export const getRestaurantOwner = (Comp, owner_id) => {
    const url = `${API_HOST}/restaurantowners/${owner_id}`
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
        .catch(error => {
            console.log(error);
        });
};


export const createRestaurantOwner = async (userName, userPassword, userEmail, restaurant_id) => {
    const url = `${API_HOST}/restaurantowners`
    const RestaurantOwnerBody = JSON.stringify({
        name: userName,
        password: userPassword,
        email:userEmail,
        restaurant_id: restaurant_id
    })
    console.log(RestaurantOwnerBody)

    const request = new Request(url,
        {
            method:"post",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body: RestaurantOwnerBody
        })
        
    await fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                alert("Something went wrong!");
            }
        })
        .catch(error => {
            console.log(error);
        });
};