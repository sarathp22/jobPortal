import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../employer.service'

@Component({
  selector: 'app-employer-manage-application',
  templateUrl: './employer-manage-application.component.html',
  styleUrls: ['./employer-manage-application.component.css']
})
export class EmployerManageApplicationComponent implements OnInit {
  jobs;
  companyId;
  toggle=true;
  constructor(private _employer:EmployerService) { }

  ngOnInit(): void {
    this.companyId = JSON.parse(localStorage.getItem('jobPortal')).id;
    this._employer.getPostedJobs(this.companyId).subscribe((data)=>{this.jobs=data;console.log(this.jobs);this.divToggle()},(err)=>{console.log(err)})
  }
  logout()
  {
    this._employer.logOut();
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
