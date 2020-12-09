
import ENV from '../config.js'
import {getUser} from './userAction'
const API_HOST = ENV.api_host

export const getReview = (Comp, review_id, index) => {
    const url = `${API_HOST}/reviews/${review_id}`
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
            const review_content = json['review']
            getUser(Comp, json.user, review_content)
        })
        .catch(error => {
            console.log(error);
        });
};
