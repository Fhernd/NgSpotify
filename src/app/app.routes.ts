import {
    Routes
} from '@angular/router';
import {
    SearchComponent
} from './components/search.component';
import {
    AboutComponent
} from './components/about.component';
import {
    ArtistComponent
} from './components/artist.component';
import {
    AlbumComponent
} from './components/album.component';

export const  routes: Routes = [
    {
        path: '', 
        component: SearchComponent
    }, 
    {
        path: 'about',
        component: AboutComponent
    }, 
    {
        path: 'artist/:id', 
        component: ArtistComponent
    },
    {
        path: 'album/:id', 
        component: AlbumComponent
    }
];

