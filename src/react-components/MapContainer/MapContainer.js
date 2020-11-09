import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker,InfoWindow } from 'google-maps-react';

const mapStyles = {
    position: 'relative',
    width: '40%',
    height: '40%'
};

export class MapContainer extends Component {

    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>{
        console.log({"props":props, "maker": marker})
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }


    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={16}
                style={mapStyles}
                initialCenter={
                    {
                        lat: 43.6686687,
                        lng: -79.3976189
                    }
                }
            >
                <Marker position={{ lat: 43.6686687, lng:-79.3976189}}/>


            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyALh3Jxz38yeMi-GmZ8ID5xMvhDnmaC244'
})(MapContainer);