import { render, screen } from '@testing-library/angular';
import { SignUpComponent } from './sign-up.component';
import userEvent from '@testing-library/user-event';
import 'whatwg-fetch';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

const setup = async () => {
  await render(SignUpComponent, {
    imports: [HttpClientTestingModule],
  });
};

describe('SignUpComponent', () => {
  describe('Layout', () => {
    it('has Sign Up header', async () => {
      await setup();
      const header = screen.getByRole('heading', { name: 'Sign Up' });
      expect(header).toBeInTheDocument();
    });

    it('has username input', async () => {
      await setup();
      const usernameLabel = screen.getByLabelText('Username:');
      expect(usernameLabel).toBeInTheDocument();
    });

    it('has email input', async () => {
      await setup();
      const emailLabel = screen.getByLabelText('Email:');
      expect(emailLabel).toBeInTheDocument();
    });

    it('has password input', async () => {
      await setup();
      const passwordLabel = screen.getByLabelText('Password:');
      expect(passwordLabel).toBeInTheDocument();
    });

    it('has password type for password input', async () => {
      await setup();
      const passwordInput = screen.getByLabelText('Password:');
      expect(passwordInput).toHaveAttribute('type', 'password');
    });

    it('has password confirmation input', async () => {
      await setup();
      const passwordConfirmationLabel =
        screen.getByLabelText('Confirm Password:');
      expect(passwordConfirmationLabel).toBeInTheDocument();
    });

    it('has password type for password confirmation input', async () => {
      await setup();
      const passwordConfirmationInput =
        screen.getByLabelText('Confirm Password:');
      expect(passwordConfirmationInput).toHaveAttribute('type', 'password');
    });

    it('has Sign Up button', async () => {
      await setup();
      const button = screen.getByRole('button', { name: 'Sign Up' });
      expect(button).toBeInTheDocument();
    });

    it('disables the button initially', async () => {
      await setup();
      const button = screen.getByRole('button', { name: 'Sign Up' });
      expect(button).toBeDisabled();
    });
  });

  describe('Interactions', () => {
    it('enables button when password and password confirmation have same value', async () => {
      await setup();

      const password = screen.getByLabelText('Password:');
      const passwordConfirmation = screen.getByLabelText('Confirm Password:');

      await userEvent.type(password, 'P4ssword');
      await userEvent.type(passwordConfirmation, 'P4ssword');

      const button = screen.getByRole('button', { name: 'Sign Up' });

      expect(button).toBeEnabled();
    });

    it('sends user credentials to server after clicking Sign Up button', async () => {
      // const spy = jest.spyOn(window, 'fetch');
      await setup();
      let httpTestingController = TestBed.inject(HttpTestingController);

      const username = screen.getByLabelText('Username:');
      const email = screen.getByLabelText('Email:');
      const password = screen.getByLabelText('Password:');
      const passwordConfirmation = screen.getByLabelText('Confirm Password:');

      await userEvent.type(username, 'user1');
      await userEvent.type(email, 'user1@gmail.com');
      await userEvent.type(password, 'P4ssword');
      await userEvent.type(passwordConfirmation, 'P4ssword');

      const button = screen.getByRole('button', { name: 'Sign Up' });
      await userEvent.click(button);

      // const args = spy.mock.calls[0];
      // const { method, body, headers } = args[1] as RequestInit;
      const { request } = httpTestingController.expectOne('/api/1.0/users');
      const { method, body } = request;

      expect(method).toBe('POST');
      expect(body).toEqual({
        username: 'user1',
        password: 'P4ssword',
        email: 'user1@gmail.com',
      });
    });
  });
});
