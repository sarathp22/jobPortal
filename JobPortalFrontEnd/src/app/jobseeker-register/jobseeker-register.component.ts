import { Component, OnInit } from '@angular/core';
import { JobseekerService } from '../jobseeker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobseeker-register',
  templateUrl: './jobseeker-register.component.html',
  styleUrls: ['./jobseeker-register.component.css']
})
export class JobseekerRegisterComponent implements OnInit {
  jobSeeker = {fname:'',lname:'',username:'',password:'',phone:''};
  errMsg
  constructor( private _jobSeeker:JobseekerService,private _router:Router ) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.jobSeeker);
    this._jobSeeker.register(this.jobSeeker).subscribe(data=>{console.log(JSON.parse(JSON.stringify(data)) );this._router.navigate(['/jobseeker/login'])},err=>{this.errMsg=err.error.err.message; console.log(this.errMsg)})

  }
}
