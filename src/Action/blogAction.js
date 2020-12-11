import ENV from '../config.js'
import {getDescription} from "./postAction"
import {getRestaurantsPost} from './restaurantAction'

const API_HOST = ENV.api_host


// export const getBlogs = (Comp, id) => {
//     const url = `${API_HOST}/post/${id}`
//     const request = new Request(url,
//         {
//             method:"get"
//         })

//     fetch(request)
//         .then(res => {
//             if (res.status === 200) {
//                 return res.json()
//             } else {
//                 alert("Could not get description");
//             }
//         })
//         .then(json => {
//             getRestaurantsPost(Comp, id)
//         })
//         .catch(error => {
//             console.log(error);
//         });
// };
