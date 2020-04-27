import { Component, OnInit, Input } from '@angular/core';
import { ArtistService } from '../services/artist.service';
import { Observable } from 'rxjs';
import { ArtistSummary } from '../models/artist-summary';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent implements OnInit {

  @Input()
  artists:Observable<ArtistSummary[]>;

  constructor(artistsService: ArtistService) {
   }

  ngOnInit() {
  }

}
