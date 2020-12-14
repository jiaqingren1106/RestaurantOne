import ENV from '../config.js'
import { getImage } from "./imageAction"
import { getReview } from "./reviewAction"
import { addRestaurantPost } from "./restaurantAction"

const API_HOST = ENV.api_host


export const getDescription = (Comp) => {
    const url = `${API_HOST}/post/${Comp.state.id}`
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
            Comp.setState({ title: json['title'] , date: json['date'], description: json['description']})
            Comp.setState({ postImage: json['image'] }, function () {
                for (let i = 0; i < json['image'].length; i++) {
                    getImage(Comp, json['image'][i])
                }
                for (let i = 0; i < json['reviews'].length; i++) {
                    getReview(Comp, json['reviews'][i])
                }
            })



        })
        .catch(error => {
            console.log(error);
        });
};


export const createPost = (title, description, imageId, setPostId, restaurantId) => {
    const url = `${API_HOST}/post`
    const Body = JSON.stringify({
        title: title,
        description: description,
        image: imageId,
        date: "",
        reviews: "",
        // rest_id: restaurantId
    })

    const request = new Request(url,
        {
            method: "post",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: Body
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
            addRestaurantPost(restaurantId, json['_id'])
        })
        .catch(error => {
            console.log(error);
        });

}


export const getMultipleDescription = (Comp, post_id) => {
    const url = `${API_HOST}/post/${post_id}`
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
            let old_title = Comp.state.title
            old_title.push(json['title'])

            let old_date = Comp.state.date
            old_date.push(json['date'])
            if (json['image'].length >= 1) {
                getImage(Comp, json['image'][0])
            }


            let old_ids = Comp.state.post_id
            old_ids.push(post_id)

            let old_description = Comp.state.description
            old_description.push(json['description'])

            Comp.setState({ description: old_description, title: old_title, date: old_date, post_id: old_ids });

        })
        .catch(error => {
            console.log(error);
        });
};

export const addPostReview = (Comp, postid, reviewid) => {
    const url = `${API_HOST}/post/${postid}/${reviewid}`

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
            console.log(json)
        })
        .catch(error => {
            console.log(error);
        });
};


export const getAllPost = (Comp) => {
    const url = `${API_HOST}/post`
    const request = new Request(url,
        {
            method: "get"
        })

    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                alert("Could not get posts");
            }
        })
        .then(json => {
            console.log(json)
            Comp.setState({ posts: json })

        })
        .catch(error => {
            console.log(error);
        });
};



export const deletePostAdmin = (postid) => {
    const url = `${API_HOST}/restaurants/${postid}/${postid}`
    const url2 = `${API_HOST}/post/${postid}`

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
                alert("Could not delete posts");
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
                alert("Could not delete posts");
            }
        })
        .then(json => {
            console.log(json)

        })
        .catch(error => {
            console.log(error);
        });
};



