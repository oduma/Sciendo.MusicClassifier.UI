import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SetPickerComponent } from './set-picker/set-picker.component';
import { MusicClassifierComponent } from './music-classifier/music-classifier.component';
import { OutputWindowComponent } from './output-window/output-window.component';
import { ArtistsListComponent } from './artists-list/artists-list.component';
import { ArtistInfoComponent } from './artist-info/artist-info.component';
import { BandInfoComponent } from './band-info/band-info.component';
import { BandWikiInfoComponent } from './band-wiki-info/band-wiki-info.component';
import { BandMembersListComponent } from './band-members-list/band-members-list.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { TracksListComponent } from './tracks-list/tracks-list.component';
import {EnvironmentUrlService} from './services/environment-url.service';
import {HttpClientService} from './services/http-client.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    SetPickerComponent,
    MusicClassifierComponent,
    OutputWindowComponent,
    ArtistsListComponent,
    ArtistInfoComponent,
    BandInfoComponent,
    BandWikiInfoComponent,
    BandMembersListComponent,
    AlbumsListComponent,
    TracksListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    EnvironmentUrlService,
    HttpClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
