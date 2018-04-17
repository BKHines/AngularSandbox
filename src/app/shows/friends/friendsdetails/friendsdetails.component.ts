import { Component, OnInit } from '@angular/core';
import { ShareddataService } from '../../../shared/services/shareddata.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-friendsdetails',
  templateUrl: './friendsdetails.component.html',
  styleUrls: ['./friendsdetails.component.css']
})
export class FriendsdetailsComponent implements OnInit {
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
