import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service'

@Component({
  selector: 'app-admin-company-list',
  templateUrl: './admin-company-list.component.html',
  styleUrls: ['./admin-company-list.component.css']
})
export class AdminCompanyListComponent implements OnInit {
  employers;
  toggle=true;
  constructor(private _admin:AdminService) { }

  ngOnInit(): void {

    this._admin.getEmployers().subscribe((data)=>{console.log(data);this.employers=data;this.divToggle()},err=>{console.log(err)})
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
