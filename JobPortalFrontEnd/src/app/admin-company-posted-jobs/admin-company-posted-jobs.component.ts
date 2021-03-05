import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-company-posted-jobs',
  templateUrl: './admin-company-posted-jobs.component.html',
  styleUrls: ['./admin-company-posted-jobs.component.css']
})
export class AdminCompanyPostedJobsComponent implements OnInit {
  employerId;
  jobs;
  toggle=true;
  constructor(private _activeRoute:ActivatedRoute,private _admin:AdminService) { }

  ngOnInit(): void {
    this._activeRoute.paramMap.subscribe((data)=>{this.employerId=data.get('id');console.log(this.employerId)})
    this._admin.getEmployerPostedJobs(this.employerId).subscribe((data)=>{this.jobs=data;console.log(this.jobs);this.divToggle()},err=>{console.log(err)})

  }
  logout()
  {
    this._admin.logOut();
  }
  divToggle()
  {
    if(this.jobs.length != 0)
    {
      this.toggle = true;
    }
    else
    {
      this.toggle = false;
    }
  }

}
