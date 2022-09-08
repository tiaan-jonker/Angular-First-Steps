import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { SignUpComponent } from './sign-up.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

//* Future tests & implementations:
//* - check username input, min length, form etc
//* - same with password

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [HttpClientTestingModule, SharedModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Layout', () => {
    it('has Sign Up header', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const h1 = signUp.querySelector('h1');
      expect(h1?.textContent).toBe('Sign Up');
    });

    it('has four input fields', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const inputs = signUp.querySelectorAll('input');
      expect(inputs.length).toBe(4);
    });

    it('has username input', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const label = signUp.querySelector('label[for="username"]');
      const input = signUp.querySelector('input[id="username"]');
      const inputPlaceholder = signUp.querySelector(
        'input[placeholder="Enter username"]'
      );
      expect(label).toBeTruthy();
      expect(input).toBeTruthy();
      expect(inputPlaceholder).toBeTruthy();
      expect(label?.textContent).toContain('Username:');
    });

    it('has email input', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const label = signUp.querySelector('label[for="email"]');
      const input = signUp.querySelector('input[id="email"]');
      const inputPlaceholder = signUp.querySelector(
        'input[placeholder="Enter email"]'
      );
      expect(label).toBeTruthy();
      expect(input).toBeTruthy();
      expect(inputPlaceholder).toBeTruthy();
      expect(label?.textContent).toContain('Email:');
    });

    it('has password input', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const label = signUp.querySelector('label[for="password"]');
      const input = signUp.querySelector('input[id="password"]');
      const inputPlaceholder = signUp.querySelector(
        'input[placeholder="Enter password"]'
      );
      expect(label).toBeTruthy();
      expect(input).toBeTruthy();
      expect(inputPlaceholder).toBeTruthy();
      expect(label?.textContent).toContain('Password:');
    });

    it('has password type for password input', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const input = signUp.querySelector(
        'input[id="password"]'
      ) as HTMLInputElement;
      expect(input.type).toBe('password');
    });

    it('has password confirmation input', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const label = signUp.querySelector('label[for="passwordConfirmation"]');
      const input = signUp.querySelector('input[id="passwordConfirmation"]');
      const inputPlaceholder = signUp.querySelector(
        'input[placeholder="Confirm password"]'
      );
      expect(label).toBeTruthy();
      expect(input).toBeTruthy();
      expect(inputPlaceholder).toBeTruthy();
      expect(label?.textContent).toContain('Confirm Password:');
    });

    it('has password type for password confirmation input', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const input = signUp.querySelector(
        'input[id="passwordConfirmation"]'
      ) as HTMLInputElement;
      expect(input.type).toBe('password');
    });

    it('has Sign Up button', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const button = signUp.querySelector('button');
      expect(button?.textContent).toContain('Sign Up');
    });

    it('disables the button initially', () => {
      const signUp = fixture.nativeElement as HTMLElement;
      const button = signUp.querySelector('button');
      expect(button?.disabled).toBeTruthy();
    });
  });

  describe('Interactions', () => {
    let button: HTMLButtonElement | null;
    let httpTestingController: HttpTestingController;
    let signUp: HTMLElement;

    const setupForm = () => {
      httpTestingController = TestBed.inject(HttpTestingController);

      signUp = fixture.nativeElement as HTMLElement;

      const usernameInput = signUp.querySelector(
        'input[id="username"]'
      ) as HTMLInputElement;
      const emailInput = signUp.querySelector(
        'input[id="email"]'
      ) as HTMLInputElement;
      const passwordInput = signUp.querySelector(
        'input[id="password"]'
      ) as HTMLInputElement;
      const passwordConfirmationInput = signUp.querySelector(
        'input[id="passwordConfirmation"]'
      ) as HTMLInputElement;

      usernameInput.value = 'user1';
      usernameInput.dispatchEvent(new Event('input'));
      emailInput.value = 'user1@gmail.com';
      emailInput.dispatchEvent(new Event('input'));
      passwordInput.value = 'P4ssword';
      passwordInput.dispatchEvent(new Event('input'));
      passwordConfirmationInput.value = 'P4ssword';
      passwordConfirmationInput.dispatchEvent(new Event('input'));

      fixture.detectChanges();

      button = signUp.querySelector('button');
    };

    it('enables button when password and password confirmation have same value', () => {
      // const signUp = fixture.nativeElement as HTMLElement;
      // const passwordInput = signUp.querySelector(
      //   'input[id="password"]'
      // ) as HTMLInputElement;
      // const passwordConfirmationInput = signUp.querySelector(
      //   'input[id="passwordConfirmation"]'
      // ) as HTMLInputElement;
      // passwordInput.value = 'P4ssword';
      // passwordInput.dispatchEvent(new Event('input'));
      // passwordConfirmationInput.value = 'P4ssword';
      // passwordConfirmationInput.dispatchEvent(new Event('input'));
      // fixture.detectChanges();
      // const button = signUp.querySelector('button');
      setupForm();
      expect(button?.disabled).toBeFalsy();
    });

    it('sends user credentials to server after clicking Sign Up button', () => {
      // const spy = spyOn(window, 'fetch');
      setupForm();
      button?.click();

      const { request } = httpTestingController.expectOne('/api/1.0/users');
      const { method, body } = request;
      // const args = spy.calls.allArgs()[0];
      // const { method, body, headers } = args[1] as RequestInit;
      expect(method).toBe('POST');
      expect(body).toEqual({
        username: 'user1',
        password: 'P4ssword',
        email: 'user1@gmail.com',
      });
    });

    it('disables button when there is an ongoing api call', () => {
      setupForm();
      button?.click();
      fixture.detectChanges();
      button?.click();
      httpTestingController.expectOne('/api/1.0/users');
      expect(button?.disabled).toBeTruthy();
    });

    it('displays loading while the api request is in progress', () => {
      setupForm();
      button?.click();
      fixture.detectChanges();
      expect(signUp.querySelector('span[role="status"]')).toBeTruthy();
    });

    it('does not display spinner when there is no api request', () => {
      setupForm();
      expect(signUp.querySelector('span[role="status"]')).toBeFalsy();
    });

    it('displays account activation notification after successful sign up request', () => {
      setupForm();
      button?.click();
      expect(signUp.querySelector('span[role="status"]')).toBeFalsy();
      const req = httpTestingController.expectOne('/api/1.0/users');
      req.flush({});
      fixture.detectChanges();
      const message = signUp.querySelector('.alert-success');
      expect(message?.textContent).toContain(
        'Please check your email to activate your account'
      );
    });

    it('hides sign up form after successful sign up request', () => {
      setupForm();
      expect(
        signUp.querySelector('form[data-testid="form-sign-up"]')
      ).toBeTruthy();
      button?.click();
      const req = httpTestingController.expectOne('/api/1.0/users');
      req.flush({});
      fixture.detectChanges();
      expect(
        signUp.querySelector('form[data-testid="form-sign-up"]')
      ).toBeFalsy();
    });
  });

  describe('Validation', () => {
    let signUp: HTMLElement;

    it('displays Username is required when username is null', () => {
      signUp = fixture.nativeElement as HTMLElement;
      expect(
        signUp.querySelector('div[data-testid="username-validation"')
      ).toBeNull();
      const usernameInput = signUp.querySelector(
        'input[id="username"]'
      ) as HTMLInputElement;
      usernameInput.dispatchEvent(new Event('focus'));
      usernameInput.dispatchEvent(new Event('blur'));
      fixture.detectChanges();
      const validationElement = signUp.querySelector(
        'div[data-testid="username-validation"'
      );
      expect(validationElement?.textContent).toContain('Username is required');
    });
  });
});
