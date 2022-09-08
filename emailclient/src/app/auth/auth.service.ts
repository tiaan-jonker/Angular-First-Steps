import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

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

interface CheckUserAuthStatusResponse {
  authenticated: boolean;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';
  singedin$ = new BehaviorSubject(false);

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
    return this.http
      .post<SignupResponse>(`${this.rootUrl}/auth/signup`, signupCredentials)
      .pipe(
        tap((res) => {
          this.singedin$.next(true);
        })
      );
  }

  checkUserAuthStatus() {
    return this.http
      .get<CheckUserAuthStatusResponse>(`${this.rootUrl}/auth/signedin`)
      .pipe(
        tap(({ authenticated }) => {
          this.singedin$.next(authenticated);
        })
      );
  }

  signout() {
    return this.http.post(`${this.rootUrl}/auth/signout`, {}).pipe(
      tap(() => {
        this.singedin$.next(false);
      })
    );
  }
}
