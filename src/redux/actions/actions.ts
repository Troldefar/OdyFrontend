import { LOGIN } from "../actionTypes/actionTypes";
import { ReduxAction } from '../../interfaces/interfaces';

export const login = (): ReduxAction => ({
  type: LOGIN,
  payload: {
    test: 123
  }
});