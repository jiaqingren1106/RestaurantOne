
import ENV from '../config.js'
import {getUser} from './userAction'
import {addRestaurantReview} from './restaurantAction'
import {addPostReview} from './postAction'
import {getUserForReview} from './userAction'
import {addReviewtoUser} from './userAction'
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
        review: review,
        rest_id: restaurantid
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
            addReviewtoUser(userid, json['_id'])
            
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


export const getAllReview = (Comp) => {
    const url = `${API_HOST}/reviews`
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
            console.log(json)
            Comp.setState({reviews: json})
        })
        .catch(error => {
            console.log(error);
        });
};

export const getAllReviewArray = (propReview, Comp) => {
    const url = `${API_HOST}/reviews`
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
            console.log(propReview)
            console.log(json)
            let change = []
            for (let i=0; i< propReview.length; i++) {
                for (let j=0; j< json.length; j++){
                    if ((propReview[i]).trim() === json[j]._id) {
                        change.push({id:propReview[i], comment: json[j].review})
                    }
                }
            }
            Comp.setState({history:change})
            
        })
        .catch(error => {
            console.log(error);
        });
};



export const deleteReviewAdmin = (reviewid) => {
    const url = `${API_HOST}/restaurants/${reviewid}/${reviewid}/${reviewid}`
    const url2 = `${API_HOST}/reviews/${reviewid}`

    const request = new Request(url,
        {
            method: "delete"
        }
    )
    const request2 = new Request(url2,
        {
            method: "delete"
        }
    )



    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                alert("Could not delete reviews");
            }
        })
        .then(json => {
            console.log(json)

        })
        .catch(error => {
            console.log(error);
        });

    fetch(request2)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                alert("Could not delete reviews");
            }
        })
        .then(json => {
            console.log(json)

        })
        .catch(error => {
            console.log(error);
        });
};
