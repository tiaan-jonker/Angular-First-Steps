import { Validator } from '@angular/forms';
import { UserService } from './../core/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl(''),
    password: new FormControl(''),
    passwordConfirmation: new FormControl(''),
  });

  apiProgress = false;
  signUpSuccess = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onClickSignup() {
    const { passwordConfirmation, ...otherUserInput } = this.form.value;
    this.apiProgress = true;
    this.userService.signUp(otherUserInput).subscribe(() => {
      this.signUpSuccess = true;
    });
  }

  isDisabled() {
    return this.form.get('password')?.value
      ? this.form.get('password')?.value !==
          this.form.get('passwordConfirmation')?.value
      : true;
  }
}
