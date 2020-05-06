import { Component, OnInit, Input } from '@angular/core';
import { ArtistService } from '../services/artist.service';
import { TrackDetails } from '../models/track-details';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tracks-list',
  templateUrl: './tracks-list.component.html',
  styleUrls: ['./tracks-list.component.css']
})
export class TracksListComponent implements OnInit {

  @Input()
  tracks:Observable<TrackDetails[]>;
  constructor() {
   }

  ngOnInit() {
  }

}
