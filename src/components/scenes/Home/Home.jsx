import React, { Component } from 'react'

import { HackathonMap, HackathonBox, HackathonBoxContent, HackathonPlace } from 'components/generics'
import { HackathonDivider } from 'components/generics'
import './Home.scss'

class Home extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.goInternal(null, 'completed')
    }, 20000)
  }

  goInternal(event, path) {
    const { history } = this.props
    history.push(path)
  }

  _buildFooter() {
    return (
      <HackathonBoxContent>
        <p className="topTen">
          <span>
            com essa descoberta, <br />
            você vai conquistar <span className="bold orange">2 pontos.</span>
          </span>

          <br />
          <br />
          <em>dica de amigo:</em>
          <br />
          ao acumular 30 pontos, <br />
          você pode converter <br />
          em créditos no Bike POA. ;) <br />
        </p>
        <br />
        <span className="bold">vai lá, desbravador!</span>
      </HackathonBoxContent>
    )
  }

  render() {
    return (
      <div className="app-container">
        <HackathonMap />
        <HackathonBox footer={this._buildFooter()} arrow={true}>
          <HackathonBoxContent>
            <img height="30" src={require('img/binoculo-red.png')} />
            <span className="bold topTen">ora ora, temos um explorador <br /> de primeira viagem :D</span>
          </HackathonBoxContent>
          <HackathonDivider />
          <HackathonPlace complementar="sua primeira descoberta é" />
        </HackathonBox>
      </div >
    )
  }
}

export { Home }
