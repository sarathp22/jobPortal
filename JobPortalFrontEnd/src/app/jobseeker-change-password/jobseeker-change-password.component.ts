import { Component, OnInit } from '@angular/core';
import { JobseekerService } from '../jobseeker.service';

@Component({
  selector: 'app-jobseeker-change-password',
  templateUrl: './jobseeker-change-password.component.html',
  styleUrls: ['./jobseeker-change-password.component.css']
})
export class JobseekerChangePasswordComponent implements OnInit {
  jobseekerId;
  password={oldpassword:'',newpassword:'',jobseekerId:''};
  constructor(private _jobseeker:JobseekerService) { }

  ngOnInit(): void {
    this.jobseekerId = JSON.parse(localStorage.getItem('jobPortal')).id;
  }

  changePass()
  {
    console.log(this.jobseekerId);
    this.password.jobseekerId = this.jobseekerId;
    console.log(this.password);
    this._jobseeker.changePassword(this.password).subscribe((data)=>{console.log(data)},err=>{console.log(err)})
  }
  logout()
  {
    this._jobseeker.logOut();
  }

}
