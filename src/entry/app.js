import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Home from '../container/home'
import Done from '../container/done'
import Undo from '../container/undo'
import './app.less'

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/">home</Link>
        <Link to="/done">done</Link>
        <Link to="/undo">undo</Link>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/done" component={Done} />
          <Route path="/done" component={Done} />
          <Route path="/undo" component={Undo} />
        </Switch>
      </div>
    )
  }
}

export default App
