import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {fromEvent} from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ReportingService {

  constructor(private _http : HttpClient) { }

  getReportingData()
  {
    return this._http.get("http://localhost:1591/api/Report/getReports");
   
  }

}
