import { CanActivate,  ActivatedRouteSnapshot,  RouterStateSnapshot, Router, CanActivateChild, ActivatedRoute, Routes } from '@angular/router';
import { Observable } from "rxjs/Rx";

import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    currentUser;

    constructor(private atvRoute: ActivatedRoute,  private router: Router){

    }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var roles = route.data["roles"] as Array<string>;

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUser)
    if(this.currentUser===null)
    {
        this.router.navigate(['login']);
    }
    else
    {
        
        if(roles===undefined){
            return true;
        }
        if(this.currentUser.user.role===roles[0]){
            return true;
        } else {
            return false;
        }
    }

    return true;
  }

  canActivateChild() {
    console.log('checking child route access');
    return true;
  }

}
