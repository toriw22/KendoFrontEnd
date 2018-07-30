import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { toODataString } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators/map';
import { tap } from 'rxjs/operators/tap';

export abstract class NorthwindService extends BehaviorSubject<GridDataResult> {
    public loading: boolean;

    private BASE_URL = 'https://localhost:4200/api/';

    constructor(
        private http: HttpClient,
        protected tableName: string
    ) {
        super(null);
    }

    public query(state: any): void {
        this.fetch(this.tableName, state)
            .subscribe(x => super.next(x));
    }

    protected fetch(tableName: string, state: any): Observable<GridDataResult> {
        const queryStr = `${toODataString(state)}&$count=true`;
        this.loading = true;

        return this.http
            .get(`${this.BASE_URL}${tableName}`)
            .pipe(
                map(response => (<GridDataResult>{
                    data: response['value'],
                    total: parseInt(response['@odata.count'], 10)
                })),
                tap(() => this.loading = false)
            );
    }
}

@Injectable()
export class DevicesService extends NorthwindService {
    constructor(http: HttpClient) { super(http, 'devices'); }

    public queryForID({ id }: { id: number }, state?: any): void {
        this.query(Object.assign({}, state, {
            filter: {
                filters: [{
                    field: 'id', operator: 'eq', value: id
                }],
                logic: 'and'
            }
        }));
    }

    public queryForDeviceType(deviceType: string, state?: any): void {
        this.query(Object.assign({}, state, {
            filter: {
                filters: [{
                    field: 'deviceType', operator: 'contains', value: deviceType
                }],
                logic: 'and'
            }
        }));
    }

    public queryForDescription(description: string, state?: any): void {
        this.query(Object.assign({}, state, {
            filter: {
                filters: [{
                    field: 'description', operator: 'contains', value: description
                }],
                logic: 'and'
            }
        }));
    }


    public queryForStatus(status: boolean, state?: any): void {
        this.query(Object.assign({}, state, {
            filter: {
                filters: [{
                    field: 'status', operator: 'eq', value: status
                }],
                logic: 'and'
            }
        }));
    }


}

// @Injectable()
// export class CategoriesService extends NorthwindService {
//     constructor(http: HttpClient) { super(http, 'Categories'); }

//     queryAll(st?: any): Observable<GridDataResult> {
//         const state = Object.assign({}, st);
//         delete state.skip;
//         delete state.take;

//         return this.fetch(this.tableName, state);
//     }
// }



//============== tour of heroes ==============//

// import { Injectable } from '@angular/core';

// import { Observable, of } from 'rxjs';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Device } from './device';
// import { MessageService } from './message.service';

// import { catchError, map, tap } from 'rxjs/operators';


// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

// @Injectable({ providedIn: 'root' })

// export class DevicesService {
  
//   private devicesUrl = 'api/devices';  // URL to web api

//   constructor(private http: HttpClient) { }

//   // Get devices from server
//   getDevices (): Observable<Device[]> {
//     return this.http.get<Device[]>(this.devicesUrl)
//       .pipe(
//         tap(devices => console.log('fetched devices')),
//         catchError(this.handleError('getDevices', []))
//       );
//   }

//   getDevice(id: number): Observable<Device> {
//     const url = `${this.devicesUrl}/${id}`;
//     return this.http.get<Device>(url).pipe(
//       tap(_ => console.log(`fetched device id=${id}`)),
//       catchError(this.handleError<Device>(`getDevice id=${id}`))
//     );
//   }

//   // * @param operation - name of the operation that failed
//   // * @param result - optional value to return as the observable result
//   // */

//   private handleError<T> (operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
   
//       // TODO: send the error to remote logging infrastructure
//       console.error(error); // log to console instead
   
//       // TODO: better job of transforming error for user consumption
//       console.log(`${operation} failed: ${error.message}`);
   
//       // Let the app keep running by returning an empty result.
//       return of(result as T);
//     };
//   }

//   /** POST: add a new device to the server */

//   addDevice (device: Device): Observable<Device> {
//     return this.http.post<Device>(this.devicesUrl, device, httpOptions).pipe(
//       // tap((device: Device) => this.log(`added device w/ id=${device.id}`)),
//       catchError(this.handleError<Device>('addDevice'))
//     );
//   }


// }


