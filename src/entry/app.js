import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Home from '../component/home'
import Done from '../component/done'
import Undo from '../component/undo'
import Counter from '../container/counter'
import './app.less'

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/">home</Link>
        <Link to="/done">done</Link>
        <Link to="/undo">undo</Link>
        <Counter />
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
