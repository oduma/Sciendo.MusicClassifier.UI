import { Injectable } from '@angular/core';
import { RepositoryService } from './repository.service';
import { Observable } from 'rxjs';
import { ArtistSummary } from '../models/artist-summary';
import { PageInfo } from '../models/page-info';
import { ArtistsSummary } from '../models/artists-summary';
import { map, tap } from 'rxjs/operators';
import { ArtistDetails } from '../models/artist-details';
import { TrackDetails } from '../models/track-details';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  
  getPage(setName: string, pageNo: number) {
    let artistsSummary: Observable<ArtistsSummary> = this.repositoryService.getDataWithParams<ArtistsSummary>("api/artists/getArtists",[{name:"setName", value:setName},{name:"pageNo",value:String(pageNo)},{name:"pageSize",value:String(this.pageSize)}]);
    this.artistsSummary = artistsSummary.pipe(tap(artists=>{console.log(artists.artistsSummaries)}), map(artists=>{return artists.artistsSummaries}));
    this.currentPageInfo=artistsSummary.pipe(map(artists=>{return artists.pageInfo}));
  }

  getCurrentArtistDetail(setName: string){
    let artistDetails:Observable<ArtistDetails>= this.repositoryService.getDataWithParams<ArtistDetails>("api/artists/getArtist", [{name:"setName", value:setName},{name:"artistId",value:this.currentArtistId}]);
    this.currentArtistTracks=artistDetails.pipe(map(artist=>{return artist.trackDetails}));
    this.currentBandMembers=artistDetails.pipe(map(artist=>{return artist.bandMembers}));
    this.currentBandWikiPageUrl=artistDetails.pipe(map(artist=>{return artist.bandWikiPageUrl}));
  }

  private pageSize:number=25;
  artistsSummary: Observable<ArtistSummary[]>;
  currentPageInfo:Observable<PageInfo>;
  currentArtistId: string;
  currentBandWikiPageUrl: Observable<string>;
  currentBandMembers:Observable<ArtistSummary[]>;
  currentArtistTracks:Observable<TrackDetails[]>;

  
  getArtists(setName: string, pageNumber: number) {
    let artistsSummary: Observable<ArtistsSummary> = this.repositoryService.getDataWithParams<ArtistsSummary>("api/artists",[{name:"setName",value:setName},{name:"pageNo",value:String(pageNumber)},{name:"pageSize",value:String(this.pageSize)}]);
    this.artistsSummary = artistsSummary.pipe(map(artists=>{return artists.artistsSummaries}));
    this.currentPageInfo=artistsSummary.pipe(map(artists=>{return artists.pageInfo}));
  }

  constructor(private repositoryService: RepositoryService) { }
}
