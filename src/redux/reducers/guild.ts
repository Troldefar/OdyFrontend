import { GET } from "../actionTypes/actionTypesGuild";

const initialState = {
  user: {}
};

export default function guild(state = initialState, action: any) {
  switch (action.type) {
    case GET:
      console.log("GET");
      return {
        ...state,
        user: {}
      }
    default:
      return state;
  }
}
