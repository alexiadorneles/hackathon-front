import React, { Component } from 'react'
import './SignUp.scss'
import { TextInput, HackathonButton, HackathonSkillInput } from 'generics'
import { HackathonGeolocationInput } from 'generics'
import { UserService, toastrService } from 'services'

export class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      cpf: '',
      skills: [],
      locationBeingTyped: '',
      coordinates: [],
      image: null,
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

  submit = async (user) => {
    const userService = new UserService()
    try {
      await userService.createUser(user)  
      toastrService.success('Salvo com sucesso!')    
    } catch (error) {
      console.log(error)
    }
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, cpf, skills, coordinates, image } = this.state
    this.submit({ name, email, password, cpf, skills, coordinates, image })
  }

  handleImageChange = ({ target }) => {
    this.setState({
      image: URL.createObjectURL(target.files[0]),
    })
  }

  handleCoordinatesChange = ({ coordinates }) => {
    this.setState({
      coordinates,
    })
  }

  handleSkillsChange = (skills) => {
    this.setState({
      skills,
    })
  }

  renderUploadButtonOrImage = () => {
    const { image } = this.state
    if (image) {
      return (
        <label htmlFor="image" className="image-upload">
          <img src={image} alt="" />
        </label>
      )
    }

    return (
      <label htmlFor="image" className="image-upload">Fazer upload de imagem</label>
    )
  }

  render() {
    const { name, email, password, cpf } = this.state

    return (
      <div className="sign-up">
        <form className="sign-up-container" onSubmit={this.handleOnSubmit}>
          <div className="form-column">
            <h2>Cadastro</h2>
            <TextInput label='Nome' type='text' value={name} onChange={this.handleInputChange} name='name' placeholder='' />
            <TextInput label='Email' type='email' value={email} onChange={this.handleInputChange} name='email' placeholder='' />
            <TextInput label='Senha' type='password' value={password} onChange={this.handleInputChange} name='password' placeholder='' />
            <TextInput label='CPF' type='text' value={cpf} onChange={this.handleInputChange} name='cpf' placeholder='' />
          </div>
          <div className="form-column">
            <HackathonSkillInput onChange={this.handleSkillsChange} />
            <HackathonGeolocationInput onChange={this.handleCoordinatesChange} />
            <input name="image" id="image" accept="image/*" onChange={this.handleImageChange} type="file" />
            {this.renderUploadButtonOrImage()}
            <HackathonButton type="submit">Cadastrar</HackathonButton>
          </div>
        </form>
      </div>
    )
  }
}

