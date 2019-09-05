import React from 'react';
import { connect } from 'react-redux';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import Geocode from "react-geocode";

class Map extends React.Component{
    constructor(props) {
        super(props);

        this.geocode = Geocode;
        this.geocode.setApiKey(process.env['REACT_APP_GOOGLE_API_KEY']);
        this.geocode.enableDebug();

        this.state = {
            center: { lat: 40.730610, lng: -73.935242 },
            restaurantsCors: {}
        }
    };

    updateCordinates = () => {
        // var restaurantsCors = {};

        try {
            var restaurant = this.props.restaurants.data[0];
                if (!this.state.restaurantsCors[restaurant.id]) {

                    debugger
                    this.geocode.fromAddress(restaurant.address).then(res => {
                        debugger
                        const { lat, lng } = res.results[0].geometry.location;
                        console.log(lat, lng);
                    })
                }
        } catch(e) {
            console.log(e);
        }
    };

    componentDidUpdate(prevProps) {
        if (this.props.restaurants.data.length > 0 && this.props.restaurants.data.length !== prevProps.restaurants.data.length) {
            this.updateCordinates();
        };
    };

    restaurantsMap = withGoogleMap(props => {
        return (
            <GoogleMap
                defaultZoom={12}
                defaultCenter={this.state.center}
            >
                {props.children}
            </GoogleMap>
        )
    });

    renderMarkers() {
        if (this.props.restaurants.data.length > 0) {
            var restaurant = this.props.restaurants.data[0];
            // return this.props.restaurants.data.map(restaurant => {
                if(Object.keys(this.state.restaurantsCors).length === 0) this.updateCordinates();

                return (
                    <Marker key={restaurant.id} position={{ lat: 40.730610, lng: -73.935242 }} />
                )
            // })
        };
    };

    render() {
        return (
            <div className="ui relaxed divided list">
                <this.restaurantsMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `1000px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                >
                    {this.renderMarkers()}
                </this.restaurantsMap>
            </div>
        )
    }

};

const mapStateToProps = state => {
    return { restaurants: state.restaurants }
};

export default connect(mapStateToProps)(Map);