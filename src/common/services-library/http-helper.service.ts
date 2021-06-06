import { Injectable } from '@angular/core';
import { UrlConstants } from '../constants/url.constants';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {
    urlConstants: UrlConstants = new UrlConstants();
  constructor(private httpClient: HttpClient) { }

  post<T>(apiEndpoint: string, data: any): Observable<T> {
    const apiUrl = this.getAPIUrl(apiEndpoint);
    return this.httpClient.post<T>(apiUrl, data)
      .pipe(catchError(this.handleError));
  }

  get<T>(apiEndpoint: string, queryStringParams?: any[]): Observable<T> {
    let apiUrl = this.getAPIUrl(apiEndpoint);
    if (queryStringParams != null) {
      queryStringParams.forEach(_param => {
        apiUrl += '/' + _param;
      });
    }

    return this.httpClient.get<T>(apiUrl)
      .pipe(catchError(this.handleError));
  }

  put<T>(data: any, apiEndpoint: string): Observable<T> {
    const apiUrl = this.getAPIUrl(apiEndpoint);
    return this.httpClient.put<T>(apiUrl, data)
      .pipe(catchError(this.handleError));
  }

  delete<T>(id: any, apiEndpoint: string): Observable<T> {
    const apiUrl = this.getAPIUrl(apiEndpoint) + id;
    return this.httpClient.delete<T>(apiUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      // Client side error
      console.error('Client side error' + errorResponse.error.message);
    } else {
      // server side error
      console.error('server side error ' + errorResponse);
    }
    return throwError('Error Occured');
  }

  private getAPIUrl(apiEndpoint: string): string {
    return `${environment.platformServerUrl}${apiEndpoint}`;
  }
}
