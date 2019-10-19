import React, { Component } from 'react'
import { GoogleComponent } from 'react-google-location'
import './HackathonGeolocationInput.scss'
import { API_KEY } from 'constants'

export class HackathonGeolocationInput extends Component {
  render() {
    return (
      <div className="geolocation-input">
        <label>Localização</label>
        <GoogleComponent
          apiKey={API_KEY}
          language={'pt-br'}
          country={'country:br'}
          coordinates={true}
          locationBoxStyle={'custom-input location'}
          locationListStyle={'custom-geolocation-list'}
          onChange={(e) => { this.props.onChange(e) }} />
      </div>
    )
  }
}

