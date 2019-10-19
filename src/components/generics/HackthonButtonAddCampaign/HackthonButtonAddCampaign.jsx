import React, { Component } from 'react'

import './HackthonButtonAddCampaign.scss'

export class HackthonButtonAddCampaign extends Component {
  render() {
    return (
      <div>
        <button className="button-add-campaign">
          <span className="button-plus">+</span>
        </button>
      </div>
    )
  }
}

