import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker,InfoWindow } from 'google-maps-react';
import {getRestAttributeByID, getLocationAttributeByID} from "../../Action/restaurantAction";
import {register, setRoute} from "../../redux/actions";
import { connect } from 'react-redux';
import {googleApiKey} from "../../data/constants";


const mapStyles = {
    position: 'relative',
    width: '100%',
    height: '100%'
};
const mapStateToProps = (state) => {
    return {
        route: state.routeState.route,
        user: state.userState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (new_route) => dispatch(setRoute(new_route)),
        setUser: (user_obj) => dispatch(register(user_obj))
    }
}

export class MapContainer extends Component {

    constructor(props) {
        super();
        this.state = {
            lat: 43.6686687,
            lng: -79.3976189,
            apiKey: googleApiKey
        };
        getLocationAttributeByID(this, props.user.restaurant_id)
    }


    render() {
        return (
            <div style={{position: "relative", width: "100%", height: "100%"}}>
                <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.lat},${this.state.lng}&zoom=14&size=500x400&sensor=false&markers=color:red%7C${this.state.lat},${this.state.lng}&key=${this.state.apiKey}`} alt=''/>
            </div>

        );
    }
// }

// export default GoogleApiWrapper({
//
// })(MapContainer);
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             mapIsReady: false,
//         };
//     }
//
//     componentDidMount() {
//         const ApiKey = 'AIzaSyALh3Jxz38yeMi-GmZ8ID5xMvhDnmaC244';
//         const script = document.createElement('script');
//         script.src = `https://maps.googleapis.com/maps/api/js?key=${ApiKey}`;
//         script.async = true;
//         script.defer = true;
//         script.addEventListener('load', () => {
//             this.setState({ mapIsReady: true });
//         });
//
//         document.body.appendChild(script);
//     }
//
//     componentDidUpdate() {
//         if (this.state.mapIsReady) {
//             // Display the map
//             this.map = new window.google.maps.Map(document.getElementById('map'), {
//                 center: {lat: -34.397, lng: 150.644},
//                 zoom: 12,
//                 mapTypeId: 'roadmap',
//             });
//             // You also can add markers on the map below
//         }
//     }
//
//     render() {
//         return (
//             <div id="map" />
//         );
//     }
}
export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);