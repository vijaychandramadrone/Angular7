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

  createEmployee (employee): Observable<any> {
    console.log(employee);
    return this.httpClient.post<any>(this.endpoint + 'create', JSON.stringify(employee), this.httpOptions).pipe(
      tap((employee) => console.log(`added employee w/ id=${employee.id}`)),
      catchError(this.handleError<any>('createEmployee'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
