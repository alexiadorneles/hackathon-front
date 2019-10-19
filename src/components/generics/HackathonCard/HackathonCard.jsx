import React, { Component } from 'react'

import './HackathonCard.scss'

export class HackathonCard extends Component {
  render() {
    return (
      <div className="Container">
        <div className="card hackathon-shadow" >
          {this.props.children}
        </div>
      </div>
    )
  }
}