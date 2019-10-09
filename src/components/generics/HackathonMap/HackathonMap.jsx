import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import './HackathonMap.scss'

const Marker = ({ lat, lng, color }) =>
  <i lat={lat} lng={lng} style={{ color, fontSize: 30 }} className="fas fa-map-marker-alt" />

export class HackathonMap extends Component {
  static defaultProps = {
    center: {
      lat: -30.0925399,
      lng: -51.1758782,
    },
    marker: {
      lat: - 30.056,
      lng: - 51.1622,
      color: 'red',
    },
    zoom: 12,
  }

  render() {
    const { center, zoom, marker } = this.props
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDaedqZhZrRQvt1P0sJG9FrJMaARNPS7FI' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker lat={marker.lat} lng={marker.lng} color={marker.color} />
        </GoogleMapReact>
      </div>
    )
  }
}
