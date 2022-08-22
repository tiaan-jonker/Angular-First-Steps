import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UsernameAvailableResponse {
  available: boolean;
}

interface SignupCredentials {
  username: string | null;
  password: string | null;
  passwordConfirmation: string | null;
}

interface SignupResponse {
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';

  constructor(private http: HttpClient) {}

  userNameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(
      `${this.rootUrl}/auth/username`,
      {
        username,
      }
    );
  }

  // should be of type SignupCredentials but throwing
  // errors (ts)
  signup(signupCredentials: any) {
    return this.http.post<SignupResponse>(
      `${this.rootUrl}/auth/signup`,
      signupCredentials
    );
  }
}
