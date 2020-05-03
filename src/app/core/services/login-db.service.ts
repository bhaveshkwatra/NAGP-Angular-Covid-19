import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { IAdmin } from '../../shared/interface/IAdmin';
import { Observable, throwError } from 'rxjs';
import { catchError  } from 'rxjs/operators';
import {AppConstants} from '../constants/app-constants'

@Injectable({
  providedIn: 'root'
})
export class LoginDBService {

  private inMemoryAPIURL = "api/adminLoginDetails";

  constructor(private httpService : HttpClient) { }

  getAdminDetail(userName : string, password : string) : Observable<IAdmin[]> {
    let httpParam : HttpParams;

    if (userName && password) {
        httpParam = new HttpParams().set('userName', userName).append('password', password);
    }

    return this.httpService.get<IAdmin[]>(AppConstants.LOGIN_API_URL, {params : httpParam}).pipe(catchError(this.handleError));
  } 

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
