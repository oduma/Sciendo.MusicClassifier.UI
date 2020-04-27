import { Injectable } from '@angular/core';
import { RepositoryService } from './repository.service';
import { Observable } from 'rxjs';
import { ArtistSummary } from '../models/artist-summary';
import { PageInfo } from '../models/page-info';
import { ArtistsSummary } from '../models/artists-summary';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {


  private pageSize:number=10;
  artistsSummary: Observable<ArtistSummary[]>;
  currentPageInfo:Observable<PageInfo>;
  
  GetArtists(setName: string, pageNumber: number) {
    let artistsSummary: Observable<ArtistsSummary> = this.repositoryService.getDataWithParams<ArtistsSummary>("api/artists",[{name:"setName",value:setName},{name:"pageNo",value:String(pageNumber)},{name:"pageSize",value:String(this.pageSize)}]);
    this.artistsSummary = artistsSummary.pipe(tap(artists=>{console.log(artists.artistsSummaries)}), map(artists=>{return artists.artistsSummaries}));
    this.currentPageInfo=artistsSummary.pipe(map(artists=>{return artists.pageInfo}));
  }

  constructor(private repositoryService: RepositoryService) { }
}
