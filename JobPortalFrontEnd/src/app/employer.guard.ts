import { Injectable } from '@angular/core';
import { CanActivate,Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployerService  } from './employer.service';
@Injectable({
  providedIn: 'root'
})
export class EmployerGuard implements CanActivate {
  constructor(private _employer:EmployerService, private _router:Router){}
  canActivate():boolean
  {
    if(this._employer.isLoggedIn())
    {
      return true;
    }
    else{
      this._router.navigate(['employer/login']);
      return false;
    }
  }
  
}
