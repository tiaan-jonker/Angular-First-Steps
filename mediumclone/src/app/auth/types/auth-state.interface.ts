import { IBackendErrors } from '../../shared/types/backend-errors.interface';
import { ICurrentUser } from '../../shared/types/current-user.interface';

export interface IAuthState {
  isSubmitting: boolean;
  isLoading: boolean;
  currentUser: ICurrentUser | null;
  isLoggedIn: boolean | null;
  validationError: IBackendErrors | null;
}
