import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  authForm = new FormGroup(
    {
      username: new FormControl(
        '',
        // validators: when you start typing a username
        // the async validator does not execute. Angular
        // sees the async validator as expensive because
        // its using the network etc to make the req. So
        // sync validators run first before async
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]+$/),
        ],
        [this.uniqueUsername.validate]
      ),
      // one arr argument assumes sync validators
      // for async there has to be a third
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    },
    { validators: [this.matchPassword.validate] }
  );

  // this is to use an instance of those classes
  constructor(
    private matchPassword: MatchPassword,
    private uniqueUsername: UniqueUsername,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    console.log(this.authForm.value);

    this.authService.signup(this.authForm.value).subscribe({
      // if not an arrow function then 'this' will
      // refer to the subscribe object. To get access
      // to properties on component bind it by using
      // arrow function
      next: (response) => {
        // Nav to some other route
        console.log(this);
      },
      error: (err) => {
        if (!err.status) {
          this.authForm.setErrors({ noConnection: true });
          console.log(this);
        } else {
          this.authForm.setErrors({ unknownError: true });
        }
      },
    });
  }
}
