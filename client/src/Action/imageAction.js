
import ENV from '../config.js'
const API_HOST = ENV.api_host

export const getImage = (Comp, image_id) => {
    const url = `${API_HOST}/image/${image_id}`
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
            const old_image = Comp.state.image
            old_image.push(json.image_url)
            Comp.setState({image: old_image})
        })
        .catch(error => {
            console.log(error);
        });
};


export const getImageForReview = (Comp, userName, userImage, review_content) => {
    const url = `${API_HOST}/image/${userImage}`
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
            let reviews = Comp.state['reviews']
            reviews.push([userName, json['image_url'],review_content])
            Comp.setState({reviews: reviews})
        })
        .catch(error => {
            console.log(error);
        });
};


export const getImageInNav = (Comp, image_id) => {
    const url = `${API_HOST}/image/${image_id}`
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
            Comp.setState({image: json.image_url})
        })
        .catch(error => {
            console.log(error);
        });
};


export const getImageForReviewTwo = (Comp, userName, userImage) => {
    const url = `${API_HOST}/image/${userImage}`
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
            Comp.setState({userName:userName ,userImage: json.image_url})
        })
        .catch(error => {
            console.log(error);
        });

}