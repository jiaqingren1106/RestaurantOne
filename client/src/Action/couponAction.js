

export const createCoupon = (couponName, couponImage, couponPrice, restaurantId) => {
    
    const bodyPart = {
        "name": couponName,
        "image": couponImage,
        "price": couponPrice
    }

    const url = `${API_HOST}/coupon`
    const UserBody = JSON.stringify({
        name: couponName,
        image: couponImage,
        price: couponPrice,
    })

    const request = new Request(url,
        {
            method:"post",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body: UserBody
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
        
        
    })
    .catch(error => {
        console.log(error);
    });
}