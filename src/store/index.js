// @reduxjs/toolkit依赖了redux，redux-thunk等，所以这时我们只需要下载  @reduxjs/toolkit 和 react-redux
import { configureStore } from '@reduxjs/toolkit'
import reducers from './slice'
// import logger from 'redux-logger'

//如果觉得没必要使用页面划分状态，则 import { createAction, createReducer } from '@reduxjs/toolkit'，可以直接写

export default configureStore({
  reducer: reducers,
  // preloadedState:{
  //   page1:{
  //     count:10
  //   }
  // }
  // devTools:true,
  // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // enhancers: [batchedSubscribe(debounceNotify)],
})