import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../employer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-new-job',
  templateUrl: './post-new-job.component.html',
  styleUrls: ['./post-new-job.component.css']
})
export class PostNewJobComponent implements OnInit {
  workImage;
  fd;
  companyId;
  jobPost ={companyId:'',jobCode:'',description:'',jobTitle:'',email:'',jobType:'',nop:null,salary:null,experience:null,qualification:'',industry:'',genderRequired:'',country:'',city:'',deadlineDate:'',reqSkills:'',eduExp:''}
  constructor(private _employer: EmployerService,private _route:Router) { }

  ngOnInit(): void {

    this.companyId = JSON.parse(localStorage.getItem('jobPortal')).id;
  }

  workLogo(event)
  {
    console.log(event.target.files[0]);
    this.workImage = <File> event.target.files[0];
    this.fd = new FormData();
    this.fd.append('workLogo',this.workImage,this.workImage.name);
    
    
    // console.log(fd);
  }
  postJob()
  {

    this.fd.append('companyId',this.companyId);
    this.fd.append('jobCode',this.jobPost.jobCode);
    this.fd.append('description',this.jobPost.description);
    this.fd.append('jobTitle',this.jobPost.jobTitle);
    this.fd.append('jobType',this.jobPost.jobType);
    this.fd.append('email',this.jobPost.email);
    this.fd.append('nop',this.jobPost.nop);
    this.fd.append('salary',this.jobPost.salary);
    this.fd.append('experience',this.jobPost.experience);
    this.fd.append('qualification',this.jobPost.qualification);
    this.fd.append('industry',this.jobPost.industry);
    this.fd.append('genderRequired',this.jobPost.genderRequired);
    this.fd.append('country',this.jobPost.country);
    this.fd.append('city',this.jobPost.city);
    this.fd.append('deadlineDate',this.jobPost.deadlineDate);
    this.fd.append('reqSkills',this.jobPost.reqSkills);
    this.fd.append('eduExp',this.jobPost.eduExp);


    this._employer.postNewJob(this.fd).subscribe((data)=>{console.log(data);alert("Job Posted successfully");this._route.navigate(['/employer/manageApplications'])},(err)=>{console.log(err)})
  }

}
