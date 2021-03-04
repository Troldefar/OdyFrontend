import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {}
  },
  reducers: {
    login: (state, action) => {
      if(action.payload) {
        state.user = action.payload;
        console.log("USER SET: ", state.user);
      }
    },
    logout: (state) => {
      state.user = {}
    },
    refreshToken: (state, action) => {
      state.user = {
        ...state.user,
        token: action.payload.token
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { login, logout, refreshToken } = userSlice.actions

export default userSlice.reducer