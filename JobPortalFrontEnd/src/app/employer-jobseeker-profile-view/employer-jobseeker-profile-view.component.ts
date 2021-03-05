import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployerService } from '../employer.service' 


@Component({
  selector: 'app-employer-jobseeker-profile-view',
  templateUrl: './employer-jobseeker-profile-view.component.html',
  styleUrls: ['./employer-jobseeker-profile-view.component.css']
})
export class EmployerJobseekerProfileViewComponent implements OnInit {
  userId;
  id;
  userData;
  constructor(private _activatedRoute:ActivatedRoute,private _employer:EmployerService) { }

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe((data)=>{this.userId=data.get('userId');this.id=data.get('jobId');console.log(this.userId,this.id)})
    this._employer.getJobSeekerProfile(this.userId).subscribe((data)=>{this.userData=data;console.log(data)},(err)=>{console.log(err)})
  }
  shortList(data)
  {
    console.log(data);
    this._employer.shortList(data).subscribe((data)=>{console.log(data);alert("Shortlised")},(err)=>{console.log(err)})

  }

}
