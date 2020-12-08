
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
            Comp.setState({image: json.image_url})
        })
        .catch(error => {
            console.log(error);
        });
};
