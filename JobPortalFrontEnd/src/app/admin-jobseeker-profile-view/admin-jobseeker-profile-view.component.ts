import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-admin-jobseeker-profile-view',
  templateUrl: './admin-jobseeker-profile-view.component.html',
  styleUrls: ['./admin-jobseeker-profile-view.component.css']
})
export class AdminJobseekerProfileViewComponent implements OnInit {
  jobId;
  jobseekerId;
  userData;
  constructor(private _activeRoute:ActivatedRoute,private _admin:AdminService) { }

  ngOnInit(): void {
    this._activeRoute.paramMap.subscribe((data)=>{this.jobId=data.get('id');console.log(this.jobId)});
    this._activeRoute.paramMap.subscribe((data)=>{this.jobseekerId=data.get('jobseekerId');console.log(this.jobseekerId)});
    this._admin.getJobSeekerProfile(this.jobseekerId).subscribe((data)=>{this.userData=data;console.log(data)},(err)=>{console.log(err)})
    this._admin.createProfilePdf(this.jobseekerId).subscribe((data)=>{console.log(data)},err=>{console.log(err)});

  }

  downloadProfile(data)
  {
    console.log(data);
  }
  logout()
  {
    this._admin.logOut();
  }

}
