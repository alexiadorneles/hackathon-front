import React, { Component } from 'react'

import './HackathonTitleBox.scss'

export class HackathonTitleBox extends Component {
  render() {
    return (
      <div className="hackathonTitleBox">
        {this.props.children}
      </div>
    )
  }
}

