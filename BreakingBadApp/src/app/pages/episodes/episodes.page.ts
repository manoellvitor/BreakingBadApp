import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

  episodes: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.episodes = this.api.getEpisodes();
  }

  openDetails(episode){
    let episodeId = episode.episode_id;
    this.router.navigateByUrl(`/tabs/episodes/${episodeId}`);
  }

}
