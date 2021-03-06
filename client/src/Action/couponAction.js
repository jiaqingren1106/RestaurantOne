import { getImageForMenu, getImageForCoupon } from "./imageAction";
import ENV from '../config.js'
import {addRestaurantCoupon, addRestaurantMenu} from './restaurantAction'

const API_HOST = ENV.api_host

export const getCouponItem = (Comp, couponid) => {
    const url = `${API_HOST}/coupon/${couponid}`
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
            const name = json['name']
            const image = json['image']
            const price = json['price']

            getImageForCoupon(Comp, image, name, price, couponid)
        })
        .catch(error => {
            console.log(error);
        });
}

export const addCoupon = (Comp, couponName, couponImage, couponPrice) => {
    
    const url = `${API_HOST}/coupon`
    const UserBody = JSON.stringify({name:couponName, image:couponImage, price:couponPrice})

    const request = new Request(url,
        {
            method:"post",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: UserBody
        }
    )
    console.log(UserBody)

    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                alert("Could not get restaurants");
            }
        })
        .then(json => {
            console.log(Comp.state)
            addRestaurantCoupon(Comp.state['restaurantId'], json['_id'])
        })
        .catch(error => {
            console.log(error);
        });
}


export const getAllCoupon = (Comp) => {
    const url = `${API_HOST}/coupon`

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
            for (let i = 0; i < json.length; i++) {
                getCouponItem(Comp, json[i]._id)
            }
        })
        .catch(error => {
            console.log(error);
        });
} 
