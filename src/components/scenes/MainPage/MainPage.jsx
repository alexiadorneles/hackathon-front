import React, { Component } from 'react'

import './MainPage.scss'
import { Header, HackathonButton, HackathonCardHorizontal } from 'generics'

const imgSrc = 'https://images.unsplash.com/photo-1531325082793-ca7c9db6a4c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
const ranksMock = [
  {
    title: 'João é o amigo das crianças!',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    imgSrc: 'https://www.revistaplaneta.com.br/wp-content/uploads/sites/3/2017/12/15_pl537_pessoa-324x235.jpg',
  },
  {
    title: 'João é o amigo das crianças!',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    imgSrc: 'https://www.revistaplaneta.com.br/wp-content/uploads/sites/3/2017/12/15_pl537_pessoa-324x235.jpg',
  },
  {
    title: 'João é o amigo das crianças!',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    imgSrc: 'https://www.revistaplaneta.com.br/wp-content/uploads/sites/3/2017/12/15_pl537_pessoa-324x235.jpg',
  },
  {
    title: 'João é o amigo das crianças!',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    imgSrc: 'https://www.revistaplaneta.com.br/wp-content/uploads/sites/3/2017/12/15_pl537_pessoa-324x235.jpg',
  },
  {
    title: 'João é o amigo das crianças!',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    imgSrc: 'https://www.revistaplaneta.com.br/wp-content/uploads/sites/3/2017/12/15_pl537_pessoa-324x235.jpg',
  },
  {
    title: 'João é o amigo das crianças!',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    imgSrc: 'https://www.revistaplaneta.com.br/wp-content/uploads/sites/3/2017/12/15_pl537_pessoa-324x235.jpg',
  },
  {
    title: 'João é o amigo das crianças!',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    imgSrc: 'https://www.revistaplaneta.com.br/wp-content/uploads/sites/3/2017/12/15_pl537_pessoa-324x235.jpg',
  },
  {
    title: 'João é o amigo das crianças!',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    imgSrc: 'https://www.revistaplaneta.com.br/wp-content/uploads/sites/3/2017/12/15_pl537_pessoa-324x235.jpg',
  },
  {
    title: 'João é o amigo das crianças!',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    imgSrc: 'https://www.revistaplaneta.com.br/wp-content/uploads/sites/3/2017/12/15_pl537_pessoa-324x235.jpg',
  },
  {
    title: 'João é o amigo das crianças!',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    imgSrc: 'https://www.revistaplaneta.com.br/wp-content/uploads/sites/3/2017/12/15_pl537_pessoa-324x235.jpg',
  },
]

export class MainPage extends Component {

  _renderRankSection = () => {
    return ranksMock.map(rank =>
      <HackathonCardHorizontal
        key={rank.title} {...rank}
      />
    )
  }

  render() {
    return (
      <div className="MainPage page">
        <Header />
        <div className="first-container">
          <div className="image-container">
            <img className="image" src={imgSrc} alt="" />
          </div>
          <div className="buttons-container">
            <HackathonButton className="button" containerClass="image-button"> BUTTON </HackathonButton>
            <HackathonButton isSecondaryColor={true} className="button" containerClass="image-button"> BUTTON </HackathonButton>
            <HackathonButton className="button" containerClass="image-button"> BUTTON </HackathonButton>
          </div>
        </div>

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

        <div className="rank">
          <h2>Heroes</h2>
          <div className="rank-content">
            {this._renderRankSection()}
          </div>
        </div>
      </div>
    )
  }
}

