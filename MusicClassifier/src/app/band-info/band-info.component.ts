import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TrackDetails } from '../models/track-details';
import { ArtistSummary } from '../models/artist-summary';

@Component({
  selector: 'app-band-info',
  templateUrl: './band-info.component.html',
  styleUrls: ['./band-info.component.css']
})
export class BandInfoComponent implements OnInit {

  @Input()
  tracks:Observable<TrackDetails[]>;

  @Input()
  bandMembers:Observable<ArtistSummary[]>
 
  constructor() { }

  ngOnInit() {
  }

}
