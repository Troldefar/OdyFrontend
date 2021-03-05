import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import groupReducer from './group';
import guildReducer from './guild';
import notificationReducer from './notification';

export default configureStore({
  reducer: {
    user: userReducer,
    group: groupReducer,
    guild: guildReducer,
    notification: notificationReducer
  }
});

export type Rootstate = ReturnType<typeof configureStore>