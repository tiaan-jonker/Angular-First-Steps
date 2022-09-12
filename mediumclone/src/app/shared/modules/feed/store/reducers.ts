import {
  getFeedAction,
  getFeedSuccessAction,
  getFeedFailureAction,
} from './actions';
import { createReducer, on, Action } from '@ngrx/store';
import { IFeedState } from './../types/feed-state.interface';

const initialState: IFeedState = {
  data: null,
  isLoading: false,
  error: null,
};

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): IFeedState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): IFeedState => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(
    getFeedFailureAction,
    (state, action): IFeedState => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: IFeedState, action: Action) {
  return feedReducer(state, action);
}
