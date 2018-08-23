import React, { Component } from 'react';
import './App.css';
import {Locations} from './locations'
import {mapCustomStyle} from './mapCustomStyle'
import scriptLoader from 'react-async-script-loader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: {},
      requestSuccess: true
    }
  }

  componentWillReceiveProps({isScriptSucceed}) {
    if(isScriptSucceed) {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: new window.google.maps.LatLng(31.207296,29.92414),
        styles: mapCustomStyle
      });
      this.setState({map: map});
    } else {
      console.log("Error:Cann't Load Google Map!");
      this.setState({requestSuccess: false})
    }
  }

  render() {
    return (
      <div id="container">
        <div id="map-container" role="application" tabIndex="-1">
        <div id="map" role="region" aria-label="Philadelphia Neighborhood"></div>
        </div>
      </div>
    );
  }
}

export default scriptLoader(
  [`https://maps.googleapis.com/maps/api/js?key=AIzaSyAM5LI4livWcmjbjb6H71aiXQAdHnw9RZQ&v=3.exp&libraries=geometry,drawing,places`]
  )(App);
