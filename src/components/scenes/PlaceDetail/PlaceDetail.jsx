import React, { Component } from 'react'
import { HackathonPlace, HackathonBoxContent, HackathonInput, HackathonBox, HackathonMap, HackathonDivider, HackathonFeed } from '../../generics'
import { toastrService } from 'services'
import store from '../../../objects/store'

const marker = {
  lat: -30.027990,
  lng: -51.228052,
  color: '#3F785D',
}

export class PlaceDetail extends Component {
  state = {}

  _buildFooter() {
    return <HackathonFeed />
  }

  onChange = (event) => {
    this.setState({ value: event.target.value })
  }

  onSubmit = () => {
    if (!this.state.value) return
    store.push({ date: '19.05.19', text: this.state.value })
    this.setState({ value: '' })
    toastrService.success('Mensagem salva com sucesso')
  }

  render() {
    return (
      <div className="app-container">
        <HackathonMap marker={marker} />

        <HackathonBox footer={this._buildFooter()} arrow={true} big={true}>
          <HackathonBoxContent>
            <HackathonPlace densed={true} place={{ name: 'prefeitura de porto alegre' }} />
          </HackathonBoxContent>
          <HackathonBoxContent>
            <p> o edifício foi tombado pelo município em 21 de novembro de 1979 e passou por uma reforma total em 2003, adaptando diversos espaços internos para exposições de arte e para guarda do Acervo Artístico da Prefeitura de Porto Alegre.</p>
          </HackathonBoxContent>
          <HackathonDivider />
          <HackathonBoxContent>
            <span className="bold">compartilhe uma lembrança</span>
            <HackathonInput onSubmit={this.onSubmit} value={this.state.value} placeholder="fique tranquilo, é anônimo ;)" onChange={this.onChange} />
          </HackathonBoxContent>
        </HackathonBox>
      </div>
    )
  }
}
