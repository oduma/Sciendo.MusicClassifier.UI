import { Component, OnInit } from '@angular/core';
import { OutputService } from '../services/output.service';
import { Observable } from 'rxjs';
import { Action } from '../models/action';

@Component({
  selector: 'app-output-window',
  templateUrl: './output-window.component.html',
  styleUrls: ['./output-window.component.css']
})
export class OutputWindowComponent implements OnInit {

  constructor(outputService: OutputService) {
    this.outputActions=outputService.actions.asObservable();
   }
  
   outputActions:Observable<Action[]>;

  ngOnInit() {
  }

  getFormatedTime(occured: Date): string{
    return `${occured.getHours()}:${occured.getMinutes()}:${occured.getSeconds()}`;
  }

}
