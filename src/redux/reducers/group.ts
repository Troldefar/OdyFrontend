import { UPDATE_GROUP_ADD_MEMBER, UPDATE_GROUP_REMOVE_MEMBER } from "../actionTypes/actionTypesGroup";

const initialState = {
  user: {}
};

export default function group(state = initialState, action: any) {
  switch (action.type) {
    case UPDATE_GROUP_ADD_MEMBER:
      console.log("Updating group");
      return {
        ...state,
        group: action.payload
      }
    case UPDATE_GROUP_REMOVE_MEMBER:
      console.log("Updating group: Remove member");
      return {
        ...state,
        group: action.payload
      }
    default:
      return state;
  }
}
