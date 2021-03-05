import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { EmployerService } from './employer.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class EmployerInterceptor implements HttpInterceptor {
  userType;
  constructor(private inj: Injector) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authService1 = this.inj.get(EmployerService);
      // Get the auth header from the service.
      const authToken1 = authService1.getToken();
      console.log("Interceptor: " + authToken1);
      // Clone the request to add the new header.
      const authReq1 = req.clone({headers: req.headers.set('Authorization', 'bearer ' + authToken1)});
  
          // Pass on the cloned request instead of the original request.
      return next.handle(authReq1);


  }

  }


  @Injectable()
export class UnauthorizedEmployerInterceptor implements HttpInterceptor {
  userType;
  constructor(private inj: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    const authService1 = this.inj.get(EmployerService);
    const authToken1 = authService1.getToken();
    console.log("Interceptor: " + authToken1);

    return next
      .handle(req)
      .pipe(tap((event: HttpEvent<any>) => {
        // do nothing
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401 && authToken1) {
            console.log('Unauthorized Interceptor: ', err);
            authService1.checkJWTtoken();
          }
        }
      }));
    }

  }
