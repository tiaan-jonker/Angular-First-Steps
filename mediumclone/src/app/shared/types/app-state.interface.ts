import { IFeedState } from './../modules/feed/types/feed-state.interface';
import { IAuthState } from 'src/app/auth/types/auth-state.interface';

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
}
