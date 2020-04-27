import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { EnvironmentUrlService } from './environment-url.service';
import { Observable } from 'rxjs';
import { UrlParameter } from '../models/url-parameter';


@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClientService, private environmentUrl: EnvironmentUrlService) { }

  getDataNoParams<T>(route: string):Observable<T>{
    return this.http.get<T>({url:this.createCompleteRoute(this.environmentUrl.urlAddress,route)});
  }

  getDataWithParams<T>(route: string, urlParams: UrlParameter[]):Observable<T>{
    var routeWithParams:string;
    routeWithParams=urlParams.map(p=>`${p.name}=${encodeURIComponent(p.value)}`).join('&');
    return this.getDataNoParams<T>(`${route}?${routeWithParams}`);

  }
  private createCompleteRoute(urlAddress: string, route: string): string {
        let fullPath:string=`${urlAddress}/${route}`;
        console.log(`accesing server on: ${fullPath}`);
        return fullPath;
  }
}
