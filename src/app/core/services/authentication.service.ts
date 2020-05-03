import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenManageService } from './token-manage.service';
import { LoginDBService } from './login-db.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<string>;
  public currentUser: Observable<string>;
  public currentUserName : string;


constructor(private tokenManagerService : TokenManageService, private loginDBService : LoginDBService) {
  this.currentUserSubject = new BehaviorSubject<string>("");
  this.currentUser = this.currentUserSubject.asObservable();
 }

 login(token : string, userName : string) {
  this.tokenManagerService.storeToken(token);
  this.setCurrentUser(userName);
 }

 logout() {
   // remove the token from local storage when the admin log out
   this.tokenManagerService.removeToken();
   this.setCurrentUser("");
 }

 setCurrentUser(currentUserName: string) : void {
  this.currentUserSubject.next(currentUserName);
 }

}
