import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ArtistService } from '../services/artist.service';
import { Observable } from 'rxjs';
import { ArtistSummary } from '../models/artist-summary';
import { OutputService } from '../services/output.service';
import { LoaderService } from '../services/loader.service';
import { HelpService } from '../services/help.service';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent implements OnInit {

  @Input()
  artists:Observable<ArtistSummary[]>;

  @Input()
  currentSet:string;

  @Output() 
  artistSelectedEvent= new EventEmitter<string>();
  
  selectedArtistId:string;
  private selectedListItemIndex: number;
  private listSrcElement:any;
  currentPage:number;

  constructor(private artistService: ArtistService, private outputService: OutputService, public loaderService: LoaderService, private helpService:HelpService) {
   }

  focusEvent(event){
    this.listSrcElement=event.target || event.srcElement || event.currentTarget;
    this.selectedListItemIndex=0;
    this.selectedArtistId=this.listSrcElement.children[this.selectedListItemIndex].attributes.id.nodeValue;
    this.artistService.currentArtistId=this.selectedArtistId;
    this.artistSelectedEvent.emit(this.selectedArtistId);
    let artistName:string=this.listSrcElement.children[this.selectedListItemIndex].children[0].children[0].innerText;
    this.outputService.addAction({subject:artistName,verb:"selected",area:"artist list",occured:new Date()});
    this.helpService.artistSelected();
    this.artistService.getCurrentArtistDetail(this.currentSet);
  }

  keyDownEvent(event): Boolean{
    console.log(`${event.code} key pressed`);
    switch(event.code)
    {
      case 'ArrowDown':
        this.MoveDown();
        return false;
      case 'ArrowUp':
        this.MoveUp();
        return false;
      case 'ArrowRight':
        this.NextPage();
        return false;
        case 'ArrowLeft':
          this.PreviousPage();
          return false;
        case 'KeyA':
        this.ChangeToArtist();
        return false;
      case 'KeyB':
        this.ChangeToBand();
        return false;
      case 'KeyR':
        this.TriggerReprocess();
        return false;
      default:
        return true;
    }
  }

  PreviousPage() {
    if(this.currentPage!=0){
        this.artistService.getPage(this.currentSet, --this.currentPage);
        this.selectedListItemIndex=0;
        this.selectedArtistId=this.listSrcElement.children[this.selectedListItemIndex].attributes.id.nodeValue;
        this.artistService.currentArtistId=this.selectedArtistId;
        this.artists=this.artistService.artistsSummary;
      }
    
  }
  NextPage() {
    this.artistService.getPage(this.currentSet, ++this.currentPage);
    this.selectedListItemIndex=0;
    this.selectedArtistId=this.listSrcElement.children[this.selectedListItemIndex].attributes.id.nodeValue;
    this.artistService.currentArtistId=this.selectedArtistId;
    this.artists=this.artistService.artistsSummary;
  }
  TriggerReprocess() {
    throw new Error("Method not implemented.");
  }
  ChangeToBand() {
    throw new Error("Method not implemented.");
  }
  ChangeToArtist() {
    throw new Error("Method not implemented.");
  }
  MoveUp() {
    if(this.selectedListItemIndex!==0){
      this.selectedArtistId=this.listSrcElement.children[--this.selectedListItemIndex].attributes.id.nodeValue;
      let artistName:string=this.listSrcElement.children[this.selectedListItemIndex].children[0].children[0].innerText;
      this.outputService.addAction({subject:artistName,verb:"selected",area:"artist list",occured:new Date()});
      this.artistSelectedEvent.emit(this.selectedArtistId);
      this.artistService.getCurrentArtistDetail(this.currentSet);
    }
  }
  private MoveDown(){
    if(this.selectedListItemIndex!==this.listSrcElement.children.length){
      this.selectedArtistId=this.listSrcElement.children[++this.selectedListItemIndex].attributes.id.nodeValue;
      this.artistSelectedEvent.emit(this.selectedArtistId);
      let artistName:string=this.listSrcElement.children[this.selectedListItemIndex].children[0].children[0].innerText;
      this.outputService.addAction({subject:artistName,verb:"selected",area:"artist list",occured:new Date()});
      this.artistService.getCurrentArtistDetail(this.currentSet);
    }

  }
  ngOnInit() {
    this.selectedArtistId='';
    this.selectedListItemIndex=0;
    this.currentPage=0;
  }

}
