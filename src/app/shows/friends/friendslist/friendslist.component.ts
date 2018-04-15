import { Component, OnInit } from '@angular/core';
import { ShareddataService } from '../../../shared/services/shareddata.service';

@Component({
  selector: 'app-friendslist',
  templateUrl: './friendslist.component.html',
  styleUrls: ['./friendslist.component.css']
})
export class FriendslistComponent implements OnInit {
  episodes: any[];
  filtertext: string;
  filtertype: string;

  constructor(private sharedData: ShareddataService) { }

  ngOnInit() {
    this.episodes = this.sharedData.getEpisodesByShow('Friends');
  }

  clearFilter() {
    this.filtertype = '';
    this.filtertext = '';
  }
}
