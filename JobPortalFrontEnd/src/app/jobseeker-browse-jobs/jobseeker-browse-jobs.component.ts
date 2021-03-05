import { Component, OnInit } from '@angular/core';
import { JobseekerService } from '../jobseeker.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobseeker-browse-jobs',
  templateUrl: './jobseeker-browse-jobs.component.html',
  styleUrls: ['./jobseeker-browse-jobs.component.css']
})
export class JobseekerBrowseJobsComponent implements OnInit {
jobs;
userId = JSON.parse(localStorage.getItem('jobPortal')).id;
userDetails;
city;
keyWord;
category:string;
divToggle = false;

  constructor(private _jobSeeker:JobseekerService,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe((data)=>{this.category=data.get('id');console.log(this.category)});
    
    if(this.category == 'a')
    {
      this._jobSeeker.getAllJobs().subscribe((data)=>{this.jobs=data;console.log(this.jobs);this.divCheck()},(err)=>{console.log(err)});
    }
    else{
      if(this.category == 'b' || 'c' || 'd')
      {
        if(this.category == 'b')
        {
          var data={industry:"Sale/Markting"};
          this._jobSeeker.industryFilter(data).subscribe((data)=>{this.jobs=data;console.log(this.jobs);this.divCheck()},(err)=>{console.log(err)});
        }
        else if(this.category == 'c')
        {
          var data={industry:"Education/Training"};
          this._jobSeeker.industryFilter(data).subscribe((data)=>{this.jobs=data;console.log(this.jobs);this.divCheck()},(err)=>{console.log(err)});
        }
        else if(this.category == 'd')
        {
          var data={industry:"Art/Design"};
          this._jobSeeker.industryFilter(data).subscribe((data)=>{this.jobs=data;console.log(this.jobs);this.divCheck()},(err)=>{console.log(err)});
        }
        else{
            if(this.category[0] == '{')
            {
              data=JSON.parse(this.category);
              this._jobSeeker.cityFilter(this.userId,data).subscribe((data)=>{this.jobs=data;console.log(this.jobs);this.divCheck()},(err)=>{console.log(err)});
            }
            else
            {
              var data={industry:this.category};
              console.log(data);
              this._jobSeeker.industryFilter(data).subscribe((data)=>{this.jobs=data;console.log(this.jobs);this.divCheck()},(err)=>{console.log(err)});
            }
          
        }
      }
    
      
      }
    // console.log(new Date().getDate())
   
   
    // this._jobSeeker.getUserDetails(this.userId).subscribe((data)=>{this.userDetails=data;console.log(this.userDetails)},(err)=>{console.log(err)})
  }
  // apply(jobId,userId,companyId)
  // {
  //   var fd = new FormData()
  //   // fd.append('name', this.userDetails.fname + " " + this.userDetails.lname);
  //   fd.append('jobLocation', this.userDetails.jobLocation);
  //   // fd.append('gender',this.userDetails.gender);
  //   // fd.append('profileimage',this.userDetails.profileimage)
  //   fd.append('jobId',jobId);
  //   // fd.append('userId',userId);
  //   fd.append('companyId',companyId);
  //   console.log(fd);
  //   // this._jobSeeker.applyJob(jobId,userId,companyId).subscribe((data)=>{console.log(data);alert("Applied Successfully")},(err)=>{console.log(err)})
  // }
  cityFilter()
  {
    // console.log(this.city);
    var data={city:this.city,keyWord:this.keyWord};
    this._jobSeeker.cityFilter(this.userId,data).subscribe((data)=>{this.jobs=data;console.log(this.jobs);this.divCheck()},(err)=>{console.log(err)});
  }
  divCheck()
  {
    if(this.jobs.length == 0)
    {
      this.divToggle = false;
    }
    else
    {
      this.divToggle = true;
    }
  }
  
  
}
