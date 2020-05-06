import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-band-wiki-info',
  templateUrl: './band-wiki-info.component.html',
  styleUrls: ['./band-wiki-info.component.css']
})
export class BandWikiInfoComponent implements OnInit {

  @Input()
  bandWikiPageUrl:Observable<string>;

  bandWikiPageContent:Observable<string>;
  constructor() { }

  ngOnInit() {
  }

}
