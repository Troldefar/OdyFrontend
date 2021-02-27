import { LOGIN } from "../actionTypes/actionTypes";

const initialState = {
  user: {}
};

export default function user(state = initialState, action: any) {
  switch (action.type) {  
    case LOGIN:
      console.log("login");
      console.log(action);
      return {
        ...state,
        user: {}
      }
    default:
      return state;
  }
}
