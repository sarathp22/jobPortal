import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private _admin:AdminService,private _router:Router){}
  canActivate():boolean{
    if(this._admin.isLoggedIn())
    {
      return true;
    }
    else{
      this._router.navigate(['jobseeker/login']);
      return false;
    }
  }
  
}
