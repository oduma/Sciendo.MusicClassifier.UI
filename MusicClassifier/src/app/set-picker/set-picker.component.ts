import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SetsService } from '../services/sets.service';
import { Observable } from 'rxjs';
import { Action } from '../models/action';
import { getLocaleDateTimeFormat } from '@angular/common';
import { OutputService } from '../services/output.service';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'app-set-picker',
  templateUrl: './set-picker.component.html',
  styleUrls: ['./set-picker.component.css']
})
export class SetPickerComponent implements OnInit {

  setsAvailable:Observable<string[]>;

  @Output()
  noOfSets:Observable<number>;
  
  constructor(private sets: SetsService, private outputService: OutputService, private artistService: ArtistService) { 
    this.setsAvailable=sets.getSets();
    this.noOfSets=sets.noOfSets;
  }

  @Output() 
  eventForOutput= new EventEmitter<Action>();

  onSetChange(newSet:string)
  {
    let action: Action={subject: newSet,area: "sets", verb:"selected", occured:new Date()};
    this.outputService.addAction(action);
    this.eventForOutput.emit(action);
  }
  ngOnInit() {
  }

}
