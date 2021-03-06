import React, { Component } from 'react'
import './HackathonInput.scss'

class HackathonInput extends Component {
  render() {
    const { label, type, value, onChange, name, placeholder } = this.props
    return (
      <div className="inputGroup">
        <label className="label" htmlFor={label}>{label}</label>
        <textarea
          className="input"
          type={type}
          id={label}
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
        />
      </div>
    )
  }
}

export { HackathonInput }
