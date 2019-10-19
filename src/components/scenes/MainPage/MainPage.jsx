import React, { Component } from 'react'

import './MainPage.scss'
import { Header, HackathonButton } from 'generics'

const imgSrc = 'https://images.unsplash.com/photo-1531325082793-ca7c9db6a4c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'

export class MainPage extends Component {
  render() {
    return (
      <div className="MainPage">
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
              <h2>Sobre nós</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem sit aliquid ducimus iste praesentium nulla quidem repellendus dicta repellat aut. Voluptate fugit adipisci officiis error blanditiis consequuntur, facere aut officia!</p>
            </div>
            <div className="sobre-section">
              <h2>Descrição</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem sit aliquid ducimus iste praesentium nulla quidem repellendus dicta repellat aut. Voluptate fugit adipisci officiis error blanditiis consequuntur, facere aut officia!</p>
            </div>
          </div>
        </div>

        <div className="rank">
          <h2>Rank</h2>
        </div>
      </div>
    )
  }
}

