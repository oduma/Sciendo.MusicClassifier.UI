import { Component, OnInit } from '@angular/core';
import { Action } from '../models/action';
import { ArtistService } from '../services/artist.service';
import { Observable } from 'rxjs';
import { ArtistSummary } from '../models/artist-summary';
import { TrackDetails } from '../models/track-details';

@Component({
  selector: 'app-music-classifier',
  templateUrl: './music-classifier.component.html',
  styleUrls: ['./music-classifier.component.css']
})
export class MusicClassifierComponent implements OnInit {

  constructor(private artistService:ArtistService) { }

  lastAction:Action;
  artists:Observable<ArtistSummary[]>;
  tracks:Observable<TrackDetails[]>;
  bandMembers:Observable<ArtistSummary[]>;
  bandWikiPageUrl:Observable<string>;
  currentSet:string;
  artistSelected: boolean=false;
  
  eventForOutputReceived(event: Action){
    this.lastAction=event;
    this.artistService.getArtists(event.subject,0);
    this.artists=this.artistService.artistsSummary;
    this.currentSet=event.subject;
  }
  artistSelectedEventReceived(event: string){
    this.artistService.currentArtistId=event;
    this.artistService.getCurrentArtistDetail(this.currentSet);
    this.tracks=this.artistService.currentArtistTracks;
    this.bandMembers=this.artistService.currentBandMembers;
    this.bandWikiPageUrl=this.artistService.currentBandWikiPageUrl;
    this.artistSelected=true;
    

  }
  ngOnInit() {
  }

}
