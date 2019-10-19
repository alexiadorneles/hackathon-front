import React, { Component } from 'react'
//import Trofeu from '../../../assets/img/trofeu.png'
import './Campaign.scss'

import { Header, HackathonCardVertical, HackathonTitleBox, HackathonItemCard, HackathonBigImage, HackathonMaterialModal } from 'generics'
import { campaignService, toastrService } from 'services'

const imgSrc = 'https://images.unsplash.com/photo-1519038983316-43241d5d7b61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'

export class Campaign extends Component {

  state = { showModal: false, campaign: {}, campaignItemList: [] }

  componentDidMount() {
    this.id = this.props.match.params.id
    this.loadById()
    this.loadItemsById()
  }

  loadById = async () => {
    const campaign = await campaignService.findById(this.id)
    this.setState({campaign})
  }

  loadItemsById = async() => {
    const campaignItemList = await campaignService.findAllItemsById(this.id)
    this.setState({campaignItemList})
  }

  _renderItemSection = () => {
    return this.state.campaignItemList.map(item =>
      <HackathonItemCard onClick={this.onClickAddMaterial} key={item.title} name={item.title} meta={item.quantity} text={item.description} />
    )
  }

  onClickAddMaterial = () => {
    this.setState({ showModal: true })
  }

  onCloseModal = () => {
    this.setState({ showModal: false })
  }

   makeDonation = () => {
    this.onCloseModal()
    toastrService.success('Sucesso!', 'Sua doação vai ser processada pela organização e logo entrarão em contato com você')
  }

  render() {
    return (
      <div className="campaignContainer page">
        <Header />
        {this.state.showModal ? <HackathonMaterialModal model="" onClick={this.makeDonation} onClose={this.onCloseModal} title="Adicionar material" /> : null}
        <div className="campaign">
          <div className="userContent">
            <HackathonCardVertical title={"Abrigo meu lar"} text={"Somos uma organização que trabalhamos com crianças carentes que possuem pais em situação de recuperação, atuamos na área desde 1997. Situados em Porto Alegre, próximos ao centro histórico, iniciamos nossa associação ajudando crianças em situação de miséria e fome extrema. Hoje, com a ajuda de nossos colaboradores, proporcionamos educação e proteção para crianças de todas as idades em situação de vunerabilidade."} imgSrc="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"/>
          </div>
          <div className="mainSection">
            <div className="campaignImage">
              <HackathonBigImage imgSrc={imgSrc} />
            </div>
            <div className="campaignContent">
              <div className="campaignTitle">
                <HackathonTitleBox>Campanha para apoio a recém nascidos</HackathonTitleBox>
              </div>
              <div className="campaignText">
                Esta campanha tem como objetivo apoiar recém nascidos de comunidades carentes das periferias da cidade.
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

