import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralGuard implements CanActivate {
  canActivate(): boolean {
    if(! localStorage.getItem('jobPortal'))
    {
      return true;
    }
    else{
      return false;
    }
  }
  
}
