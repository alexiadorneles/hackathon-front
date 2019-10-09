import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login'

import { HackathonLogo } from 'generics'
import { authService } from 'services'
import { localStorageUtils } from 'utils'

import './Login.scss'

class Login extends Component {
  onGoogleSigninSuccess = async (response) => {
    const user = {
      googleId: response.googleId,
      photo: response.w3.Paa,
      email: response.w3.U3,
      fullName: response.w3.ig,
      firstName: response.w3.ofa,
      lastName: response.w3.wea,
    }

    await this.login(user)
  }

  onGoogleSigninFailure = (error) => {
    console.log(error)
  }

  login = async (user) => {
    const response = await authService.login(user)
    localStorageUtils.setToken(response)
    this.goInternal(null, 'main')
  }

  goInternal(event, path) {
    const { history } = this.props
    history.push(path)
  }

  render() {
    return (
      <div className="login">
        <HackathonLogo />
        <GoogleLogin
          className="signin"
          clientId="844297895973-avi4acl30vf48h5196rus3oe1s7ndg0s.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.onGoogleSigninSuccess}
          onFailure={this.onGoogleSigninFailure}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    )
  }
}

export { Login }
