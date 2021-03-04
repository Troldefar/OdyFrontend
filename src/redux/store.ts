import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import groupReducer from './group';
import guildReducer from './guild';

export default configureStore({
  reducer: {
    user: userReducer,
    group: groupReducer,
    guild: guildReducer
  }
});

export type Rootstate = ReturnType<typeof configureStore>