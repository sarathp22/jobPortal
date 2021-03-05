import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../employer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-login',
  templateUrl: './employer-login.component.html',
  styleUrls: ['./employer-login.component.css']
})
export class EmployerLoginComponent implements OnInit {
  employerLogin= {username:'',password:''};
  errorData;
  userId;
  user;
  email1;
  password1;
  errMsg;
  constructor(private _employer: EmployerService,private _route :Router  ) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    // console.log(this.email1,this.password1)
    this.employerLogin.username=this.email1;
    this.employerLogin.password=this.password1;
    console.log(this.employerLogin);
    this._employer.login(this.employerLogin).subscribe(data=>{this._route.navigate(['/employer/profile'])},err=>{this.errMsg=err;console.log(err)})

  }
  // localStorageSave()
  // {
  //   this.userId=this.user.userId ;
  //   localStorage.setItem('jobPortal',this.userId)
  // }

}
