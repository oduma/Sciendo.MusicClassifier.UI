import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpService {
  
  artistSelected() {
    this.rawMessage[0]="<b>&uarr; &darr;</b> navigate list; <b>&larr; &rarr;</b> navigate pages.";
    this.message = new BehaviorSubject<string[]>(this.rawMessage);
  }
  setSelected():void {
    this.rawMessage[0]="Click on an artist on the left to activate options and details.";
    this.message = new BehaviorSubject<string[]>(this.rawMessage);
  }

  message: BehaviorSubject<string[]>;
  private rawMessage: string[];
  constructor() {
    this.rawMessage=["Select a set to see artists."];
    this.message = new BehaviorSubject<string[]>(this.rawMessage);
   }
}
