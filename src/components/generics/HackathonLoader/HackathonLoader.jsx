import Loader from 'react-loader-spinner'
import React from 'react'
const HACKATHON_LOADER_ID = 'hackathon-loader'

import './HackathonLoader.scss'

const HackathonLoader = () => {
  return (
    <div id={HACKATHON_LOADER_ID}>
      <Loader
        type="Ball-Triangle"
        color="#00BFFF"
        height="100"
        width="100"
      />
    </div>
  )
}

HackathonLoader.show = () => {
  const loader = document.getElementById(HACKATHON_LOADER_ID)
  document.getElementsByClassName('App')[0].style.overflow = 'hidden'
  loader.style.display = 'flex'
}

HackathonLoader.hide = () => {
  const loader = document.getElementById(HACKATHON_LOADER_ID)
  document.getElementsByClassName('App')[0].style = ''
  loader.style.display = 'none'
}

export { HackathonLoader }
