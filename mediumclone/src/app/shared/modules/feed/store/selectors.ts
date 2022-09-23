import { IFeedState } from './../types/feed-state.interface';
import { createFeatureSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types/app-state.interface';
import { createSelector } from '@ngrx/store';

// export const authFeatureSelector = (state: IAppState): IAuthState => state.auth;
export const feedFeatureSelector = createFeatureSelector<IAppState, IFeedState>(
  'feed'
);

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState: IFeedState) => feedState.isLoading
);

export const errorSelector = createSelector(
  feedFeatureSelector,
  (feedState: IFeedState) => feedState.error
);

export const feedSelector = createSelector(
  feedFeatureSelector,
  (feedState: IFeedState) => feedState.data
);
