import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../../../shared/services/shows.service';

@Component({
  selector: 'app-livepdlist',
  templateUrl: './livepdlist.component.html',
  styleUrls: ['./livepdlist.component.css']
})
export class LivepdlistComponent implements OnInit {
  episodes: any[];
  filtertype: string;
  filtertext: string;

  constructor(private showSvc: ShowsService) { }

  ngOnInit() {
    this.loadEpisodes();
  }

  updateWatched(episodeId: string, watched: boolean) {
    this.showSvc.setEpisodeWatchedFlag(episodeId, watched).subscribe(() => {}, (err) => { alert(err); }, () => { this.loadEpisodes(); });
  }

  loadEpisodes() {
    this.showSvc.getEpisodesByShow('Live PD').subscribe((res) => {
      this.episodes = res;
    });
  }

clearFilter() {
    this.filtertype = '';
    this.filtertext = '';
  }
}
