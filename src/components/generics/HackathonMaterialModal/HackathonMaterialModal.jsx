import React, { Component } from 'react'
import { HackathonModal } from '../HackathonModal/HackathonModal'
import { TextInput } from '..//TextInput/TextInput'
import { HackathonInput } from '../HackathonInput/HackathonInput'
import { HackathonButton } from '../HackathonButton/HackathonButton'

import './HackathonMaterialModal.scss'

export class HackathonMaterialModal extends Component {
  onClick = () => {
    return this.props.onClick(this.props.model)
  }
  render() {
    return (
      <div className="HackathonMaterialModal">
        <HackathonModal {...this.props}>
          <div id="teste">
            <div style={{  }}>
              <TextInput isLabelCentered type="number" label="Quantidade:" name="meta" />
              <HackathonButton isSecondaryColor onClick={this.onClick}>
                  Finalizar Doação
              </HackathonButton>
            </div>
          </div>
        </HackathonModal>
      </div>
    )
  }
}

