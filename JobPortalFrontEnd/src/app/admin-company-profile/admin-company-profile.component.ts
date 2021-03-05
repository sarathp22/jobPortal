import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-company-profile',
  templateUrl: './admin-company-profile.component.html',
  styleUrls: ['./admin-company-profile.component.css']
})
export class AdminCompanyProfileComponent implements OnInit {
  employerId;
  employer;
  constructor(private _activeRoute:ActivatedRoute,private _admin:AdminService,private _route:Router) { }

  ngOnInit(): void {
    this._activeRoute.paramMap.subscribe((data)=>{this.employerId=data.get('id');console.log(this.employerId)})
    this._admin.getEmployerDetails(this.employerId).subscribe((data)=>{this.employer=data;console.log(this.employer)},err=>{console.log(err)})
  }
  postedJobs(employerId)
  {
    console.log(employerId);
    this._route.navigate(['admin/companyPostedJobs/'+employerId])

  }
  logout()
  {
    this._admin.logOut();
  }

}
