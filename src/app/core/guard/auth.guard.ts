import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';
import { TokenManageService } from '../services/token-manage.service';
import { LoggerService } from '../services/logger.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private toastrService: ToastrService, private authService : AuthenticationService, private storageManager : TokenManageService, private loggingService : LoggerService) { }
  canActivate() : boolean {
    let token = this.storageManager.fetchToken();
    if (token) {
        this.authService.setCurrentUser(token.split(":",2)[0]);
        this.loggingService.logInfo('Auth Gaurd Validated news entry component');
        return true;
    } else {
      this.loggingService.logInfo('Auth Gaurd is not validated news entry component');
      this.router.navigate(['/login']);
      this.toastrService.warning('Please Login again');
      return false;
    }
    
  }
  
}
