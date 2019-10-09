import React from 'react'
import { HackathonBoxContent } from '../HackathonBoxContent'

export const HackathonPlace = ({ densed, complementar, name = 'prefeitura de porto alegre' }) => (
  <HackathonBoxContent>
    <div className="placeContainer topTen">
      <span> {complementar} </span>
      <br />
      <img className="topTen" height={densed ? '45' : '50'} src={require('img/prefeitura.png')} />
      <p className="bold topTen green"> {name} </p>
    </div>
  </HackathonBoxContent>
)
