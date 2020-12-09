import ENV from '../config.js'
import {getImage} from "./imageAction"
import {getReview} from "./reviewAction"

const API_HOST = ENV.api_host


export const getDescription = (Comp) => {
    const url = `${API_HOST}/post/${Comp.state.id}`
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

            Comp.setState({postImage: json['image']}, function(){
                for(let i = 0; i < json['image'].length; i++){
                    getImage(Comp, json['image'][i])
                }
            })

            Comp.setState({description: json['description']});

            for(let i = 0; i < json['reviews'].length; i ++){
                getReview(Comp, json['reviews'][i])
            }

        })
        .catch(error => {
            console.log(error);
        });
};
