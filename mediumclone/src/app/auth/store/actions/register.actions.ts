import { ICurrentUser } from './../../../shared/types/current-user.interface';
import { createAction, props } from '@ngrx/store';
import { IRegisterReq } from '../../types/register-req.interface';
import { ActionTypes } from '../action-types';
import { IBackendErrors } from 'src/app/shared/types/backend-errors.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{
    request: IRegisterReq;
  }>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: IBackendErrors }>()
);
