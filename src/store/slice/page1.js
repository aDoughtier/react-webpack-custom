import { createSlice } from '@reduxjs/toolkit'
//可以按照页面划分，或者零散的组成一个slice
export const page1Slice = createSlice({
  name: 'page1',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      console.log(action)
      state.count += action.payload
    },
  },
}) //该暴露貌似没用

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = page1Slice.actions //自动生成的action函数，组件内引入直接调用派发即可
export const selectPage1 = state => state.page1 //可有可无,暴露给useSelector的函数
// 之所以是page1，是因为再store中命名的时候是这个
export default page1Slice.reducer //给store使用 