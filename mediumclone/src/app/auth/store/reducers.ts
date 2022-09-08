import { createReducer, on, Action } from '@ngrx/store';

import { IAuthState } from '../types/auth-state.interface';
import {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from './actions/register.actions';

const initialState: IAuthState = {
  isSubmitting: false,
  currentUser: null,
  validationError: null,
  isLoggedIn: null,
};

const authReducer = createReducer(
  initialState,

  on(
    registerAction,
    (state): IAuthState => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
      validationError: null,
      isLoggedIn: true,
    })
  ),
  on(
    registerFailureAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      currentUser: null,
      validationError: action.errors,
      isLoggedIn: false,
    })
  )
);

export function reducers(state: IAuthState, action: Action) {
  return authReducer(state, action);
}
