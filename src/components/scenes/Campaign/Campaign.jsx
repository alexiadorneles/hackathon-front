import React, { Component, Fragment } from 'react'
import Person from '../../../assets/img/person.jpg'
//import Trofeu from '../../../assets/img/trofeu.png'
import './Campaign.scss'

import { HackathonCardVertical, HackathonTitleBox, HackathonItemCard, HackathonButton } from 'generics'

export class Campaign extends Component {
  render() {
    return (
      <Fragment>
        <div className="campaign">
          <div className="userContent">
            <HackathonCardVertical imgSrc={Person} title={"Maria"} text={"Ela adora doar casacos."}/>
          </div>
          <div className="mainSection">
            <div className="campaignContent">
              <div className="campaignTitle">
                <HackathonTitleBox>Campanha do agasalho infantil</HackathonTitleBox>
              </div>
              <div className="campaignText">
                Esta campanha tem como objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo objetivo.
              </div>
              <div className="campaignItemSection">
                <HackathonItemCard name="Agasalhos" meta={100} text="Agasalhos para ajudar crianças do abrigo durante o inverno severo do RS."/>
                <HackathonItemCard name="Moletom" meta={50} text="Molentos para ajudar crianças do abrigo durante o inverno severo do RS."/>
              </div>
              <div className="campaignButtonSection">
                <HackathonButton justifyStart styleClass="campaignButton">Adicionar Material</HackathonButton>
              </div>
            </div>
          </div>
        </div>   
      </Fragment>
    )
  }
}

