import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  posts: any[];
  users: any[];
  userId: string;

  constructor(private apiSvc: ApiService) { }

  ngOnInit() {
    this.apiSvc.getUsers().subscribe((res) => {
      this.users = res;
    });

    this.apiSvc.getPosts().subscribe((res) => {
      this.posts = res;
    });
  }

}
