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
import { TracksListComponent } from './tracks-list/tracks-list.component';
import {EnvironmentUrlService} from './services/environment-url.service';
import {HttpClientService} from './services/http-client.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { HelpComponent } from './help/help.component';
import { InterceptorService } from './services/interceptor.service';
import { LoaderService } from './services/loader.service';
import { SpinnerComponent } from './spinner/spinner.component';


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
    TracksListComponent,
    HelpComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    RouterModule.forRoot([
      {path:'set/:setName', component:MusicClassifierComponent},
      // {path:'overall', component:OverallSituationComponent},
      // {path:'history/:year',component:HistoryComponent},
      // {path: 'admin', component:AdminComponent},
      // {path: 'graph', component:GraphDisplayComponent},
      {path: '', redirectTo:'/', pathMatch: 'full'}
    ])
  ],
  providers: [
    EnvironmentUrlService,
    HttpClientService,
    // InterceptorService,
    // LoaderService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass:InterceptorService,
    //   multi:true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
