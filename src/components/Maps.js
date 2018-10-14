import React from "react"
import { withFlags } from "ld-react"
import Mapbox from "./Mapbox"
import GoogleMaps from "./Googlemaps"
import Button from "./button"
import Docker from "./Docker"

const Maps = props => {
  return (
    <div>
      <div>
        The feature flag is set to and will switch between a Mapbox or Google
        map
        <ul>
          <li>Created a flag called 'launchdarklymaps'</li>
          <li>
            Percentage rollout 50%
            <ul>
              <Button />
            </ul>
          </li>
          <li>
            You can see the source code by appending /_src to the end of the url{" "}
          </li>
          <li>
            I've included other goodies within this app, Sentry, Heap Analytics,
            Hot jar, Google Analytics, Drift,
          </li>
          <li> Deployed with Docker </li>
          <ul>
            <Docker />
          </ul>
        </ul>
      </div>
      {props.flags.launchdarklymaps ? (
        <div>
          <GoogleMaps />
        </div>
      ) : (
        <div>
          <Mapbox />
        </div>
      )}
    </div>
  )
}

export default withFlags(Maps)
