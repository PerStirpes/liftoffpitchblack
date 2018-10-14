import React, { Component } from "react"

export default class Button extends Component {
  handleClick = e => {
    e.preventDefault()
    window.location.reload()
  }

  render() {
    return (
      <button onClick={this.handleClick} type="primary">
        Click this button to Refresh your screen, you may see a different map
      </button>
    )
  }
}
