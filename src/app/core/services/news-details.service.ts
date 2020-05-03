import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { INewsArticle } from 'src/app/shared/interface/INewsArticle';
import { catchError } from 'rxjs/operators';
import { AppConstants } from '../constants/app-constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class NewsDetailsService {


  constructor(private httpService : HttpClient) {}

  getAllNewsDetails() : Observable<INewsArticle[]> {
    return this.httpService.get<INewsArticle[]>(AppConstants.NEWS_API_URL).pipe(catchError(this.handleError));
  }

  addNewsDetail(newsEntry : INewsArticle) : Observable<INewsArticle> {
    return this.httpService.post<INewsArticle>(AppConstants.NEWS_API_URL, newsEntry, httpOptions).pipe(catchError(this.handleError));
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
