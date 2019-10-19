import React, { Component, Fragment } from 'react'

import './CampaignManager.scss'

import { Header, HackathonBigImage, HackathonCardVertical, HackathonCardHorizontal, HackthonButtonAddCampaign } from 'generics'
import { campaignService } from 'services'

const campaignMock = [
  {
    title: 'Campanha do agasalho',
    text: 'Agasalhos para ajudar crianças do abrigo durante o inverno severo do RS.',
    image: 'https://images.unsplash.com/photo-1470071131384-001b85755536?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80',
  },
  {
    title: 'Campanha do agasalho',
    text: 'Agasalhos para ajudar crianças do abrigo durante o inverno severo do RS.',
    image: 'https://images.unsplash.com/photo-1470071131384-001b85755536?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80',
  },
  {
    title: 'Campanha do agasalho',
    text: 'Agasalhos para ajudar crianças do abrigo durante o inverno severo do RS.',
    image: 'https://images.unsplash.com/photo-1470071131384-001b85755536?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80',
  },
  {
    title: 'Campanha do agasalho',
    text: 'Agasalhos para ajudar crianças do abrigo durante o inverno severo do RS.',
    image: 'https://images.unsplash.com/photo-1470071131384-001b85755536?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80',
  },
  {
    title: 'Campanha do agasalho',
    text: 'Agasalhos para ajudar crianças do abrigo durante o inverno severo do RS.',
    image: 'https://images.unsplash.com/photo-1470071131384-001b85755536?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80',
  }
]

export class CampaignManager extends Component {

  state = { campaignList: [], isOwner: true }

  componentDidMount(){
      this.loadAllCampaign()
  }

  loadAllCampaign = async () => {
    const campaignList = await campaignService.findAll()
    this.setState({campaignList})
  }

  _renderCampaignList = () => {
    return this.state.campaignList.map(item =>
     <HackathonCardHorizontal onCardClick={() => this.onCardClick(item.id)} imgSrc={item.imageUrl} title={item.title} text={item.description}/>
    )
  }

  onCardClick = id => {
    return this.props.history.push(`/campaign/${id}`)
  }

  render() {
    return (
      <Fragment>
        <div className="campaignManager page">
          <Header />
          <HackathonBigImage imgSrc="https://images.unsplash.com/photo-1482405034111-0f96ff461f9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"/>
          <div className="campaignList">
            {this._renderCampaignList()}
          </div>
        </div>
        <div className="campaignManagerUserContent">
          <HackathonCardVertical title={"Maria"} text={"Ela adora doar casacos."} imgSrc="https://images.unsplash.com/photo-1471342051519-9621d25323fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
        </div>
      </Fragment>
    )
  }
}

