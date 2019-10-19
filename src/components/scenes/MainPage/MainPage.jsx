import React, { Component, Fragment } from 'react'

import './MainPage.scss'
import { Header, HackathonButton, HackathonCardHorizontal, HackathonBigImage, HackathonLogo } from 'generics'
import { rankService } from 'services'

const imgSrc = 'https://images.unsplash.com/photo-1531325082793-ca7c9db6a4c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'

export class MainPage extends Component {

  state = { ranks: [] }

  async componentDidMount() {
    const ranks = await rankService.getRank()
    const allRanked = ranks.volunteers.concat(ranks.companies)
    this.setState({ranks: allRanked})
  }

  goToSignUp = () => {
    this.props.history.push('/signup')
  }

  goToLogin = () => {
    this.props.history.push('/')
  }

  _renderRankSection = () => {
    return this.state.ranks.map(rank =>
      <HackathonCardHorizontal
        key={rank.title} text={rank.fullName} imgSrc={rank.imageUrl}
      />
    )
  }

  _renderAboutUsSection = () => {
    return (
      <div className="content">
        <div className="sobre-container container">
          <div className="sobre-section">
            <h2>O que é a BE A SUPERHERO?</h2>
            <p>
              A BE A SUPERHERO é uma plataforma que ajuda a facilitar, agilizar e centralizar as maneiras de se ajudar organizações de crianças carentes, onde nela você como organização pode se cadastrar, criar campanhas que podem receber doações de materiais, materiais especiais e voluntários que possam auxiliar a instituição
            </p>
          </div>
          <div className="sobre-section">
            <h2>Quero ser um SUPERHERO!</h2>
            <p>
              Você pode ajudar organizações de várias maneiras, seja você empresa ou voluntário! Basta se cadastrar e acessar a campanha mais próxima de você, onde poderá participar de seus eventos, fazer doações ou se voluntariar para os vários tipos de trabalhos voluntários disponíveis.
            </p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="MainPage page">
        <Header />
        <HackathonBigImage logo={<HackathonLogo />} imgSrc={imgSrc}>
          <Fragment>
            <HackathonButton
              styleClass="override-button"
              containerClass="image-button"
              onClick={this.goToSignUp}
            > Sou uma empresa </HackathonButton>
            <HackathonButton
              isSecondaryColor={true}
              styleClass="override-button"
              containerClass="image-button"
              onClick={this.goToLogin}
            > Já possuo cadastro </HackathonButton>
            <HackathonButton
              styleClass="override-button"
              containerClass="image-button"
              onClick={this.goToSignUp}
            > Sou um voluntário </HackathonButton>
          </Fragment>
        </HackathonBigImage>

        {this._renderAboutUsSection()}

        <div className="rank">
          <h2>Heroes</h2>
          <div className="rank-content">
            {this._renderRankSection()}
          </div>
        </div>
      </div >
    )
  }
}

