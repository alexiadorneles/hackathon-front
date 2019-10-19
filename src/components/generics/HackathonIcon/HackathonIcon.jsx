import React, { Component, Fragment } from 'react'

import './HackathonIcon.scss'

export class HackathonIcon extends Component {
  render() {
    return (
        <Fragment>
          <div className="hackathonIcon">
            <img src={this.props.imgSrc} className="hackathonIcon__img hackathon-shadow"/>
          </div>
        </Fragment>
    )
  }
}

