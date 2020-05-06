import { Component, OnInit, Input } from '@angular/core';
import { TrackDetails } from '../models/track-details';
import { Observable } from 'rxjs';
import { ArtistSummary } from '../models/artist-summary';

@Component({
  selector: 'app-artist-info',
  templateUrl: './artist-info.component.html',
  styleUrls: ['./artist-info.component.css']
})
export class ArtistInfoComponent implements OnInit {

  @Input()
  tracks:Observable<TrackDetails[]>;

  @Input()
  bandMembers:Observable<ArtistSummary[]>;

  @Input()
  bandWikiPageUrl:Observable<string>;

  @Input()
  bandWikiPageContent:Observable<string>;

  constructor() { }

  ngOnInit() {
  }

}
