import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../../../shared/services/shows.service';

@Component({
  selector: 'app-friendslist',
  templateUrl: './friendslist.component.html',
  styleUrls: ['./friendslist.component.css']
})
export class FriendslistComponent implements OnInit {
  episodes: any[];
  filtertext: string;
  filtertype: string;

  constructor(private showSvc: ShowsService) { }

  ngOnInit() {
    this.loadEpisodes();
  }

  updateWatched(episodeId: string, watched: boolean) {
    this.showSvc.setEpisodeWatchedFlag(episodeId, watched).subscribe(() => {}, (err) => { alert(err); }, () => { this.loadEpisodes(); });
  }

  loadEpisodes() {
    this.showSvc.getEpisodesByShow('Friends').subscribe((res) => {
      this.episodes = res;
    });
  }

  clearFilter() {
    this.filtertype = '';
    this.filtertext = '';
  }
}
