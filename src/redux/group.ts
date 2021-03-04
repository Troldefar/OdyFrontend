import { createSlice } from '@reduxjs/toolkit'

export const groupSlicer = createSlice({
  name: 'group',
  initialState: {
    group: {}
  },
  reducers: {
    initiate: (state, action) => {
      state.group = {}
    },
    invite: (state, action) => {
      state.group = {}
    },
    remove: (state, action) => {
      state.group += action.payload
    },
    update: (state, action) => {
      state.group = {
        ...state.group,
        action
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { initiate, invite, remove, update} = groupSlicer.actions

export default groupSlicer.reducer