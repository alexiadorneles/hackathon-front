import React, { Component } from 'react'
import Logo from '../../../assets/img/logo.png'
import './HackathonLogo.scss'

class HackathonLogo extends Component {
  render() {
    return <img className="logo" src={Logo} alt="" />
  }
}

export { HackathonLogo }
