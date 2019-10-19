import React, { Component } from 'react'
import './TextInput.scss'

export class TextInput extends Component {
  render() {
    const { label, value, type, onChange, name } = this.props

    return (
      <div className="text-input-group">
        <label htmlFor="">{label}</label>
        <input type={type} name={name} value={value} onChange={onChange} />
      </div>
    )
  }
}

