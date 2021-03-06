import { Injectable } from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private router: Router,
              private loginService: LoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(route);
    console.log(state);
    if (!this.loginService.loggedIn) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
