import React, { Fragment } from 'react'

import './HackathonPicture.scss'

const HackathonPicture = ({ text, imgSrc }) => {
  return (
    <Fragment>
      <div className="hackathonPicture">
        <img src={imgSrc} className="hackathonPicture__img hackathon-shadow"/>
        {text ? <h3 className="hackathonPicture__text">{text}</h3> : null }
      </div>
    </Fragment>
  )
}

export { HackathonPicture }
