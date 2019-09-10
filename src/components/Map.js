import React from 'react';
import { connect } from 'react-redux';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends React.Component {
  state = { center: { lat: 40.73061, lng: -73.935242 } };

  restaurantsMap = withGoogleMap(props => {
    return (
      <GoogleMap defaultZoom={12} defaultCenter={this.state.center}>
        {props.children}
      </GoogleMap>
    );
  });

  renderMarkers() {
    if (
      this.props.restaurants.data &&
      this.props.restaurants.data.length > 0
    ) {
      return this.props.restaurants.data.map(restaurant => {
        return (
          <Marker key={restaurant.id} position={this.state.center} />
        );
      });
    }
  }

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
    );
  }
}

const mapStateToProps = state => {
  return { restaurants: state.restaurants };
};

export default connect(mapStateToProps)(Map);
