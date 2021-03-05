import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../employer.service';

@Component({
  selector: 'app-employer-profile',
  templateUrl: './employer-profile.component.html',
  styleUrls: ['./employer-profile.component.css']
})
export class EmployerProfileComponent implements OnInit {
  userData;
  userId;
  logo;
  constructor( private _employer:EmployerService) { }

  ngOnInit(): void {

    this.userId=JSON.parse(localStorage.getItem('jobPortal')).id;
    this._employer.getUserData(this.userId).subscribe(data=>{this.userData=data;console.log(this.userData)},err=>{console.log(err)});
  }
  logoChange(event)
  {
    this.logo = <File> event.target.files[0];
    const fd = new FormData();
    fd.append('logo',this.logo,this.logo.name);
    console.log(fd);
    this._employer.uploadlogo(this.userId,fd).subscribe(data=>{},err=>{console.log(err)})
    
  }

  update()
  {
    console.log("entered");
    this._employer.updateEmployerData(this.userId,this.userData).subscribe(data=>{console.log(data);alert("Updated Successfully")},err=>{console.log(err)})
    window.location.reload();
  }
  logout()
  {
    this._employer.logOut()
  }


}
