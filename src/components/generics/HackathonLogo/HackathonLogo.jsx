import React, { Component } from 'react'
import Logo from 'img/logo.png'
import './HackathonLogo.scss'

class HackathonLogo extends Component {
  render() {
    return <img className="logo" src={Logo} alt="Desbrava" />
  }
}

export { HackathonLogo }
