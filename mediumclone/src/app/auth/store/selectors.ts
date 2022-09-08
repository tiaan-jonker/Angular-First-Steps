import { IAuthState } from './../types/auth-state.interface';
import { IAppState } from 'src/app/shared/types/app-state.interface';
import { createSelector } from '@ngrx/store';

export const authFeatureSelector = (state: IAppState): IAuthState => state.auth;

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.validationError
);
