import React, { Component } from 'react'
import Person from '../../../assets/img/person.jpg'
//import Trofeu from '../../../assets/img/trofeu.png'
import './Campaign.scss'

import { Header, HackathonCardVertical, HackathonTitleBox, HackathonItemCard, HackathonBigImage, HackathonMaterialModal } from 'generics'
import { campaignService, toastrService } from 'services'

const itemMock = [
  {
    name: 'Agasalho',
    text: 'Agasalhos para ajudar crianças do abrigo durante o inverno severo do RS.',
    meta: 100,
  },
  {
    name: 'Moletom',
    text: 'Molentos para ajudar crianças do abrigo durante o inverno severo do RS.',
    meta: 50,
  },
]

const imgSrc = 'https://images.unsplash.com/photo-1513807016779-d51c0c026263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'

export class Campaign extends Component {

  state = { showModal: false, campaign: {} }

  componentDidMount() {
    this.id = this.props.match.params.id
    this.loadById()
  }

  loadById = async () => {
    const campaign = await campaignService.findById(this.id)
    this.setState({campaign})
  }

  _renderItemSection = () => {
    return itemMock.map(item =>
      <HackathonItemCard onClick={this.onClickAddMaterial} key={item.name} name={item.name} meta={item.meta} text={item.text} />
    )
  }

  onClickAddMaterial = () => {
    this.setState({ showModal: true })
  }

  onCloseModal = () => {
    this.setState({ showModal: false })
  }

   makeDonation = async(quantidade) => {
    await donationService.makeDonation({
      campaign: this.state.campaign,
      quantidade,
      material: this.material,
    })
    this.onCloseModal()
    toastrService.success('Sucesso!', 'Sua doação vai ser processada pela organização e logo entrarão em contato com você')
    this.loadById()
  }

  render() {
    return (
      <div className="campaignContainer page">
        <Header />
        {this.state.showModal ? <HackathonMaterialModal model="" onClick={this.makeDonation} onClose={this.onCloseModal} title="Adicionar material" /> : null}
        <div className="campaign">
          <div className="userContent">
            <HackathonCardVertical imgSrc={Person} title={'Maria'} text={'Ela adora doar casacos.'} />
          </div>
          <div className="mainSection">
            <div className="campaignImage">
              <HackathonBigImage imgSrc={imgSrc} />
            </div>
            <div className="campaignContent">
              <div className="campaignTitle">
                <HackathonTitleBox>Campanha do agasalho infantil</HackathonTitleBox>
              </div>
              <div className="campaignText">
                Esta campanha tem como objetivo objetivo objetivo objetivo.
              </div>
              <div className="campaignItemSection">
                {this._renderItemSection()}
              </div>
              <div className="campaignButtonSection">
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

