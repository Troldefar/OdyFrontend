import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    user: {}
  },
  reducers: {
    login: (state, action) => {
      state.user = {}
    },
    logout: (state, action) => {
      state.user = {}
    },
    refreshToken: (state, action) => {
      state.user += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { login, logout, refreshToken } = counterSlice.actions

export default counterSlice.reducer