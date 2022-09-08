import { IBackendErrors } from '../../../shared/types/backend-errors.interface';
import { ICurrentUser } from '../../../shared/types/current-user.interface';
import { ILoginReq } from '../../types/login-req.interface';
import { ActionTypes } from '../action-types';
import { createAction, props } from '@ngrx/store';

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: ILoginReq }>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors: IBackendErrors }>()
);
