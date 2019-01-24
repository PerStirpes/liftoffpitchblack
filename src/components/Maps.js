import React from 'react'
import { withFlags } from 'ld-react'
import Mapbox from './Mapbox'
import GoogleMaps from './Googlemaps'

const Maps = ({ flags: { launchdarklymaps } }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      {launchdarklymaps ? <Mapbox /> : <GoogleMaps />}
      The feature flag set will switch between a Mapbox(grey tint) or Google
      map(standard color pattern)
    </div>
  )
}

export default withFlags(Maps)
