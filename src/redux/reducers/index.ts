// Combine
import { combineReducers } from "redux";

// Reducers
import user from './user';
import group from './group';
import guild from './guild';

// Export
export default combineReducers({ user, group, guild });