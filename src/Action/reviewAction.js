
import ENV from '../config.js'
import {getUser} from './userAction'
import {addRestaurantReview} from './restaurantAction'
import {addPostReview} from './postAction'
import {getUserForReview} from './userAction'
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

export const addReview = (Comp, review, userid, restaurantid) => {
    const url = `${API_HOST}/reviews`
    const ReviewBody = JSON.stringify({
        user: userid,
        review: review
    })
    const request = new Request(url,
        {
            method:"post",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body: ReviewBody
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
            addRestaurantReview(Comp, restaurantid, json['_id'])
            getUserForReview(Comp, Comp.state.userId)
        })
        .catch(error => {
            console.log(error);
        });
}


export const addReviewFromPost = (Comp, review, userid, postid) => {
    const url = `${API_HOST}/reviews`
    const ReviewBody = JSON.stringify({
        user: userid,
        review: review
    })
    const request = new Request(url,
        {
            method:"post",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body: ReviewBody
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
            addPostReview(Comp, postid, json['_id'])
        })
        .catch(error => {
            console.log(error);
        });
}