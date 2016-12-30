import { Component, OnInit } from '@angular/core';

import {
  Artist
} from '../model/Artist';

import {
  SpotifyService
} from '../services/spotify.service';

@Component({
  selector: 'iz-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchStr:string;
  private searchRes : Artist[];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  searchMusic() {
    this.spotifyService.searchMusic(this.searchStr)
      .subscribe(
        res => this.searchRes = res.artists.items
      );
  }
}
