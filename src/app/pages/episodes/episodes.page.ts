import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodesService } from 'src/app/services/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {
  episode:any = [];
  constructor(
    private activeRoute: ActivatedRoute,
    private episodesService: EpisodesService
  ) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.episodesService.getEpisode(id).subscribe(response => {
      this.episode = response;
    });
  }
}