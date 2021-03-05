import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JobseekerService } from './jobseeker.service';

@Injectable({
  providedIn: 'root'
})
export class JobseekerGuard implements CanActivate {
  constructor(private _jobseeker:JobseekerService,private _router:Router){}
  canActivate(): boolean {

      if(this._jobseeker.isLoggedIn())
    {
      return true;
    }
    else
    {
      // if(! this._jobseeker.isLoggedIn())
      // {
      //   this._router.navigate(['jobseeker/login']);
      //   return false;
      // }
      if(JSON.parse(localStorage.getItem('jobPortal')))
      {

          if((JSON.parse(localStorage.getItem('jobPortal')).userType) != 1)
        {
          // alert("You have no permission to view this job Details");
          return false;
        }
        
      }
      else
      {
        this._router.navigate(['jobseeker/login']);
        return false;
      }
      
      
      
      
    }
  }
  
}
