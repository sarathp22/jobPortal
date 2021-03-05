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
export class JobseekerService {
  tokenKey = 'jobPortal';
  isAuthenticated: Boolean = false;
  username: Subject<string> = new Subject<string>();
  authToken: string = undefined;
  userData;
  constructor( private _http:HttpClient,private processHTTPMsgService:ProcessHttpmsgService,private _route:Router ) { }

  checkJWTtoken() {
    this._http.get<JWTResponse>("http://localhost:3000/jobSeeker/checkJWTtoken")
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
    this._route.navigate(['']);
  }

  isLoggedIn(): Boolean {
    // return this.isAuthenticated;
    if(localStorage.getItem('jobPortal'))
    {
      if(JSON.parse(localStorage.getItem('jobPortal')).userType == 1)
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
  register(data)
  {
    return this._http.post("http://localhost:3000/jobSeeker/signup",data)
  }
  login(data:any)
  {
    return this._http.post<AuthResponse>("http://localhost:3000/jobSeeker/login",data)
    // .subscribe(data=>{this.userData=data;this.datas(this.userData);this._route.navigate(['profile/complete1'])},err=>console.log(err))
    .pipe( map(res => {
      this.storeUserCredentials({username: data.username, token:res.token, userType:1, id:res.id});
      return {'success': true, 'username': data.username };
  }),
   catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  datas(data)
  {
    var token=data.token;
    var userType=data.userType;
    var useName=data.useName;
    this.storeUserCredentials({username: data.username, token:data.token, userType:data.userType, id:data.id})
  }

  getUserData(data)
  {
    return this._http.get("http://localhost:3000/jobSeeker/user/" + data)
  }
  updateUserData(userId,data)
  {
    
    return this._http.put("http://localhost:3000/jobSeeker/user/" + userId, data)
  }
  updateUserData2(userId,data)
  {
    
    return this._http.put("http://localhost:3000/jobSeeker/userLastPage/" + userId, data)
  }
  uploadprofileImage(userId,fd)
  {
    return this._http.put("http://localhost:3000/fileupload/upload/uploadImage/" + userId, fd)
  }
  uploadResume(userId,fd)
  {
    return this._http.put("http://localhost:3000/fileupload/upload/resume/" + userId, fd)

  }
  getAllJobs()
  {
    return this._http.get("http://localhost:3000/jobSeeker/jobs")
  }
  getSpecifJobs(data)
  {
    return this._http.get("http://localhost:3000/jobSeeker/jobs/specificJob/" + data)
  }
  applyJob(fd)
  {
    return this._http.post("http://localhost:3000/jobApply/job",fd)
  }
  getUserDetails(userId)
  {
    return this._http.get("http://localhost:3000/jobSeeker/userDetail/specificData/" + userId)
  }
  profileUpdate(userId,data)
  {
    return this._http.put("http://localhost:3000/jobSeeker/profileUpdate/"+ userId,data)
  }
  changePassword(data)
  {
    return this._http.post("http://localhost:3000/jobSeeker/changePassword", data)
  }
  cityFilter(userId,data)
  {
    return this._http.put("http://localhost:3000/jobSeeker/cityFilterData/" + userId,data)
  }
  industryFilter(data)
  {
    return this._http.put("http://localhost:3000/jobSeeker/indusrtyFilterData/"+"user",data);
  }
}
