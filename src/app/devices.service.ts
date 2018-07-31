import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Device } from './device';

import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class DevicesService {
  
  private devicesUrl = 'api/devices';  // URL to web api

  constructor(private http: HttpClient) { }

  // Get devices from server
  getDevices (): Observable<Device[]> {
    return this.http.get<Device[]>(this.devicesUrl)
      .pipe(
        tap(devices => console.log('fetched devices')),
        catchError(this.handleError('getDevices', []))
      );
  }

  getDevice(id: number): Observable<Device> {
    const url = `${this.devicesUrl}/${id}`;
    return this.http.get<Device>(url).pipe(
      tap(_ => console.log(`fetched device id=${id}`)),
      catchError(this.handleError<Device>(`getDevice id=${id}`))
    );
  }

  // * @param operation - name of the operation that failed
  // * @param result - optional value to return as the observable result
  // */

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

  /** POST: add a new device to the server */

  addDevice (device: Device): Observable<Device> {
    return this.http.post<Device>(this.devicesUrl, device, httpOptions).pipe(
      // tap((device: Device) => this.log(`added device w/ id=${device.id}`)),
      catchError(this.handleError<Device>('addDevice'))
    );
  }


}


