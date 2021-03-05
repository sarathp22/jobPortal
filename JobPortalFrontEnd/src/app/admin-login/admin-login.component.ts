import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminLogin= {username:'',password:''};
  email1;
  password1;
  constructor(private _admin:AdminService,private _route:Router) { }

  ngOnInit(): void {
  }


  onSubmit()
  {
    // console.log(this.adminLogin);
    this.adminLogin.username=this.email1;
    this.adminLogin.password=this.password1;
    console.log(this.adminLogin);
    this._admin.login(this.adminLogin).subscribe(data=>{this._route.navigate(['/admin/companyApproval'])},err=>{console.log(err)})
    // this._route.navigate(['/employer/profile'])
  }

}
