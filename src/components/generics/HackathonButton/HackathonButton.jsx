import React, { Component } from 'react'
import './HackathonButton.scss'

class HackathonButton extends Component {
  constructor() {
    super()
    this.click = this.click.bind(this)
  }

  click(event) {
    const { onClick, model } = this.props
    if (!!onClick) onClick(event, model)
  }

  render() {
    const { styleClass, children, type, disabled } = this.props
    return (
      <div className="buttonContainer">
        <button
          disabled={disabled}
          type={type}
          onClick={this.click}
          className={`button ${styleClass} ${disabled ? 'disabled' : ''}`}
        >
          {children}
        </button>
      </div>
    )
  }
}

export { HackathonButton }
