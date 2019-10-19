import React, { Component } from 'react'
import './TextInput.scss'

export class TextInput extends Component {
  render() {
    const { label, value, type, onChange, name, isLabelCentered } = this.props

    return (
      <div className="text-input-group">
        <label style={{ textAlign: isLabelCentered ? 'center' : ''}} htmlFor={name}>{label}</label>
        <input className="custom-input" type={type} id={name} name={name} value={value} onChange={onChange} />
      </div>
    )
  }
}

