import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()


export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify servicios listos');

   }

   getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB7nFMzikIVWYMPq_E1uFPdNCTtQOKCVUFWpqOQLJaPIfti'


    })
     return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers});

         


   }
}
