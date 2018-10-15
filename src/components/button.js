import React, { Component } from "react"
import { div } from "gl-matrix/src/gl-matrix/vec2"

export default class Button extends Component {
  componentDidMount() {}

  _handleClick = e => {
    e.preventDefault()
    window.analytics.track("click_swap_map_button", {
      title: "Map Swap",
    })
    window.location.reload()
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>Percentage rollout 50%</div>
        <br />
        <div>
          <button onClick={this._handleClick}>
            Click to refresh - Do you see a different map 🗺?
          </button>
        </div>
      </div>
    )
  }
}
