import React, { Component } from 'react'
import { HackathonMap, HackathonBox, HackathonBoxContent, HackathonButton } from 'components/generics'

import './TaskCompleted.scss'

const marker = {
  lat: -30.027990,
  lng: -51.228052,
  color: '#3F785D',
}

export class TaskCompleted extends Component {
  goInternal(event, path) {
    const { history } = this.props
    history.push(path)
  }

  render() {
    return (
      <div className="app-container">
        <HackathonMap marker={marker} />
        <HackathonBox arrow={false} small={true}>
          <HackathonBoxContent>
            <span>
              <img className="marginRight" src={require('img/bandeirinha.png')} />
              <img src={require('img/bandeirinha.png')} />
            </span>
            <span className="bold">oba, você chegou!</span>
            o explorador que desbrava a sua <br /> cidade, conquista suas recompensas ;)

            <span className="topTen orange"><span className="bold">2 pts</span> + muitas descobertas</span>

            <HackathonButton onClick={(e) => this.goInternal(e, 'detail')}>descobrir</HackathonButton>
          </HackathonBoxContent>
        </HackathonBox>
      </div>
    )
  }
}
