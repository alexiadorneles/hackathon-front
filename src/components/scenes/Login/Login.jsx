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
      isCompany: false,
    }
  }

  login = async (user) => {
    try {
      const response = await authService.login(user)
      authService.storeLoginData(response)
      localStorageUtils.setToken(response)
      this.goInternal(null, 'main')
    } catch (error) {
      console.log(error)
    }
  }

  handleInputChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleOnSubmit = async (event) => {
    event.preventDefault()
    const { email, password, isCompany } = this.state
    if (isCompany) {
      localStorageUtils.setRole('ORGANIZATION')
    } else {
      localStorageUtils.setRole('USER')
    }
    await this.login({ email, password })
  }

  goInternal(event, path) {
    const { history } = this.props
    history.push(path)
  }

  render() {
    const { email, password, isCompany } = this.state

    return (
      <div className='login'>
        <form onSubmit={this.handleOnSubmit} className='login-card'>
          <div className="menu-logo">Be A HERO!</div>
          <TextInput label='Email' type='text' value={email} onChange={this.handleInputChange} name='email' placeholder='' />
          <TextInput label='Senha' type='password' value={password} onChange={this.handleInputChange} name='password' placeholder='' />
          <TextInput label='É empresa?' type='checkbox' value={isCompany} onChange={this.handleInputChange} name='isCompany' placeholder='' />
          <HackathonButton type='submit'>Entrar</HackathonButton>
        </form>
      </div>
    )
  }
}

export { Login }
