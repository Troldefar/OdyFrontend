import { LOGIN } from "../actionTypes/actionTypes";

export const login = (): Object => ({
  type: LOGIN,
  payload: {
    test: 123
  }
});