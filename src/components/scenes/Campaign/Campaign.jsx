import React, { Component, Fragment } from 'react'
import Person from '../../../assets/img/person.jpg'
//import Trofeu from '../../../assets/img/trofeu.png'
import './Campaign.scss'

import { Header, HackathonCardVertical, HackathonTitleBox, HackathonItemCard, HackathonButton, HackathonBigImage } from 'generics'

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
  {
    name: 'Agasalho',
    text: 'Agasalhos para ajudar crianças do abrigo durante o inverno severo do RS.',
    meta: 100,
  },
  {
    name: 'Moletom',
    text: 'Molentos para ajudar crianças do abrigo durante o inverno severo do RS.',
    meta: 50,
  }
]

export class Campaign extends Component {

  _renderItemSection = () => {
    return itemMock.map(item =>
      <HackathonItemCard name={item.name} meta={item.meta} text={item.text}/>
    )
  }

  render() {
    return (
      <div className="campaignContainer page">
        <Header />
        <div className="campaign">
          <div className="userContent">
            <HackathonCardVertical imgSrc={Person} title={"Maria"} text={"Ela adora doar casacos."}/>
          </div>
          <div className="mainSection">
            <div className="campaignImage">
              <HackathonBigImage/>
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
                <HackathonButton justifyStart styleClass="campaignButton">Adicionar Material</HackathonButton>
              </div>
            </div>
          </div>
        </div>   
      </div>
    )
  }
}

