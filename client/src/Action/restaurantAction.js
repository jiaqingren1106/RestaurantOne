
import { components } from 'react-select';
import ENV from '../config.js'
import {getReview} from './reviewAction'
import {getImage} from './imageAction'
import {getMultipleDescription} from './postAction'
import {getFollowerToArray} from './userAction'

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



export const getRestaurantsFollowerByID = (Comp, id) => {
    const url = `${API_HOST}/restaurants/${id}`

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
            console.log(json.followers)
            let result = []
            for (let i=0; i< json.followers.length; i++) {
                getFollowerToArray(Comp, result, json.followers[i]);
            }
            
            // Comp.setState({follower: result})

        })
        .catch(error => {
            console.log(error);
        });
};



export const getRestaurantsByID = (Comp, id) => {
    const url = `${API_HOST}/restaurants/${id}`

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


export const getRestAttributeByID = (Comp, id) => {
    const url = `${API_HOST}/restaurants/${id}`

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
           Comp.setState({ openTime: json.opentime, restaurantName: json.name, restaurantDes: json.description})



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

<<<<<<< Updated upstream

export const addRestaurantReview = (Comp, restaurantid, reviewid) => {
    const url = `${API_HOST}/restaurants/${restaurantid}/${reviewid}`
=======
export const addRestaurantMenu = (restaurantid, menuid) => {
    const url = `${API_HOST}/restaurants/${restaurantid}/${menuid}/${menuid}/${menuid}`

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


export const addRestaurantCoupon = (restaurantid, couponid) => {
    const url = `${API_HOST}/restaurants/${restaurantid}/${couponid}/${couponid}/${couponid}/${couponid}`

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


export const addRestaurantPost = (restaurantid, postid) => {
    const url = `${API_HOST}/restaurants/${restaurantid}/${postid}/${postid}`
>>>>>>> Stashed changes

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

export const createRestaurant = (restaurantName, restaurantDescription, restaurantAddress, restaurantCertificate, setSubmitMsg) =>{

    const url = `${API_HOST}/restaurants`
    const UserBody = JSON.stringify({
        name: restaurantName,
        description: restaurantDescription,
        address: restaurantAddress,
        certificate:restaurantCertificate
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
}



export const updateRestInfo = (data, restaurantid) => {
    const url = `${API_HOST}/restaurants/${restaurantid}`
    const UserBody = JSON.stringify({name:data.name, address:data.address, description:data.description, opentime: data.opentime})
    console.log(url)


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


export const setAndUpdateRest = (Comp, restaurantid) => {
    const url = `${API_HOST}/restaurants/${restaurantid}`

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
            json.name = Comp.state.restaurantName;
            json.description = Comp.state.restaurantDes;
            json.opentime = Comp.state.openTime;

            updateRestInfo(json, restaurantid);

        })
        .catch(error => {
            console.log(error);
        });
};

