import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const style = {
  width: "100%",
  height: "100%",
};
class App extends Component {
  render() {
    return (
      <>
        <Map
          initialCenter={{
            lat: 49.104600,
            lng: -122.823510,
          }}
          google={this.props.google}
          zoom={14}
          containerStyle={style}
        />
        ;
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCIkm-WPSLmVV8b-gBDi94FD_rNC0HyfU4",
})(App);