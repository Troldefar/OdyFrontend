import { createSlice } from '@reduxjs/toolkit'

export const searchSlicer = createSlice({
  name: 'search',
  initialState: {
    search: {}
  },
  reducers: {
    search: (state, action) => {
      state.search = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { search } = searchSlicer.actions

export default searchSlicer.reducer