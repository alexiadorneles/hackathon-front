import React from 'react'

import './HackathonSelect.scss'

const HackathonSelect = ({ options }) => {
  return (
    <select>
      {
        options.map(op => <option key={op.value} value={op.value} selected={op.selected}>{op.text}</option>)
      }
    </select>
  )
}

export { HackathonSelect }
