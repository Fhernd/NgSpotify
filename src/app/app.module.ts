import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  RouterModule
} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar.component';
import { AboutComponent } from './components/about.component';
import { SearchComponent } from './components/search.component';

/**
 * Routes
 */
import {
  routes 
} from './app.routes';

/**
 * Services
 */
import {
  SpotifyService
} from './services/spotify.service';
import { ArtistComponent } from './components/artist.component';
import { AlbumComponent } from './components/album.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
