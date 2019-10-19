import React, { Component } from 'react'
import './HackathonButton.scss'

const getButtonClass = (styleClass, disabled, isSecondaryColor) => {
  return `button ${styleClass} ${disabled ? 'disabled' : ''} ${isSecondaryColor ? 'secondaryColorButton' : ''}`
}

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
    const {
      styleClass,
      children,
      type,
      disabled,
      containerClass,
      isSecondaryColor,
    } = this.props
    return (
      <div className={`buttonContainer ${containerClass}`}>
        <button
          disabled={disabled}
          type={type}
          onClick={this.click}
          className={getButtonClass(styleClass, disabled, isSecondaryColor)}
        >
          {children}
        </button>
      </div>
    )
  }
}

export { HackathonButton }
