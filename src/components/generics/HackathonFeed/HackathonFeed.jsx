import React, { Component, Fragment } from 'react'
import { HackathonBoxContent, HackathonPicture } from 'generics'
import store from 'objects/store'

import './HackathonFeed.scss'

const people = [
  'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80',
  'https://images.unsplash.com/photo-1541943181603-d8fe267a5dcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=312&q=80',
]

export class HackathonFeed extends Component {

  _renderItem(item, index) {
    if (index > 1) return null
    return (
      <div className="topTen positioner" key={index}>
        <span className="goLeft">{item.date}</span>
        <p className="messages">{item.text}</p>
      </div>
    )
  }

  render() {
    return (
      <Fragment>
        <HackathonBoxContent otherClasses="zeroFlex">
          <p className="orange bold topTen">feed de lembranças</p>
        </HackathonBoxContent>
        <HackathonBoxContent className="background">
          {store.reverse().map((item, i) => this._renderItem(item, i))}
        </HackathonBoxContent>
        <HackathonBoxContent className="background">
          <p className="bold">quem também esteve aqui</p>
          <div className="peopleContainer topTen">
            {people.map((pe, i) => <HackathonPicture imgSrc={pe} key={i} />)}
            <div className="number"><span>+30</span></div>
          </div>
        </HackathonBoxContent>
      </Fragment>
    )
  }
}
