import React from 'react'

import './HackathonBigImage.scss'

const imgSrc = 'https://images.unsplash.com/photo-1531325082793-ca7c9db6a4c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'

const HackathonBigImage = ({ children }) => {
  return (
    <div className="HackathonBigImage">
      <div className="image-container">
        <img className="image" src={imgSrc} alt="" />
      </div>
      <div className="buttons-container">
        {children}
      </div>
    </div>
  )
}

export { HackathonBigImage }
