import React, { Component } from "react"
import GoogleMapReact from "google-map-react"
import API_KEY from "../config.json"

const LaunchDarklyHome = ({ text }) => <div style={styles.text}>{text}</div>

export default class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.80614,
      lng: -122.27141,
    },
    zoom: 17,
  }

  render() {
    return (
      <div style={styles.map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY.GOOGLE_MAPS_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <LaunchDarklyHome
            lat={37.80614}
            lng={-122.27141}
            text={"Launch Darkly 🚀"}
          />
        </GoogleMapReact>
      </div>
    )
  }
}

const styles = {
  text: {
    color: "black",
    padding: "15px 10px",
    display: "inline-flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%",
    transform: "translate(-50%, -50%)",
  },
  map: { height: "860px", width: "940px" },
}
