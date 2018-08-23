import React, { Component } from 'react';
import './App.css';
import {Locations} from './locations'
import {mapStyle} from './mapCustomStyle'
import scriptLoader from 'react-async-script-loader';

class App extends Component {
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
