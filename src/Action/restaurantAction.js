
import { components } from 'react-select';
import ENV from '../config.js'
const API_HOST = ENV.api_host

export const getRestaurants = (Comp) => {
    const url = `${API_HOST}/restaurant`

    const request = new Request(url,
        {
            method:"get"
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
            Comp.setState({restaurants: json})
        })
        .catch(error => {
            console.log(error);
        });
};


export const getRestaurantsByID = (Comp, id) => {
    const url = `${API_HOST}/resturants/${id}`

    const request = new Request(url,
        {
            method:"get"
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
            Comp.setState({id: json._id})
            Comp.setState({description: json.description})
            Comp.setState({rating: json.rating})
            Comp.setState({title: json.name})
            Comp.setState({location: json.address})
        })
        .catch(error => {
            console.log(error);
        });
};

// {
//     restaurant_info: [{
//         images: [Mcdonald1, Mcdonald2, Mcdonald3, Mcdonald4, Mcdonald5],
//         leftArrow: leftArrow,
//         rightArrow: rightArrow
//     },

//     {
//         title: 'Mcdonald', description: '$ Burgers Fast Food American', rating: '4.5(500+)',
//         opentime: '8:00AM - 10:00PM', location: '196 Bloor St W, Toronto, ON M5s 1t8, Canada',
//         safe: 'Safe environment!', reviews: ["En vergoeding uitstekend denzelfden ik. Dik daar acre zijn voor ver veel. Ter allen den telde kan heeft. Verklaart om voldoende degelijke er overvloed al afstanden weerstand. Vijf tot meer woud zoo dik bron. Ze snelleren nu bezorgden krachtige af na wonderwel. Afscheidt nu aangelegd vernieuwd ad overvloed. Forten andere streek te in er europa nu. ", "Dikwijls lateriet van een uitgeput bak. Onderwoeld gunstigste elk ondernomen ton wat. Dal aanmerking wetenschap ontginning wantrouwen lot aangeplant. Brandhout ook wijselijk ontginnen kettingen elk men stichting belovende. Ik tooverslag kilometers economisch al. Op in verbouwen ontginnen stichting bovendien. Een als behandelt ontrukten liverpool moerassen wij zes. Middellijn er insnijding noodlottig tinprijzen ad rijkdommen interesten. Twee toe maar aard een veel doel zelf dik. ",
//             "Breken na op te en metaal zelden levert varens. Lang stof meer mei werd wat weer wie. Wie are verklaart wel mag aandeelen eigenaars gebruiken. Vergrooten caoutchouc kongostaat ingenieuse een voorschijn weg. Hand geen tijd daar is ad en wier. Ongebruikt gomsoorten hij kongostaat uit monopolies mag die natuurlijk. Zesde na rijst ad en meest sinds omdat ze. Vervangen degelijke ad meehelpen bepaalden ik viaducten en evenwicht. Welk in geld en kilo puin noch. "], users: ["Yuan", "Yuan2", "Yuan3"],
//         reviewpic: [user1, user1, user1]
//     }],
// }
