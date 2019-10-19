import React, { Component } from 'react'
import { HackathonModal } from '../HackathonModal/HackathonModal'
import { TextInput } from '..//TextInput/TextInput'
import { HackathonInput } from '../HackathonInput/HackathonInput'
import { HackathonButton } from '../HackathonButton/HackathonButton'

import './HackathonMaterialModal.scss'

export class HackathonMaterialModal extends Component {
  render() {
    return (
      <div className="HackathonMaterialModal">
        <HackathonModal {...this.props}>
          <div>
            <div style={{ width: 1000 }}>
              <TextInput label="Material" name="material" />
              <TextInput label="Meta a Ser Atingida" name="meta" />
              <TextInput type="select" label="Unidade de Medida" name="meta" />
            </div>
            <label htmlFor={"descricao"}>Descrição</label>
            <HackathonInput />
            <HackathonButton justifyStart isSecondaryColor>
              Adicionar Material
            </HackathonButton>
          </div>
        </HackathonModal>
      </div>
    )
  }
}

