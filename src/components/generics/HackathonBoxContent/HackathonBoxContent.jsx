import React from 'react'

import './HackathonBoxContent.scss'

export const HackathonBoxContent = ({ children, otherClasses = '' }) => (
  <div className={`boxContent ${otherClasses}`}>
    { children }
  </div >
)
