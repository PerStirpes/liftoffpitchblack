import React from "react"
import "./App.css"
import Maps from "./components/Maps"
import Header from "./components/header"
import Footer from "./components/Footer"
import Button from "./components/button"
import Docker from "./components/Docker"
import API_KEY from "./config.json"
import { withFlagProvider } from "ld-react"

const App = () => (
  <div>
    <Header />
    <main>
      <div>
        The feature flag set will switch between a Mapbox or Google map
        <ul>
          <ul>
            <ul>
              <br />
              <Button />
            </ul>
            <br />
          </ul>
          <ul>
            <Docker />
          </ul>
        </ul>
      </div>
      <Maps />
    </main>
    <Footer />
  </div>
)

export default withFlagProvider(App, {
  clientSideId: API_KEY.LAUNCH_DARKLY,
})
