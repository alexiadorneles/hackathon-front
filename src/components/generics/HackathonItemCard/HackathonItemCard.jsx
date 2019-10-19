import React, { Component } from 'react'
import { HackathonCard } from 'generics'

import './HackathonItemCard.scss'
import { HackathonButton } from '../HackathonButton/HackathonButton'

export class HackathonItemCard extends Component {
  render() {
    return (
      <HackathonCard>
        <div className="hackathonItemCard">
          <div className="topSection">
            <div className="name">
              Nome: {this.props.name}
            </div>
            <div className="meta">
              Meta: {this.props.meta}
            </div>
          </div>
          <div className="textSection">
            {this.props.text}
          </div>
          <HackathonButton onClick = {this.props.onClick} justifyEnd isSecondaryColor>
            Doar
          </HackathonButton>
        </div>
      </HackathonCard>
    )
  }
}

