import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { parse } from 'path';
import { JobseekerService }  from '../jobseeker.service'

@Component({
  selector: 'app-jobseeker-job-details',
  templateUrl: './jobseeker-job-details.component.html',
  styleUrls: ['./jobseeker-job-details.component.css']
})
export class JobseekerJobDetailsComponent implements OnInit {
  urlId;
  job;
  skillsNeeded;
  userId;
  userDetails;
  userData;
  qualifications=[];
  flag=false;
  jobs;
  industry;
  // fd=new FormData();
  datas={name:"",jobLocation:"",gender:"",profileImage:"",jobId:"",companyId:"",jobseekerId:"",dob:"",email:"",phone:""}
  constructor(private _activated:ActivatedRoute,private _jobSeeker:JobseekerService) { }

  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('jobPortal')).id;
    // this._jobSeeker.getUserDetails(this.userId).subscribe((data)=>{this.userDetails=data;console.log(this.userDetails)},(err)=>{console.log(err)})
    this._activated.paramMap.subscribe((data)=>{this.urlId = data.get('id');console.log(this.urlId)})
    this._jobSeeker.getSpecifJobs(this.urlId).subscribe((data)=>{this.job=data;console.log(this.job);this.skillsNeeded=this.job.reqSkills.split(",");console.log(this.skillsNeeded);this.date();this.industry=this.job.industry},(err)=>{console.log(err)})
    console.log(this.userId);
    this._jobSeeker.getUserData(this.userId).subscribe((data)=>{this.userData=data;console.log(this.userData);this.processData()},(err)=>{console.log(err)});
    setTimeout(()=>{
      this.similarJobs(this.job.industry);
    },10000)
    
  }


  date()
  {
    var month;
    if(new Date().getMonth()== 0)
    {
      month = "01"
    }
    else if(new Date().getMonth()== 1)
    {
      month = "02"
    }
    else if(new Date().getMonth()== 2)
    {
      month = "03"
    }
    else if(new Date().getMonth()== 3)
    {
      month = "04"
    }
    else if(new Date().getMonth()== 4)
    {
      month = "05"
    }
    else if(new Date().getMonth()== 5)
    {
      month = "06"
    }
    else if(new Date().getMonth()== 6)
    {
      month = "07"
    }
    else if(new Date().getMonth()== 7)
    {
      month = "08"
    }
    else if(new Date().getMonth()== 8)
    {
      month = "09"
    }
    else if(new Date().getMonth()== 9)
    {
      month = "10"
    }
    else if(new Date().getMonth()== 10)
    {
      month = "11"
    }
    else if(new Date().getMonth()== 11)
    {
      month = "12"
    }
    var date = parseInt(this.job.deadlineDate.replace("-","").replace("-",""));
    var today = parseInt(new Date().getFullYear().toString() + month + new Date().getDate().toString());
    console.log(date);
    console.log(today);
    console.log(new Date())
  }
  apply(jobId,companyId)
  {

    var month;
    if(new Date().getMonth()== 0)
    {
      month = "01"
    }
    else if(new Date().getMonth()== 1)
    {
      month = "02"
    }
    else if(new Date().getMonth()== 2)
    {
      month = "03"
    }
    else if(new Date().getMonth()== 3)
    {
      month = "04"
    }
    else if(new Date().getMonth()== 4)
    {
      month = "05"
    }
    else if(new Date().getMonth()== 5)
    {
      month = "06"
    }
    else if(new Date().getMonth()== 6)
    {
      month = "07"
    }
    else if(new Date().getMonth()== 7)
    {
      month = "08"
    }
    else if(new Date().getMonth()== 8)
    {
      month = "09"
    }
    else if(new Date().getMonth()== 9)
    {
      month = "10"
    }
    else if(new Date().getMonth()== 10)
    {
      month = "11"
    }
    else if(new Date().getMonth()== 11)
    {
      month = "12"
    }

    var date;
    
    if(new Date().getMonth()== 1)
    {
      date = "01"
    }
    else if(new Date().getMonth()== 2)
    {
      date = "02"
    }
    else if(new Date().getMonth()== 3)
    {
      date = "03"
    }
    else if(new Date().getMonth()== 4)
    {
      date = "04"
    }
    else if(new Date().getMonth()== 5)
    {
      date = "05"
    }
    else if(new Date().getMonth()== 6)
    {
      date = "06"
    }
    else if(new Date().getMonth()== 7)
    {
      date = "07"
    }
    else if(new Date().getMonth()== 8)
    {
      date = "08"
    }
    else if(new Date().getMonth()== 9)
    {
      date = "09"
    }
    else 
    {
      date = new Date().getDate().toString()
    }
    
    

    var date1 = parseInt(this.job.deadlineDate.replace("-","").replace("-",""));
    var today = parseInt(new Date().getFullYear().toString() + month + date);
    
    if((date1-today) < 0)
    {
      alert("Deadline Date Over");
      return;

    }

    else
    {
          // this.datas.name='';
        // this.datas.jobLocation='';
        // this.datas.gender='';
        // this.datas.profileImage='';
        this.datas.jobId=jobId;
        this.datas.companyId=companyId;
        // this.datas.jobseekerId='';

        if(this.flag == true)
        {
          this._jobSeeker.applyJob(this.datas).subscribe((data)=>{console.log(data);alert("Applied Successfully")},(err)=>{console.log(err)})
        }
        else{
          alert("Your Qualification does not match this Job!")
        }

    }

   
    
  }

  processData()
  {
    var qualificationData = this.userData.qualification;
    for(var i=0;i<qualificationData.length;i++)
    {
      this.qualifications.push(qualificationData[i].qualification)
    }
    console.log(this.qualifications);
    this.job.qualification
    for(var i=0;i<this.qualifications.length;i++)
    {
      if(this.job.qualification == this.qualifications[i])
      {
        this.flag = true;
        return;
      }
    }

  }
  similarJobs(data)
  {
    console.log(data);
    this._jobSeeker.industryFilter(data).subscribe((data)=>{this.jobs=data;console.log(this.jobs)},(err)=>{console.log(err)});
  }
}
