import { combineReducers } from 'redux'
import counter from './counter.redux'

const rootReducer = combineReducers({
  counter
})

export default rootReducer
