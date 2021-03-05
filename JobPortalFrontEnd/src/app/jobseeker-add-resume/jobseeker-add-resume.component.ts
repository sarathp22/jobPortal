import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobseeker-add-resume',
  templateUrl: './jobseeker-add-resume.component.html',
  styleUrls: ['./jobseeker-add-resume.component.css']
})
export class JobseekerAddResumeComponent implements OnInit {
resume = {name:'',email:'',professionalTitle:'',location:'',webAddress:'',salary:null,age:null,degree:'',field:'',school:'',from:'',to:'',description:'',companyName:'',jobTitle:'',dateFrom:'',dateTo:'',skills:null,skillPercentage:null}
  constructor() { }

  ngOnInit(): void {
  }

}
