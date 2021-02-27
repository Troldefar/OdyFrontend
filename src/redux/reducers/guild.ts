import { GET } from "../actionTypes/actionTypesGuild";

const initialState = {
  user: {}
};

export default function guild(state = initialState, action: any) {
  switch (action.type) {
    case GET:
      console.log("Updating guidl");
      return {
        ...state,
        group: action.payload
      }
    default:
      return state;
  }
}
