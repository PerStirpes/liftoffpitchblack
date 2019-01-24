import React, { Component } from 'react'
import { div } from 'gl-matrix/src/gl-matrix/vec2'

export default class Button extends Component {
  _handleClick = e => {
    e.preventDefault()
    window.analytics.track('click_swap_map_button', {
      title: 'Map Swap'
    })
    window.location.reload()
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <h2>API Swap</h2>

        <div>
          <div>
            <button onClick={this._handleClick} style={{ fontWeight: 900 }}>
              Tap
            </button>
          </div>
        </div>
      </div>
    )
  }
}
