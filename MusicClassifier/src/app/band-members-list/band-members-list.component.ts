import { Component, OnInit, Input } from '@angular/core';
import { ArtistSummary } from '../models/artist-summary';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-band-members-list',
  templateUrl: './band-members-list.component.html',
  styleUrls: ['./band-members-list.component.css']
})
export class BandMembersListComponent implements OnInit {

  @Input()
  bandMembers:Observable<ArtistSummary[]>;
  constructor() { }

  ngOnInit() {
  }

}
