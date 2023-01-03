import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {
      username: "zett",
      idcard: "3489374912909372"
    }
  },
  reducers: {
    setUserInfo: (state) => {
      state.count += 1
    },
    deleteUserInfo: (state) => {
      state.count -= 1
    },
  },
}) //该暴露貌似没用

export const { setUserInfo, deleteUserInfo } = userSlice.actions

export const selectUser = state => state.user //可有可无,暴露给useSelector的函数

export default userSlice.reducer //给store使用