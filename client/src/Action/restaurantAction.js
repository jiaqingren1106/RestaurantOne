
import ENV from '../config.js'

import {getReview} from './reviewAction'
import {getImage} from './imageAction'
import {getMultipleDescription} from './postAction'
import {getFollowerToArray} from './userAction'
import {getMenuItem} from './menuAction'
import Geocode from "react-geocode";
import {getCouponItem} from "./couponAction";

const API_HOST = ENV.api_host


export const handleRequest = (approve, restid, data) => {
    const url = `${API_HOST}/restaurants/${restid}`
    const UserBody = JSON.stringify({ approval: "true", name: data.name, address: data.address, description: data.description })


    const request = new Request(url,
        {
            method: "delete"
        }
    )
    const request2 = new Request(url,
        {
            method: "put",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: UserBody
        }
    )

    let decision;
    if (approve) {
        decision = request2
    } else {
        decision = request
    }


    fetch(decision)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                alert("Could not get restaurants");
            }
        })
        .then(json => {
            console.log(json)
            return json
        })
        .catch(error => {
            console.log(error);
        });
};



export const getRestRequest = (Comp) => {
    const url = `${API_HOST}/restaurants`

    const request = new Request(url,
        {
            method: "get"
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
            let unProcessed = []
            let imageList = []
            for (let i = 0; i < json.length; i++) {
                if (json[i].approval === "false") {
                    unProcessed.push(json[i])
                    getImage(Comp, json[i].certificate)
                }
            }
        
            Comp.setState({ restaurants: unProcessed })
        })
        .catch(error => {
            console.log(error);
        });
};


