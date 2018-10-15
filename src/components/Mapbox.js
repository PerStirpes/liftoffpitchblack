import React, { Component } from "react"
import MapGL, { Marker } from "react-map-gl"
import API_KEY from "../config.json"

export default class Mapbox extends Component {
  static defaultProps = {
    viewport: {
      latitude: 37.80614,
      longitude: -122.27141,
      zoom: 17,
      bearing: 3,
      pitch: 10,
      width: 940,
      height: 860,
    },
  }

  render() {
    return (
      <MapGL
        {...this.props.viewport}
        scrollZoom={false}
        dragRotate={true}
        mapboxApiAccessToken={API_KEY.MAP_BOX}
      >
        <Marker
          latitude={37.80614}
          longitude={-122.27141}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <div>{"Launch Darkly 🚀"}</div>
        </Marker>
      </MapGL>
    )
  }
}
