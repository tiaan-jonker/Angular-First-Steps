import { ILoginReq } from './../types/login-req.interface';
import { IAuthResponse } from './../types/auth-response.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { IRegisterReq } from '../types/register-req.interface';
import { ICurrentUser } from 'src/app/shared/types/current-user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = environment.apiUrl;

  getUser(response: IAuthResponse): ICurrentUser {
    return response.user;
  }

  constructor(private http: HttpClient) {}

  register(data: IRegisterReq): Observable<ICurrentUser> {
    return this.http
      .post<IAuthResponse>(`${this.baseUrl}/users`, data)
      .pipe(map(this.getUser));
  }

  login(data: ILoginReq): Observable<ICurrentUser> {
    return (
      this.http
        .post<IAuthResponse>(`${this.baseUrl}/users/login`, data)
        // below same as above
        .pipe(map((response: IAuthResponse) => response.user))
    );
  }
}
