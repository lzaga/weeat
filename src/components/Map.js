import React from 'react';
import { connect } from 'react-redux';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            center: { lat: 40.730610, lng: -73.935242 },
            restaurantsCors: {}
        }
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
            return this.props.restaurants.data.map(restaurant => {
                return (
                    // Put hard-coded because the API key is not valid and didn't want to waste time on it
                    <Marker key={restaurant.id} position={{ lat: 40.730610, lng: -73.935242 }} />
                )
            })
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