import { LOGIN } from "../actionTypes/actionTypes";
import { LOGOUT } from "../actionTypes/actionTypes";
import { REFRESH_TOKEN } from "../actionTypes/actionTypes";

const initialState: Object = {
  user: {}
};

export default function user(state = initialState, action: any): Object {
  switch (action.type) {  
    case LOGIN:
      console.log("login");
      console.log(action);
      return {
        ...state,
        user: {}
      }
    case LOGOUT:
      console.log("Logout");
      return {
        ...state,
        user: {}
      }
    case REFRESH_TOKEN:
      console.log("Refresh token");
      return {
        ...state,
        user: {
          ...user,
          token: action.payload
        }
      }
    default:
      return state;
  }
}
