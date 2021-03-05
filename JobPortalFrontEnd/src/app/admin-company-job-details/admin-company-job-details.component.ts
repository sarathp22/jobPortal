import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router  } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-company-job-details',
  templateUrl: './admin-company-job-details.component.html',
  styleUrls: ['./admin-company-job-details.component.css']
})
export class AdminCompanyJobDetailsComponent implements OnInit {
  jobId;
  job;
  skillsNeeded;
  constructor(private _activeRoute:ActivatedRoute,private _admin:AdminService,private _route:Router) { }

  ngOnInit(): void {
    this._activeRoute.paramMap.subscribe((data)=>{this.jobId=data.get('id');console.log(this.jobId)})
    this._admin.getPostedJobDetails(this.jobId).subscribe((data)=>{this.job=data;console.log(this.jobId);;this.skillsNeeded=this.job.reqSkills.split(",");},err=>{console.log(err)})
  }

  delete()
  {
    this._admin.deleteJob(this.jobId).subscribe((data)=>{this.redirect()},err=>{console.log(err)})

  }
  redirect()
  {
    this._route.navigate(['/admin/companyPostedJobs/'+this.job.companyId]);
  }
  logout()
  {
    this._admin.logOut();
  }
    

}
