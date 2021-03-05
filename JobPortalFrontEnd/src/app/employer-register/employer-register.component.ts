import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../employer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employer-register',
  templateUrl: './employer-register.component.html',
  styleUrls: ['./employer-register.component.css']
})
export class EmployerRegisterComponent implements OnInit {
  employerRegister= {cname:'',username:'',password:'',phone:''};
  companyName;
  email;
  userName;
  phoneNo;
  passwordTemp;
  errorData;
  errMsg;
  constructor(  private _employer:EmployerService, private _router:Router ) { }
  ngOnInit(): void {
  }

  onSubmit()
  {
    this.employerRegister.cname=this.companyName;
    this.employerRegister.username=this.userName;
    this.employerRegister.password=this.passwordTemp;
    this.employerRegister.phone=this.phoneNo;

    console.log(this.employerRegister);
    this._employer.register(this.employerRegister).subscribe(data=>{this._router.navigate(['employer/login'])},(err)=>{this.errMsg=err.error.err.message;console.log(err)})
   
  }

}
