import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';

import { LoggerService } from 'src/app/core/services/logger.service';
import { TokenManageService } from 'src/app/core/services/token-manage.service';
import { IAdmin } from 'src/app/shared/interface/IAdmin';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginDBService } from 'src/app/core/services/login-db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  admin : IAdmin;
  isSubmitted  =  false;
  currentUser : IAdmin;

  constructor(private formBuilder: FormBuilder, private loggingService : LoggerService, 
    private tokenManagerService: TokenManageService, private authService : AuthenticationService,
    private router : Router, private notificationService : ToastrService, private loginDBService: LoginDBService) { }

  ngOnInit(): void {
    if (this.loggingService.isDebugEnable()) {
        this.loggingService.logDebug("Login Component is loading!");
    }

    // clear the token when login component is loaded
    this.tokenManagerService.removeToken();

    this.loginForm  =  this.formBuilder.group({
      userName: ['', [Validators.required,  Validators.minLength(5)]],
      password: ['', [Validators.required,  Validators.minLength(5)]]
    });

  }

  login(admin : IAdmin) : void {
    this.isSubmitted  =  true;
    if (this.loggingService.isDebugEnable()) {
        this.loggingService.logDebug(`User Name : ${admin.userName} Password: ${admin.password}`);
    }
    
    this.loginDBService.getAdminDetail(admin.userName, admin.password).subscribe(adminUser => {
      if (adminUser.length > 0) {
          this.currentUser = adminUser[0];
          console.log(this.currentUser.userName);
          this.authService.login(`${this.currentUser.userName}:${this.currentUser.password}`, this.currentUser.userName);
          this.router.navigate(['newsentry']);
          this.notificationService.success(`Welcome ${this.currentUser.userName}!`);
      } else {
        this.resetFormAnddisableValidation();
        this.notificationService.warning('Invalid User Name and Password!. Please try again');    
      }
    });
  }

  reset() : void {
    this.resetFormAnddisableValidation();
    this.notificationService.info('User Name And Password Values Rested');
  }

  resetFormAnddisableValidation() {
    this.loginForm.reset();
    this.isSubmitted  =  false;
  }
}
