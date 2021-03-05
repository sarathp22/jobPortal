import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-company-approval',
  templateUrl: './admin-company-approval.component.html',
  styleUrls: ['./admin-company-approval.component.css']
})
export class AdminCompanyApprovalComponent implements OnInit {
  employers;
  toggle=true;
  constructor(private _admin:AdminService) { }

  ngOnInit(): void {
  
    this._admin.getEmployerForApproval().subscribe(data=>{this.employers=data;this.divToggle()},err=>{console.log(err)})

  }

  approve(id)
  {
    console.log(id);
    this._admin.approveEmployer(id).subscribe(data=>{this.employers=data;alert("Approved Successfully")},err=>{console.log(err)})
    // this._admin.getEmployerForApproval().subscribe(data=>{this.employers=data},err=>{console.log(err)})
    window.location.reload();
  }
  logout()
  {
    this._admin.logOut();
  }
  divToggle()
  {
    if(this.employers.length != 0)
    {
      this.toggle = true;
    }
    else
    {
      this.toggle = false;
    }
  }
}
