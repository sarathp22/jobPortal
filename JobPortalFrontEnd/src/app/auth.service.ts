import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { Router } from '@angular/router';

interface AuthResponse {
  status: string;
  success: string;
  token: string;
  userType: number;
  id: string;
}
interface JWTResponse {
  status: string;
  success: string;
  user: any;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenKey = 'jobPortal';
  isAuthenticated: Boolean = false;
  username: Subject<string> = new Subject<string>();
  authToken: string = undefined;
  constructor(private _http:HttpClient,private processHTTPMsgService:ProcessHttpmsgService,private _route:Router) { }

  storeUserCredentials(credentials: any) {
    var credentials = credentials;
    console.log('storeUserCredentials ', credentials);
    localStorage.setItem(this.tokenKey, JSON.stringify(credentials));
    // this.useCredentials(credentials);
  }
  jobseekerLogin(data:any)
  {
    return this._http.post<AuthResponse>("http://localhost:3000/jobSeeker/login",data).pipe( map(res => {
      this.storeUserCredentials({username: data.username, token:res.token, userType:res.userType, id:res.id});
      return {'success': true, 'username': data.username };
  }),
   catchError(error => this.processHTTPMsgService.handleError(error)));
  }

}
