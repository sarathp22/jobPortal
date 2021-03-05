import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { AdminService } from './admin.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AdminInterceptor implements HttpInterceptor {
  userType;
  constructor(private inj: Injector) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

// if(localStorage.getItem('jobPortal'))
// {

    // this.userType=JSON.parse(localStorage.getItem('jobPortal')).userType;

  //   if(this.userType == 2)
  // {
  //   const authService1 = this.inj.get(EmployerService);
  //   // Get the auth header from the service.
  //   const authToken1 = authService1.getToken();
  //   console.log("Interceptor: " + authToken1);
  //   // Clone the request to add the new header.
  //   const authReq1 = req.clone({headers: req.headers.set('Authorization', 'bearer ' + authToken1)});

  //       // Pass on the cloned request instead of the original request.
  //   return next.handle(authReq1);
  // }
  // else if(this.userType == 1){
    const authService2 = this.inj.get(AdminService);
    // Get the auth header from the service.
    const authToken2 = authService2.getToken();
    console.log("Interceptor: " + authToken2);
    // Clone the request to add the new header.
    const authReq2 = req.clone({headers: req.headers.set('Authorization', 'bearer ' + authToken2)});

        // Pass on the cloned request instead of the original request.
    return next.handle(authReq2);
  // }

   
 
 
  // }

}

}

@Injectable()
export class UnauthorizedAdminInterceptor implements HttpInterceptor {
  userType;
  constructor(private inj: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // if(localStorage.getItem('jobPortal'))
    // {

    // this.userType=JSON.parse(localStorage.getItem('jobPortal')).userType;
    // console.log(this.userType);
    // if(this.userType == 2)
    // {
    //   const authService1 = this.inj.get(EmployerService);
    // const authToken1 = authService1.getToken();
    // console.log("Interceptor: " + authToken1);

    // return next
    //   .handle(req)
    //   .pipe(tap((event: HttpEvent<any>) => {
    //     // do nothing
    //   }, (err: any) => {
    //     if (err instanceof HttpErrorResponse) {
    //       if (err.status === 401 && authToken1) {
    //         console.log('Unauthorized Interceptor: ', err);
    //         authService1.checkJWTtoken();
    //       }
    //     }
    //   }));
    // }

    // else if(this.userType == 1){

      const authService2 = this.inj.get(AdminService);
    const authToken2 = authService2.getToken();
    console.log("Interceptor: " + authToken2);

    return next
      .handle(req)
      .pipe(tap((event: HttpEvent<any>) => {
        // do nothing
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401 && authToken2) {
            console.log('Unauthorized Interceptor: ', err);
            authService2.checkJWTtoken();
          }
        }
      }));

    // }
    
  // }

  }
}
