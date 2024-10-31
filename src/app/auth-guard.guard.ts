import { CanActivate, Router } from '@angular/router';
import { AuthUserService } from './servicios/auth-user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class authGuardGuard implements CanActivate {

  constructor(private authService: AuthUserService,private router: Router){

  }

  canActivate(): boolean {
    if (this.authService.getAuthStatus()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      alert("Inicie sesión para acceder");
      return false;
    }
  }

};
