import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ShowsService } from '../../../shared/services/shows.service';


@Component({
  selector: 'app-livepddetails',
  templateUrl: './livepddetails.component.html',
  styleUrls: ['./livepddetails.component.css']
})
export class LivepddetailsComponent implements OnInit {
  episodeId: string;
  episode: any;
  noteEntry: string;

  constructor(private showsSvc: ShowsService, private route: ActivatedRoute, private _loc: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.episodeId = params['id'];
      this.loadEpisode();
    });
  }

  goBack() {
    this._loc.back();
  }

  addNote() {
    this.showsSvc.addNote(this.episodeId, this.noteEntry).subscribe((res) => {
      this.loadEpisode();
      this.clearEntry();
    }, (err) => {
      alert(err);
    });
  }

  deleteNote(noteText: string) {
    this.showsSvc.deleteNote(this.episodeId, noteText).subscribe((res) => {
      this.loadEpisode();
    }, (err) => {
      alert(err);
    });
  }

  updateWatched(episodeId: string, watched: boolean) {
    this.showsSvc.setEpisodeWatchedFlag(episodeId, watched).subscribe(() => {}, (err) => { alert(err); }, () => { this.loadEpisode(); });
  }

  loadEpisode() {
    this.showsSvc.getEpisodeById(this.episodeId).subscribe((res) => {
      this.episode = res;
    });
  }

  clearEntry() {
    this.noteEntry = '';
  }
}
