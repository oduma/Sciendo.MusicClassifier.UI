import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SetsService } from '../services/sets.service';
import { Observable } from 'rxjs';
import { Action } from '../models/action';
import { getLocaleDateTimeFormat } from '@angular/common';
import { OutputService } from '../services/output.service';
import { ArtistService } from '../services/artist.service';
import { Router } from '@angular/router';
import { HelpService } from '../services/help.service';

@Component({
  selector: 'app-set-picker',
  templateUrl: './set-picker.component.html',
  styleUrls: ['./set-picker.component.css']
})
export class SetPickerComponent implements OnInit {

  setsAvailable:Observable<string[]>;

  @Output()
  noOfSets:Observable<number>;
  
  constructor(sets: SetsService, private outputService: OutputService, private helpService:HelpService) { 
    this.setsAvailable=sets.getSets();
    this.noOfSets=sets.noOfSets;
  }

  @Output() 
  eventForOutput= new EventEmitter<Action>();

  onSetChange(newSet:string)
  {
    let action: Action={subject: newSet,area: "sets", verb:"selected", occured:new Date()};
    this.outputService.addAction(action);
    if(newSet!="noSet")
      this.helpService.setSelected();
    this.eventForOutput.emit(action);
  }
  ngOnInit() {
  }

}
