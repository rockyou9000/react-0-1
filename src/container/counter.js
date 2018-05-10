import React, { Component } from 'react'
import { plusAction, minusAction } from '../store/counter.redux'
import { connect } from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <div>
        <div>number: {this.props.counter}</div>
        <button onClick={this.props.plusAction}>增加</button>
        <button onClick={this.props.minusAction}>减少</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    plusAction: (...args) => dispatch(plusAction(...args)),
    minusAction: (...args) => dispatch(minusAction(...args))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
