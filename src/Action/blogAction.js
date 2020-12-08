
import ENV from '../config.js'
const API_HOST = ENV.api_host

export const getDescription = (Comp) => {
    const url = `${API_HOST}/post/${Comp.state.id}`
    console.log(url)
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
            Comp.setState({title: json['title']})
            Comp.setState({date: json['date']})
            Comp.setState({image: json['image']})
            Comp.setState({ description: json['description']});
        })
        .catch(error => {
            console.log(error);
        });
};

// export default {getDescription, getTitle}