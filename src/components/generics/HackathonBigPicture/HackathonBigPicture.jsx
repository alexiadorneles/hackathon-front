import React, { Component, Fragment } from 'react'

import './HackathonBigPicture.scss'

export class HackathonBigPicture extends Component {
  render() {
    return (
      <Fragment>
        <div className="hackathonBigPicture">
          <img src={this.props.imgSrc} className="hackathonBigPicture__img hackathon-shadow"/>
        </div>
      </Fragment>
    )
  }
}

