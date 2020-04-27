import { Injectable } from '@angular/core';
import { RepositoryService } from './repository.service';
import { Observable } from 'rxjs';
import { count, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SetsService {

  constructor(private repository: RepositoryService) { }
  noOfSets:Observable<number>;

  getSets():Observable<string[]>{
    var result=this.repository.getDataNoParams<string[]>(`api/sets/`);
    this.noOfSets=result.pipe(count());
    return result;
  }
}
