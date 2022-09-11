import { createFeatureSelector } from '@ngrx/store';
import { IAuthState } from './../types/auth-state.interface';
import { IAppState } from 'src/app/shared/types/app-state.interface';
import { createSelector } from '@ngrx/store';

// export const authFeatureSelector = (state: IAppState): IAuthState => state.auth;
export const authFeatureSelector = createFeatureSelector<IAppState, IAuthState>(
  'auth'
);

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.validationError
);

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isLoggedIn
);

export const isAnonSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isLoggedIn === false
);

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.currentUser
);
