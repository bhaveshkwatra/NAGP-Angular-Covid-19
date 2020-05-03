import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenManageService } from '../services/token-manage.service';
import { LoggerService } from '../services/logger.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginStatus : string;
  currentUserName : string;

  constructor(private route : Router, private tokenService : TokenManageService,
    private loggingService: LoggerService, private authService: AuthenticationService) { }

  ngOnInit(): void {
    if (this.loggingService.isDebugEnable()) {
        this.loggingService.logDebug('Header Component is Loading!');
    }

    this.authService.currentUser.subscribe(userStatus => {
      console.log(userStatus);
      this.currentUserName = userStatus;
      this.changeStatus();
    });
  }

  login() {
    if (this.currentUserName) {
        this.authService.logout();
        this.route.navigate(['/dashboard']);
    } else {
      this.tokenService.removeToken();
      this.route.navigate(['/login']);
      if (this.loggingService.isDebugEnable()) {
        this.loggingService.logInfo("Header Component requested Login Component to load!");
      }
    }
  }

  home() {
    this.route.navigate(['/dashboard']);
  }

  changeStatus() : void {
    if (this.currentUserName.length > 0) {
        this.loginStatus = `Logout ${this.currentUserName}`;
    } else {
      this.loginStatus = 'Login';
    }
  }
}
