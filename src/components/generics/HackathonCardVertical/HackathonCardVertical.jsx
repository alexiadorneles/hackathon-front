import React, { Component, Fragment } from 'react'
import { HackathonCard, HackathonBigPicture } from 'generics'

import './HackathonCardVertical.scss'

export class HackathonCardVertical extends Component {
  render() {
    return (
      <Fragment>
        <HackathonCard>
          <div className="hackathonCardVertical">
            <div className="hackathonCardVertical picture">
              <HackathonBigPicture imgSrc={this.props.imgSrc} />
            </div>
            <div className="hackathonCardVertical content">
              <div className="hackathonCardVertical content title">
                {this.props.title}
              </div>
              <div className="hackathonCardVertical content text">
                {this.props.text}
              </div>
            </div>
          </div>
        </HackathonCard>
      </Fragment>
    )
  }
}

