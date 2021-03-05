import { Component, OnInit } from '@angular/core';
import { EmployerService  } from '../employer.service';
import { JobseekerService } from '../jobseeker.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _employer:EmployerService,public _jobseeker:JobseekerService,private _router:Router) { }
  public employer;
  public jobseeker;
  ngOnInit(): void {
    this.employer=this.checkEmployer();
    // this._employer.isLoggedIn();
    this.jobseeker=this.checkJobseeker();
    // this._jobseeker.isLoggedIn();
    console.log(this.employer,this.jobseeker)

  }

  checkEmployer():boolean
  {
    if(localStorage.getItem('jobPortal'))
    {
      if(JSON.parse(localStorage.getItem('jobPortal')).userType == 2)
      {
        return true;
      }
      else
      {
        return false;
      }
      
    }
    else
    {
      return false;
    }
  }

  checkJobseeker():boolean
  {
    if(localStorage.getItem('jobPortal'))
    {
      if(JSON.parse(localStorage.getItem('jobPortal')).userType == 1)
      {
        return true;
      }
      else
      {
        return false;
      }
      
    }
    else
    {
      return false;
    }
  }

  checkAdmin():boolean
  {
    if(localStorage.getItem('jobPortal'))
    {
      if(JSON.parse(localStorage.getItem('jobPortal')).userType == 0)
      {
        return true;
      }
      else
      {
        return false;
      }
      
    }
    else
    {
      return false;
    }
  }

  logout()
  {
    
      localStorage.removeItem('jobPortal');
      this._router.navigate(['']);
    
  }
  login():boolean
  {
    if(localStorage.getItem('jobPortal'))
    {
      return true;
    }
    else{
      return false;
    }
  }

  jobseekerTittle()
  {
    if(this.checkJobseeker())
    {
      return "JOBS";
    }
    else
    {
      return "Jobseeker";
    }
  }


}
