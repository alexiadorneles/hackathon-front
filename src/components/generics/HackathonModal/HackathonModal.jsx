import React, { Component } from 'react'
import Modal from 'react-modal'

import './HackathonModal.scss'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80vw',
    maxHeight: '60vh',
    minWidth: '20vw',
    minHeight: '15vh',
    zIndex: '999999',
  },
}

Modal.setAppElement('#root')

class HackathonModal extends Component {
  constructor() {
    super()

    this.state = { modalIsOpen: true }

    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  afterOpenModal() {
    const divModal = document.querySelector('.ReactModal__Overlay')
    const closeButton = document.querySelector('.onModalClose')
    divModal.appendChild(closeButton)
    document.querySelector('.ReactModal__Overlay').style.zIndex = 9999999
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
    this.props.onClose()
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="HackathonModal">
        <span className="onModalClose" onClick={this.closeModal}>
          <i className="fa fa-times-circle"></i>
        </span>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel={this.props.title}
        >
          <div>{this.props.children}</div>
        </Modal>
      </div>
    )
  }
}

export { HackathonModal }
