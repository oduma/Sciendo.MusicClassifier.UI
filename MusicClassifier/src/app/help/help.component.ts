import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HelpService } from '../services/help.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  message: Observable<string[]>;

  constructor(private helpService: HelpService) {
    this.message=helpService.message.asObservable();
   }

  ngOnInit() {
  }

}
