import React, { Component, Fragment } from 'react'
import { HackathonDivider } from 'components/generics'

import './HackathonBox.scss'

export class HackathonBox extends Component {
  state = { showFooter: false }

  enableFooter = (event) => {
    event.preventDefault()
    this.setState({ showFooter: true })
    if (this.props.big) {
      window.scrollTo(0, document.body.scrollHeight)
    }
  }

  disableFooter = (event) => {
    event.preventDefault()
    this.setState({ showFooter: false })
  }

  _renderExtra() {
    if (!this.state.showFooter) return null
    return (
      <Fragment>
        {this.props.big ? null : <HackathonDivider />}
        {this.props.footer}
      </Fragment>
    )
  }

  _renderDownIcon() {
    if (!this.props.arrow || this.state.showFooter) return null
    return <span onClick={this.enableFooter}><i className="fas fa-chevron-down flexOne" /></span>
  }

  _renderUpIcon() {
    if (!this.props.arrow || !this.state.showFooter) return null
    return <span onClick={this.disableFooter}><i className="fas fa-chevron-up flexOne" /></span>
  }

  _getClass() {
    if (this.props.small) return this.state.showFooter ? 'box' : 'box small'
    if (this.props.big) return this.state.showFooter ? 'box big scroll' : 'box big'
    return this.state.showFooter ? 'box big' : 'box'
  }

  render() {
    return (
      <div className={this._getClass()}>
        {this.props.big && this.state.showFooter ? null : this.props.children}
        {this._renderDownIcon()}
        {this._renderExtra()}
        {this._renderUpIcon()}
      </div>
    )
  }
}
