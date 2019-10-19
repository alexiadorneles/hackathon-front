import React from 'react'

import './HackathonBigImage.scss'

const HackathonBigImage = ({ children, logo, imgSrc }) => {
  return (
    <div className="HackathonBigImage">
      <div className="image-container">
        <img className="image" src={imgSrc} alt="" />
      </div>
      <div className="buttons-container">
        {logo}
        {children}
      </div>
    </div>
  )
}

export { HackathonBigImage }
