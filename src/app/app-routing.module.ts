import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivepdlistComponent } from './shows/livepd/livepdlist/livepdlist.component';
import { LivepddetailsComponent } from './shows/livepd/livepddetails/livepddetails.component';
import { FriendslistComponent } from './shows/friends/friendslist/friendslist.component';
import { FriendsdetailsComponent } from './shows/friends/friendsdetails/friendsdetails.component';
import { MessagesComponent } from './messageboard/messages/messages.component';
import { MessagedetailsComponent } from './messageboard/messagedetails/messagedetails.component';

const routes: Routes = [
  { path: 'livepd', component: LivepdlistComponent },
  { path: 'livepd/:id', component: LivepddetailsComponent },
  { path: 'friends', component: FriendslistComponent },
  { path: 'friends/:id', component: FriendsdetailsComponent },
  { path: 'messages', component: MessagesComponent},
  { path: 'messages/:id', component: MessagedetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
