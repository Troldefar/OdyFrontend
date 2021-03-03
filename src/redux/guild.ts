import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'guild',
  initialState: {
    guild: {}
  },
  reducers: {
    initiate: (state, action) => {
      state.guild = {}
    },
    invite: (state, action) => {
      state.guild = {}
    },
    remove: (state, action) => {
      state.guild += action.payload
    },
    update: (state, action) => {
      state.guild = {
        ...state.guild,
        action
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { initiate, invite, remove, update} = counterSlice.actions

export default counterSlice.reducer