import { Injectable } from '@angular/core';
import { Action } from '../models/action';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OutputService {

  addAction(action: Action) {
    this.actionsList.push(action);
    this.actions= new BehaviorSubject<Action[]>(this.actionsList);
  }
  
  actions: BehaviorSubject<Action[]>;
  private actionsList:Action[];

  constructor() {
    this.actionsList=[{verb:"started",area:"browser",subject:"application", occured:new Date()}];

    this.actions= new BehaviorSubject<Action[]>(this.actionsList);
   }

}
