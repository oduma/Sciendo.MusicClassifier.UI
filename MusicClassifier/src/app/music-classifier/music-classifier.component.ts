import { Component, OnInit } from '@angular/core';
import { Action } from '../models/action';
import { ArtistService } from '../services/artist.service';
import { Observable } from 'rxjs';
import { ArtistSummary } from '../models/artist-summary';

@Component({
  selector: 'app-music-classifier',
  templateUrl: './music-classifier.component.html',
  styleUrls: ['./music-classifier.component.css']
})
export class MusicClassifierComponent implements OnInit {

  constructor(private artistService:ArtistService) { }

  lastAction:Action;
  artists:Observable<ArtistSummary[]>

  eventForOutputReceived(event: Action)
  {
    this.lastAction=event;
    this.artistService.GetArtists(event.subject,0);
    this.artists=this.artistService.artistsSummary;
  }
  ngOnInit() {
  }

}
