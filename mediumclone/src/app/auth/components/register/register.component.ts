import { AuthService } from '../../services/auth.service';
import { IAppState } from 'src/app/shared/types/app-state.interface';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from './../../store/selectors';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { registerAction } from 'src/app/auth/store/actions/register.actions';
import { IRegisterReq } from '../../types/register-req.interface';
import { IBackendErrors } from 'src/app/shared/types/backend-errors.interface';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<IBackendErrors | null>;

  constructor(private fb: FormBuilder, private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initializeForm(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const request: IRegisterReq = {
      user: this.registerForm.value,
    };
    this.store.dispatch(registerAction({ request }));
  }
}
