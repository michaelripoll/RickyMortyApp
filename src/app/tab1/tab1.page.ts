import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  characters:any = [];
  constructor(
    private characterService: CharactersService
  ) {}

  ngOnInit(): void {
      this.getCharacters();
  }
  
  getCharacters(){
    this.characterService.getCharacters().subscribe(response => {
      this.characters = response;
    });
  }
}