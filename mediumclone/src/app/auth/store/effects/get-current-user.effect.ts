import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from './../actions/get-current-user.action';
import { PersistanceService } from '../../../shared/services/persistance.service';
import { ICurrentUser } from './../../../shared/types/current-user.interface';
import { catchError, map, of, switchMap } from 'rxjs';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        return this.authService.getCurrentUser().pipe(
          map((currentUser: ICurrentUser) => {
            // const token = this.persistanceService.get('accessToken');

            // if(!token) {
            //   return of(getCurrentUserFailureAction())
            // }

            return getCurrentUserSuccessAction({ currentUser });
          }),

          catchError(() => {
            return of(getCurrentUserFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {}
}
