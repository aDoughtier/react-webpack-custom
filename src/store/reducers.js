import { combineReducers } from 'redux'

import {
  ADD,
  DECREMENT
} from './actions'

const count = (state = 0, { type, data }) => {
  switch (type) {
    case ADD:
      return state + data
    case DECREMENT:
      return state - data
    default:
      return state
  }
}

//合并reducer===合并状态,这就是汇总的状态，reducer是自动执行
export default combineReducers({
  count,
})