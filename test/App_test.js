import React from 'react'
import ReactDOM from 'react-dom'
import sinon from 'sinon'

import App from '../src/App'

it('renders without crashing', () => {
  sinon.stub(document, 'querySelector').returns({ scrollIntoView: sinon.stub() })
  sinon.stub(document, 'querySelectorAll').returns([{}, {}])
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)

  expect(true).toBe(true)
})
