import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { localStorageUtils } from 'utils'
import { HackathonLoader } from 'generics'
import { Home, TaskCompleted, PlaceDetail, Login } from 'scenes'

import './App.scss'

class App extends Component {

  constructor() {
    super()
    this.state = { unAuthorized: true }
  }

  componentDidMount() {
    const token = localStorageUtils.getToken()
    this.setState({ unAuthorized: !token })
  }

  render() {
    return (
      <div className="App">
        <HackathonLoader />
        <BrowserRouter>
          <Switch>
            <Route path="/main" component={Home} />
            <Route path="/completed" component={TaskCompleted} />
            <Route path="/detail" component={PlaceDetail} />
            <Route path="/" component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
