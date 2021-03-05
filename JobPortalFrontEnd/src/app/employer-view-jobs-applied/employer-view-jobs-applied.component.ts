import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../employer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employer-view-jobs-applied',
  templateUrl: './employer-view-jobs-applied.component.html',
  styleUrls: ['./employer-view-jobs-applied.component.css']
})
export class EmployerViewJobsAppliedComponent implements OnInit {
  applications;
  jobId;
  toggle=false;
  constructor(private _employer:EmployerService,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((data)=>{this.jobId=data.get('id')})
    this._employer.getAppliedJobs(this.jobId).subscribe(data=>{this.applications=data;console.log(this.applications);;this.divToggle()},(err)=>{console.log(err)})

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
