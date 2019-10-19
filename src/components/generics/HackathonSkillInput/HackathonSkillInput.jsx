import React, { Component } from 'react'

import './HackathonSkillInput.scss'

export class HackathonSkillInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      skills: [],
      selectedSkill: '',
    }
  }

  onChange = (event) => {
    const { value } = event.target
    const skillsInState = this.state.skills

    if (skillsInState.indexOf(value) == -1) {
      this.setState({
        skills: [...this.state.skills, value],
        selectedSkill: value,
      }, ()=> {
        this.props.onChange(this.state.skills)
      })
    }
  }

  renderOptions = () => {
    return ['Cantor', 'Contador de Histórias'].map((skill, key) => {
      return <option key={key} value={skill}>{skill}</option>
    })
  }

  renderSkills = () => {
    return this.state.skills.map((skill, key) => {
      return <span onClick={() => this.removeSkill(skill)} key={key}>{skill}</span>
    })
  }

  removeSkill = (skillToBeRemoved) => {
    const newList = [...this.state.skills]
    this.setState({
      skills: newList.filter(skill => skill != skillToBeRemoved),
    })
  }

  render() {
    const name = 'Habilidades'
    return (
      <div className="text-input-group">
        <label htmlFor={name}>{name}</label>
        <select onKeyPress={this.handleEnter} className="custom-input skills" type='text' id={name} name={name} value={this.state.selectedSkill} onChange={this.onChange} >
          {this.renderOptions()}
        </select>
        {this.renderSkills()}
      </div>
    )
  }
}

