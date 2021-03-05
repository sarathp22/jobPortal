import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobseekerService } from '../jobseeker.service';
import { GeneralService } from '../general.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
jobTitle;
city;
jobs;
  constructor(private _router:Router,private _jobSeeker:JobseekerService,private _general:GeneralService) { }

  ngOnInit(): void {

    this._general.getJobsLimited().subscribe((data)=>{this.jobs=data;console.log(data)},(err)=>{console.log(err)})

  }

  navigation()
  {
   var data={city:this.city,keyWord:this.jobTitle}
   var dataTemp=JSON.stringify(data);
    this._router.navigate(['/general/browseJobs/'+dataTemp]);
  }

  jobseekerLoggedin():boolean
  {
    if(this._jobSeeker.isLoggedIn())
    {
      return true;
    }
    else{
      return false;
    }
    
  }

}
