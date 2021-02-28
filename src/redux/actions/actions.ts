import { LOGIN } from "../actionTypes/actionTypes";
import { Action } from '../../interfaces/interfaces';

export const login = (): Action => ({
  type: LOGIN,
  payload: {
    test: 123
  }
});