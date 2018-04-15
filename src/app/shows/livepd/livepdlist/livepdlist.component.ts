import { Component, OnInit } from '@angular/core';
import { ShareddataService } from '../../../shared/services/shareddata.service';

@Component({
  selector: 'app-livepdlist',
  templateUrl: './livepdlist.component.html',
  styleUrls: ['./livepdlist.component.css']
})
export class LivepdlistComponent implements OnInit {
  episodes: any[];
  filtertype: string;
  filtertext: string;

  constructor(private sharedData: ShareddataService) { }

  ngOnInit() {
    this.episodes = this.sharedData.getEpisodesByShow('Live PD');
  }

  clearFilter() {
    this.filtertype = '';
    this.filtertext = '';
  }
}
