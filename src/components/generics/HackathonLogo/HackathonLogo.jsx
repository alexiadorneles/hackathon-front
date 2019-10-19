import React, { Component } from 'react'
//import Logo from '../../../assets/img/logo.png'
import './HackathonLogo.scss'

class HackathonLogo extends Component {
  render() {
    return (
      <div className="Logo">
        <span className="logo-text">BE A </span>
        <img className="logo" src={require('img/beahero2.png')} alt="" />
        <span className="logo-text">UPERHERO</span>
      </div>
    )
  }
}

export { HackathonLogo }
