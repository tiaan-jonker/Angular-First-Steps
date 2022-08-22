import { Injectable, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { AbstractControl, AsyncValidator } from '@angular/forms';
import { map, catchError, of } from 'rxjs';

import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}

  // to bind method to class use arrow function
  validate = (control: AbstractControl) => {
    const { value } = control;

    return this.authService.userNameAvailable(value).pipe(
      // only way to get into map function is if
      // req was successful
      map((value) => {
        if (value.available) {
          console.log('Username available: ', value);
          return null;
        }

        return null;
      }),
      catchError((err) => {
        console.log(err);

        // of operator shortcut for creating a
        // new observable
        if (err.error.username) {
          return of({ nonUniqueUsername: true });
        } else {
          return of({ noConnection: true });
        }
      })
    );
  };
}
