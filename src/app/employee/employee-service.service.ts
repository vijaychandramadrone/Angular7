import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

    endpoint = 'http://dummy.restapiexample.com/api/v1/';
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
  constructor(private httpClient:HttpClient) {
   }

   private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getEmployees(): Observable<any> {
    return this.httpClient.get(this.endpoint + 'employees').pipe(
      map(this.extractData));
  }
}
