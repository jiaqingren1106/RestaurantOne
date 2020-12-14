import ENV from '../config.js'
import {addMenu} from './menuAction'
import {addCoupon} from './couponAction'
import MenuItem from '../react-components/menuItem/MenuItem.js';
const API_HOST = ENV.api_host


export const createImage = (file, setImageId) => {
    const url = `${API_HOST}/image`

    const imageData = new FormData(file);
    const request = new Request(url,
        {
            method:"post",
            body:imageData
        })
        
    console.log(request)
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                alert("Could not get description");
            }
        })
        .then(json => {
            const id = json['_id']
            setImageId(String(id))
        })
        .catch(error => {
            console.log(error);
        });
};


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


// export const getImageForReviewTwo = (Comp, userName, userImage) => {
//     const url = `${API_HOST}/image/${userImage}`
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
//             Comp.setState({userName:userName ,userImage: json.image_url})
//         })
//         .catch(error => {
//             console.log(error);
//         });

// }

export const getImageForMenu = (Comp, image_id, name, price, menuid) => {
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
            const image = json.image_url
            const menuItem = Comp.state.MenuItems

            menuItem.push({"name": name, "image": image, "price": price, "menuid": menuid})

            Comp.setState({MenuItems: menuItem})
        })
        .catch(error => {
            console.log(error);
        });
};


export const getImageForCoupon = (Comp, image_id, name, price, couponid) => {
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
            const image = json.image_url
            const couponItem = Comp.state.couponItems

            couponItem.push({"name": name, "image": image, "price": price, "couponid": couponid})

            Comp.setState({couponItems: couponItem})
        })
        .catch(error => {
            console.log(error);
        });
};


export const createImageForMenu = (file, Comp) => {
    const url = `${API_HOST}/image`

    const imageData = new FormData(file);
    const request = new Request(url,
        {
            method:"post",
            body:imageData
        })
        
    console.log(request)
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                alert("Could not get description");
            }
        })

        .then(json => {
            const id = json['_id']

            let MenuItems = Comp.state['MenuItems']
            MenuItems.push({"name": Comp.state['newItem']['name'], "image": id, "price": Comp.state['newItem']['price']})
            console.log("test")
            console.log(MenuItems)
            Comp.setState({MenuItems: MenuItems})
            addMenu(Comp, Comp.state['newItem']['name'], id, Comp.state['newItem']['price'])
        })

        .catch(error => {
            console.log(error);
        });
};

export const createImageForCoupon = (file, Comp) => {
    const url = `${API_HOST}/image`
    const imageData = new FormData(file);
    const request = new Request(url,
        {
            method:"post",
            body:imageData
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
            const id = json['_id']
            let couponItems = Comp.state['couponItems']
            couponItems.push({"name": Comp.state['newCoupon']['name'], "image": id, "price": Comp.state['newCoupon']['price']})
            Comp.setState({couponItems: couponItems})

            console.log(couponItems)
            addCoupon(Comp, Comp.state['newCoupon']['name'], id, Comp.state['newCoupon']['price'])
        })

        .catch(error => {
            console.log(error);
        });
};

export const getImageForDashboard = (Comp, image_id) => {
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

export const createImageForProfile = (file, Comp) => {
    const url = `${API_HOST}/image`

    const imageData = new FormData(file);
    const request = new Request(url,
        {
            method:"post",
            body:imageData
        })
        
    console.log(request)
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                alert("Could not get description");
            }
        })
        .then(json => {
            console.log(json['_id'])
            Comp.setState({'newImage': json['_id']})
        })
        .catch(error => {
            console.log(error);
        });
};
