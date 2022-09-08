import { loginAction } from './../actions/login.actions';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginEffect {
  login$ = createEffect(() => this.actions$.pipe(
    ofType(loginAction),
    
  ));

  constructor(private actions$: Actions) {}
}
