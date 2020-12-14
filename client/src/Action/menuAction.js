import { getImageForMenu } from "./imageAction";
import ENV from '../config.js'
import {addRestaurantMenu} from './restaurantAction'

const API_HOST = ENV.api_host

export const getMenuItem = (Comp, menuid) => {
    const url = `${API_HOST}/menu/${menuid}`
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

            getImageForMenu(Comp, image, name, price, menuid)
        })
        .catch(error => {
            console.log(error);
        });
}

export const addMenu = (Comp, name, image, price) => {
    
    const url = `${API_HOST}/menu`
    const UserBody = JSON.stringify({name:name, image:image, price:price})

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
           addRestaurantMenu(Comp.state['restaurantId'], json['_id'])
        })
        .catch(error => {
            console.log(error);
        });

}