export const getRestaurants = (Comp) => {
    const url = `${API_HOST}/restaurants`

    const request = new Request(url,
        {
            method: "get"
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
            Comp.setState({ restaurants: json })
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
            method: "get"
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
            Comp.setState({
                name: json.name, address: json.address,
                description: json.description, rating: json.rating, opentime: json.opentime,
                safe: json.safe, posts: json.posts
            }, function () {
                for (let i = 0; i < json['reviews'].length; i++) {
                    getReview(Comp, json['reviews'][i])
                }
                for (let i = 0; i < json['image'].length; i++) {
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
            method: "get"
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
            for (let i = 0; i < json.posts.length; i++) {
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
            method: "post"
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
}


export const getRestaurantMenu = (Comp, restauarntid) => {
    const url = `${API_HOST}/restaurants/${restauarntid}`

    const request = new Request(url,
        {
            method: "get"
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
            for (let i = 0; i < json['menu'].length; i++) {
                getMenuItem(Comp, json['menu'][i])
            }
        })
        .catch(error => {
            console.log(error);
        });
}


export const addRestaurantMenu = (restaurantid, menuid) => {
    const url = `${API_HOST}/restaurants/${restaurantid}/${menuid}/${menuid}/${menuid}`

    const request = new Request(url,
        {
            method: "post"
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
            method: "post"
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

    const request = new Request(url,
        {
            method: "post"
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
            method: "get"
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
            Comp.setState({ "reviews": json.reviews })
        })
        .catch(error => {
            console.log(error);
        });
};

export const createRestaurant = async (restaurantName, restaurantDescription, restaurantAddress, restaurantOpentime,restaurantCertificate, setSubmitMsg, setRestaurantid, uploadimage) =>{

    const url = `${API_HOST}/restaurants`
    const res = await Geocode.fromAddress(restaurantAddress);
    const { lat, lng } = res.results[0].geometry.location;
    // add code here
    const UserBody = JSON.stringify({
        name: restaurantName,
        description: restaurantDescription,
        address: restaurantAddress,
        certificate:restaurantCertificate,
        opentime: restaurantOpentime,
        longitude: lng,
        latitude: lat,
        image: [uploadimage]
    })


    const request = new Request(url,
        {
            method: "post",
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
            console.log("restaurantId")
            setRestaurantid(json.id)
        })
        .catch(error => {
            console.log(error);
        });
}


export const getLocationAttributeByID = (Comp, id) => {
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
            //    Comp.setState({ openTime: json.opentime})
            //    Comp.setState({ restaurantName: json.name})
            //    Comp.setState({ restaurantDes: json.description})

            Comp.setState({ lng: json.longitude, lat: json.latitude})



        })
        .catch(error => {
            console.log(error);
        });
};

export const getRestAttributeByID = (Comp, id) => {
    const url = `${API_HOST}/restaurants/${id}`

    const request = new Request(url,
        {
            method: "get"
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
            //    Comp.setState({ openTime: json.opentime})
            //    Comp.setState({ restaurantName: json.name})
            //    Comp.setState({ restaurantDes: json.description})


           Comp.setState({ openTime: json.opentime, restaurantName: json.name, restaurantDes: json.description,
               address: json.address})
        })
        .catch(error => {
            console.log(error);
        });
};



export const updateRestInfo = async (data, restaurantid) => {
    const url = `${API_HOST}/restaurants/${restaurantid}`

    const res = await Geocode.fromAddress(data.address);
    const { lat, lng } = res.results[0].geometry.location;
    const UserBody = JSON.stringify({name:data.name, address:data.address, description:data.description, opentime: data.opentime, longitude:lng, latitude: lat, menu: data.menu, coupons: data.coupons})
    console.log(url)


    const request = new Request(url,
        {
            method: "put",
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
            method: "get",
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
            json.address = Comp.state.address

            updateRestInfo(json, restaurantid);

        })
        .catch(error => {
            console.log(error);
        });
};


export const getRestaurantsFollowerByID = (Comp, id) => {
    const url = `${API_HOST}/restaurants/${id}`

    const request = new Request(url,
        {
            method: "get"
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
            console.log(json.follows)
            let result = []
            for (let i = 0; i < json.follows.length; i++) {
                getFollowerToArray(Comp, result, json.follows[i]);
            }

            // Comp.setState({follower: result})

        })
        .catch(error => {
            console.log(error);
        });
};



export const deleteRestaurant = (restid) => {
    const url = `${API_HOST}/restaurants/${restid}`


    const request = new Request(url,
        {
            method: "delete"
        }
    )


    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                alert("Could not get restaurants");
            }
        })
        .then(json => {
            console.log(json)
            return json
        })
        .catch(error => {
            console.log(error);
        });
};

export const addFollowtoRestaurant = (restaurantId, followid) => {
    const url = `${API_HOST}/restaurants/${restaurantId}/${followid}/${followid}/${followid}/${followid}/${followid}`
    const request = new Request(url,
        {
            method: "post"
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
            console.log(json)

        })
        .catch(error => {
            console.log(error);
        });
};

export const deleteFollowtoRestaurant = (restaurantId, followid) => {
    const url = `${API_HOST}/restaurants/${restaurantId}/${followid}/${followid}/${followid}/${followid}/${followid}`
    const request = new Request(url,
        {
            method: "delete"
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
            console.log(json)

        })
        .catch(error => {
            console.log(error);
        });
};


export const getAllFollowingArray = (propReview, Comp) => {
    const url = `${API_HOST}/restaurants`
    const request = new Request(url,
        {
            method: "get"
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
            console.log(propReview)
            console.log(json)
            let change = []
            for (let i = 0; i < propReview.length; i++) {
                for (let j = 0; j < json.length; j++) {
                    if (propReview[i].trim() === json[j]._id) {
                        change.push({ restid: propReview[i], name: json[j].name })
                    }
                }
            }
            Comp.setState({ follows: change })

        })
        .catch(error => {
            console.log(error);
        });
};

export const getRestaurantCoupon = (Comp, restauarntid) => {
    const url = `${API_HOST}/restaurants/${restauarntid}`

    const request = new Request(url,
        {
            method: "get"
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
            // Comp.setState({"MenuItem" : json.coupons})
            console.log(json)
            for (let i = 0; i < json['coupons'].length; i++) {
                getCouponItem(Comp, json['coupons'][i])
            }
        })
        .catch(error => {
            console.log(error);
        });
} 

export const updateRestCoupon = (couponid, restaurantid, Comp) => {
    const url = `${API_HOST}/restaurants/${restaurantid}`
    const request = new Request(url,
        {
            method: "get",
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
            let changed = json.coupons
            const index = changed.indexOf(couponid);
            console.log(changed)
            console.log(couponid)
            if (index > -1) {
                changed.splice(index, 1);
            }
            json.coupons = changed
            
            updateRestInfo(json, restaurantid)

        })
        .then(json => {
            // Comp.state.upper();

        })
        .catch(error => {
            console.log(error);
        });
};

export const updateRestMenu = (menuid, restaurantid, Comp) => {
    const url = `${API_HOST}/restaurants/${restaurantid}`
    const request = new Request(url,
        {
            method: "get",
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
            let changed = json.menu
            const index = changed.indexOf(menuid);
            if (index > -1) {
                changed.splice(index, 1);
            }
            json.menu = changed
            updateRestInfo(json, restaurantid)

        })
        .then(json => {
            // Comp.state.upper();

        })
        .catch(error => {
            console.log(error);
        });
};


export const addRestImage = (imageid, restaurantid) => {
    const url = `${API_HOST}/restaurants/${restaurantid}/${imageid}/${imageid}/${imageid}/${imageid}/${imageid}/${imageid}`
    const request = new Request(url,
        {
            method: "post",
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
            
        })
        .catch(error => {
            console.log(error);
        });
};

