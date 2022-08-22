import { Injectable } from '@angular/core';
import { AbstractControl, Validator } from '@angular/forms';

// to connect custom validator
@Injectable({ providedIn: 'root' })
export class MatchPassword implements Validator {
  // if input unknown then use: control: AbstractControl
  // have to use abstractcontrol otherwise error with ts
  validate(formGroup: AbstractControl) {
    const { password, passwordConfirmation } = formGroup.value;

    if (password === passwordConfirmation) {
      return null;
    } else {
      // accessed with authForm.errors
      return { passwordsDontMatch: true };
    }
  }
}
