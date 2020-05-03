import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class TokenManageService {

  constructor(private loggingService : LoggerService) { }

  storeToken(token : string) : void {
    if (this.loggingService.isInfoEnable()) {
        this.loggingService.logInfo(`Storing the token of logged in user as username:password : ${token}`)
    }

    // convert the username:password in base 64 encoding and then store in local storage
    localStorage.setItem('ACCESS_TOKEN' , btoa(token));
  }

  fetchToken() : string {
    let token = localStorage.getItem('ACCESS_TOKEN');

    if (this.loggingService.isDebugEnable()) {
        this.loggingService.logDebug(`Admin Token : ${token}`);
    }

    if (token) {
        token = atob(localStorage.getItem('ACCESS_TOKEN'));
    } else {
        this.loggingService.logWarning("Token should not be empty");
    }

    return token;
  }

  removeToken() : void {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
