import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
export class AdminService {
  tokenKey = 'jobPortal';
  isAuthenticated: Boolean = false;
  username: Subject<string> = new Subject<string>();
  authToken: string = undefined;
  constructor(private _http:HttpClient,private processHTTPMsgService:ProcessHttpmsgService,private _router:Router) { }
  checkJWTtoken() {
    this._http.get<JWTResponse>("http://localhost:3000/admin/checkJWTtoken")
    .subscribe(res => {
      console.log('JWT Token Valid: ', res);
      this.sendUsername(res.user.username);
    },
    err => {
      console.log('JWT Token invalid: ', err);
      this.destroyUserCredentials();
    });
  }
  sendUsername(name: string) {
    this.username.next(name);
  }

  clearUsername() {
    this.username.next(undefined);
  }

  loadUserCredentials() {
    const credentials = JSON.parse(localStorage.getItem(this.tokenKey));
    console.log('loadUserCredentials ', credentials);
    if (credentials && credentials.username !== undefined) {
      this.useCredentials(credentials);
      if (this.authToken) {
       this.checkJWTtoken();
      }
    }
  }
  logOut() {
    this.destroyUserCredentials();
    this._router.navigate(['']);
  }

  isLoggedIn(): Boolean {
    // return this.isAuthenticated;
    if(localStorage.getItem('jobPortal'))
    {
      if(JSON.parse(localStorage.getItem('jobPortal')).userType == 0)
      {
        return true;
      }
      else
      {
        return false;
      }
      
    }
    else
    {
      return false;
    }
  }

  getUsername(): Observable<string> {
    return this.username.asObservable();
  }

  getToken(): string {
    if(localStorage.getItem('jobPortal'))
    {
      this.authToken=JSON.parse(localStorage.getItem('jobPortal')).token;
    }
    return this.authToken;
  }
  destroyUserCredentials() {
    this.authToken = undefined;
    this.clearUsername();
    this.isAuthenticated = false;
    localStorage.removeItem(this.tokenKey);
  }
  useCredentials(credentials: any) {
    this.isAuthenticated = true;
    this.sendUsername(credentials.username);
    this.authToken = credentials.token;
  }
  storeUserCredentials(credentials: any) {
    var credentials = credentials;
    console.log('storeUserCredentials ', credentials);
    localStorage.setItem(this.tokenKey, JSON.stringify(credentials));
    this.useCredentials(credentials);
  }
  login(data:any)
  {
    return this._http.post<AuthResponse>("http://localhost:3000/admin/login",data)
    // .subscribe(data=>{this.userData=data;this.datas(this.userData);this._route.navigate(['profile/complete1'])},err=>console.log(err))
    .pipe( map(res => {
      this.storeUserCredentials({username: data.username, token:res.token, userType:0, id:res.id});
      return {'success': true, 'username': data.username };
  }),
   catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  getEmployerForApproval()
  {
    return this._http.get("http://localhost:3000/admin/employerForApproval")
  }
  approveEmployer(id)
  {
    return this._http.put("http://localhost:3000/admin/employerForApproval/" +id ,{data:"success"})
  }

  getEmployers()
  {
    return this._http.get("http://localhost:3000/admin/getEmployersList")
  }
  getEmployerDetails(data)
  {
    return this._http.get("http://localhost:3000/admin/getEmployersList/" + data)
  }
  getEmployerPostedJobs(data)
  {
    return this._http.get("http://localhost:3000/admin/getEmployerPostedJobs/" + data)
  }
  getPostedJobDetails(data)
  {
    return this._http.get("http://localhost:3000/admin/getPostedJobDetails/" + data)

  }
  deleteJob(data)
  {
    return this._http.delete("http://localhost:3000/admin/getPostedJobDetails/" + data)
  }
  getApplicantDetails(data)
  {
    return this._http.get("http://localhost:3000/admin/getApplicantDetails/" + data);
  }
  getJobSeekerProfile(data)
  {
    return this._http.get("http://localhost:3000/admin/profileData/"+ data)
  }
  createProfilePdf(data)
  {
    return this._http.get("http://localhost:3000/admin/createProfilePdf/"+ data)
  }
  


}
