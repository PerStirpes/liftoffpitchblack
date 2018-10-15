import React from "react"
import { withFlags } from "ld-react"
import Mapbox from "./Mapbox"
import GoogleMaps from "./Googlemaps"

const Maps = ({ flags: { launchdarklymaps } }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {launchdarklymaps ? <Mapbox /> : <GoogleMaps />}
    </div>
  )
}

export default withFlags(Maps)
