import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/rick-and-morty-api';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http: HttpClient,
  ) { }

  getCharacters(){
    return this.http.get(apiUrl.characters);
  }

  getCharacter(id:any){
    return this.http.get(`${apiUrl.characters}/${id}`);
  }
}