import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpOptions } from '../models/http-options';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private http: HttpClient
  ) { }

  get<T>(options: HttpOptions): Observable<T>{
    return this.httpCall("GET", options);    
  }

  httpCall<T>(verb: string, options: HttpOptions): Observable<T> {
    options.body=options.body || null;
    return this.http.request<T>(verb,options.url,{body: options.body})
      .pipe(
        map(response=>{
          return (response)}));
  }
}
