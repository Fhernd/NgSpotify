import {
    Injectable
} from '@angular/core';
import {
    Http, 
    Headers
} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
    private searchUrl: string;
    private artistUrl: string;
    private albumsUrl: string;
    private albumUrl: string;
    private client_id = '5e339cecf2624e8a92591172b41f04bd';
    private client_secret = '4f59e66870fe484080764104cc08d11e';

    constructor(private http: Http){}

    searchMusic(str: string, type="artist") {
        this.searchUrl = `
            https://api.spotify.com/v1/search?query=${str}&offset=0&limit=20&type=${type}&market=US&client_id=${this.client_id}&client_secret=${this.client_secret}
        `;
        return this.http.get(this.searchUrl)
            .map(res => res.json());

    }

    getArtist(id:string) {
        this.artistUrl = `
            https://api.spotify.com/v1/artists/${id}
        `;
        return this.http.get(this.artistUrl)
            .map(res => res.json());

    }

    getAlbums(artistId: string) {
        this.albumsUrl = `
            https://api.spotify.com/v1/artists/${artistId}/albums
        `;
        return this.http.get(this.albumsUrl)
            .map(res => res.json());
    }

    getAlbum(id: string) {
        this.albumUrl = `
            https://api.spotify.com/v1/albums/${id}
        `;
        return this.http.get(this.albumUrl)
            .map(res => res.json());
    }
}