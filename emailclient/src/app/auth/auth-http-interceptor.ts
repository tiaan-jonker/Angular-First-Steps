import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEventType,
} from '@angular/common/http';
import { filter, Observable, tap } from 'rxjs';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // modify or log outgoing request
    const modifiedReq = req.clone({
      withCredentials: true,
    });

    console.log(modifiedReq);

    return next.handle(modifiedReq).pipe(
      filter((val) => val.type === HttpEventType.Response),
      tap((val) => {
        console.log('Req sent to server ', val);
      })
    );
  }
}
