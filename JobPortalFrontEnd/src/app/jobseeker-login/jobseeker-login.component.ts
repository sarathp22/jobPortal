import { Component, OnInit } from '@angular/core';
import { JobseekerService } from '../jobseeker.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-jobseeker-login',
  templateUrl: './jobseeker-login.component.html',
  styleUrls: ['./jobseeker-login.component.css']
})
export class JobseekerLoginComponent implements OnInit {

  constructor(private _jobseeker:JobseekerService, private _route:Router,private _auth:AuthService) { }
  jobSeekerLogin= {username:'',password:''};
  errorData;
  userId;
  user;
  errMsg;
  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.jobSeekerLogin);
    this._jobseeker.login(this.jobSeekerLogin).subscribe((data)=>{console.log(data);this._route.navigate(['profile/complete1'])},(err)=>{this.errMsg=err});
    // this._auth.jobseekerLogin(this.jobSeekerLogin).subscribe((data)=>{console.log(data);this._route.navigate(['profile/complete1'])},(err)=>{console.log(err)});
    
  }

}
