import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private route: Router){}

  canActivate():boolean{
    if(localStorage.getItem('Token')){
      return true;
    }
    else{
      this.route.navigateByUrl('');
      return false;
    }
  }
}
