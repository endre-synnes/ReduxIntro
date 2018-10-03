import React, {Component} from "react"
import Map, { GoogleApiWrapper } from 'google-maps-react';
import API_KEY from "../env/api-key";

class GoogleMap extends Component{
  render() {

    console.log(this.props.lat);
    console.log(this.props.lon);

    return (
      <div>
        <Map
          style={{width: '250px', height: '200px', position: 'relative'}}
          google={this.props.google}
          zoom={10}
          initialCenter={{
            lat: this.props.lat,
            lng: this.props.lon
          }}
        />
      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: API_KEY.googleKey,
})(GoogleMap);
