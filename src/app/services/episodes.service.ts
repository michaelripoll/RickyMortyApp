import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/rick-and-morty-api';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(
    private http: HttpClient,
  ) { }

  getEpisodes(){
    return this.http.get(apiUrl.episodes);
  }

  getEpisode(id:any){
    return this.http.get(`${apiUrl.episodes}/${id}`);
  }
}