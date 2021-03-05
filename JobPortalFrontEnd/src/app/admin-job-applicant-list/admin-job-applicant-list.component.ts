import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-job-applicant-list',
  templateUrl: './admin-job-applicant-list.component.html',
  styleUrls: ['./admin-job-applicant-list.component.css']
})
export class AdminJobApplicantListComponent implements OnInit {
  jobId;
  applications;
  toggle = true;
  constructor(private _activeRoute:ActivatedRoute,private _admin:AdminService) { }

  ngOnInit(): void {
    this._activeRoute.paramMap.subscribe((data)=>{this.jobId=data.get('id');console.log(this.jobId)});
    this._admin.getApplicantDetails(this.jobId).subscribe((data)=>{this.applications=data;this.divToggle()},err=>{console.log(err)})
  }
  logout()
  {
    this._admin.logOut();
  }
  divToggle()
  {
    if(this.applications.length != 0)
    {
      this.toggle = true;
    }
    else
    {
      this.toggle = false;
    }
  }

}
