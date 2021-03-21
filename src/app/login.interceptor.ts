import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem("mytoken");

    console.log("Avant le clonage");
    console.log(request.params.keys());
    
    if(token) {

      let p = new HttpParams();

      let k = request.params.keys();
      for (const i in k) {
         p = p.set(k[i], request.params.get(k[i]))
        }

      p = p.set('access_token', token);

      let cloneReq = request.clone({
        params : p
      });

      console.log("Après le clonage");
      console.log(cloneReq.params.keys());

      return next.handle(cloneReq);

    }
    return next.handle(request)
  }
}

export const loginInterceptorProvider = {
  provide : HTTP_INTERCEPTORS,
  useClass : LoginInterceptor,
  multi: true
}
