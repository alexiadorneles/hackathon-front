import React, { Component } from 'react'
import { authService } from 'services'
import { localStorageUtils } from 'utils'
import './Login.scss'
import { TextInput, HackathonButton } from 'generics'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  login = async (user) => {
    const response = await authService.login(user)
    localStorageUtils.setToken(response)
    this.goInternal(null, 'main')
  }

  handleInputChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

  goInternal(event, path) {
    const { history } = this.props
    history.push(path)
  }


  handleOnSubmit = (event) => {
    event.preventDefault()
    const { email, password } = this.state
    this.login({ email, password })
  }

  render() {
    const { email, password } = this.state

    return (
      <div className='login'>
        <form onSubmit={this.handleOnSubmit} className='login-card'>
          <TextInput label='Email' type='text' value={email} onChange={this.handleInputChange} name='email' placeholder='' />
          <TextInput label='Senha' type='password' value={password} onChange={this.handleInputChange} name='password' placeholder='' />
          <HackathonButton type='submit'>Entrar</HackathonButton>
        </form>
      </div>
    )
  }
}

export { Login }
