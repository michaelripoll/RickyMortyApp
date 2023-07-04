import { Component, OnInit } from '@angular/core';
import { EpisodesService } from '../services/episodes.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  episodes:any = [];
  constructor(
    private episodesService: EpisodesService
  ) {}

  ngOnInit(): void {
   this.getEpisodes();
  }

  getEpisodes(){
    this.episodesService.getEpisodes().subscribe(response => {
      this.episodes = response;
    });
  }
}