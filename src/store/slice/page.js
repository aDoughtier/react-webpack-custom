import { createSlice } from '@reduxjs/toolkit'
export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    dogs: [],
  },
  reducers: {
    addDog: (state, action) => {
      state.dogs.push(action.payload)
    },
    deleteDog: (state, { payload }) => {
      state = state.dogs.filter(item => item != payload)
    },
  },
}) //该暴露貌似没用

export const {
  addDog,
  deleteDog,
} = pageSlice.actions

export const selectPage = state => state.page //可有可无,暴露给useSelector的函数

export default pageSlice.reducer //给store使用 