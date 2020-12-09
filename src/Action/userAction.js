
import ENV from '../config.js'
import {getImageForReview} from "./imageAction"
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
