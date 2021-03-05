import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../employer.service';
@Component({
  selector: 'app-employer-change-password',
  templateUrl: './employer-change-password.component.html',
  styleUrls: ['./employer-change-password.component.css']
})
export class EmployerChangePasswordComponent implements OnInit {
  employerId;
  password={oldpassword:'',newpassword:'',employerId:''};
  constructor(private _employer:EmployerService) { }

  ngOnInit(): void {
    this.employerId = JSON.parse(localStorage.getItem('jobPortal')).id;
  }

  changePass()
  {
    this.password.employerId = this.employerId;
    // console.log(this.password)
    this._employer.changePassword(this.password).subscribe((data)=>{console.log(data)},err=>{console.log(err)})
  }
  logout()
  {
    this._employer.logOut();
  }

}
