import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ShareddataService } from '../../../shared/services/shareddata.service';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-livepddetails',
  templateUrl: './livepddetails.component.html',
  styleUrls: ['./livepddetails.component.css']
})
export class LivepddetailsComponent implements OnInit {
  episodeId: string;
  episode: any;
  noteEntry: string;

  constructor(private sharedData: ShareddataService, private route: ActivatedRoute, private _loc: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.episodeId = params['id'];
      this.episode = this.sharedData.getEpisodeById(this.episodeId);
    });
  }

  goBack() {
    this._loc.back();
  }

  addNote() {
    this.sharedData.addNote(this.episodeId, this.noteEntry);
    this.clearEntry();
  }

  deleteNote(noteText: string) {
    this.sharedData.deleteNote(this.episodeId, noteText);
  }

  clearEntry() {
    this.noteEntry = '';
  }
}
