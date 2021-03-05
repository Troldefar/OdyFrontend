import { createSlice } from '@reduxjs/toolkit';

export const notificationSlicer = createSlice({
  name: 'notification',
  initialState: {
    msg: ''
  },
  reducers: {
    notEmpty: (state, action) => {
      state.msg = action.payload;
      console.log(state.msg);
    },
    empty: (state) => {
      state.msg = ''
    }
  }
})

// Action creators are generated for each case reducer function
export const { notEmpty, empty } = notificationSlicer.actions

export default notificationSlicer.reducer