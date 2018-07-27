import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Device } from './device';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  
  constructor(private http: HttpClient) { }

  private devicesUrl = 'api/devices';  // URL to web api

  getDevices (): Observable<Device[]> {
    return this.http.get<Device[]>(this.devicesUrl)
  }
}
