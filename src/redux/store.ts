import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import groupReducer from './group';
import guildReducer from './guild';
import notificationReducer from './notification';
import searchReducer from './search';

export default configureStore({
  reducer: {
    user: userReducer,
    group: groupReducer,
    guild: guildReducer,
    notification: notificationReducer,
    search: searchReducer
  }
});

export type Rootstate = ReturnType<typeof configureStore>