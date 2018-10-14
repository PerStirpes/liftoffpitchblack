import React from "react"
import "./App.css"
import Maps from "./components/Maps"
import Header from "./components/header"
import Footer from "./components/Footer"
import API_KEY from "./config.json"
import { withFlagProvider } from "ld-react"

const App = () => (
  <div>
    <Header />
    <main>
      <Maps />
    </main>
    <Footer />
  </div>
)

export default withFlagProvider(App, {
  clientSideId: API_KEY.LAUNCH_DARKLY,
})
