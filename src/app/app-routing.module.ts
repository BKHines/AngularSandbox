import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivepdlistComponent } from './shows/livepd/livepdlist/livepdlist.component';
import { LivepddetailsComponent } from './shows/livepd/livepddetails/livepddetails.component';
import { FriendslistComponent } from './shows/friends/friendslist/friendslist.component';
import { FriendsdetailsComponent } from './shows/friends/friendsdetails/friendsdetails.component';

const routes: Routes = [
  { path: 'livepd', component: LivepdlistComponent },
  { path: 'livepd/:id', component: LivepddetailsComponent },
  { path: 'friends', component: FriendslistComponent },
  { path: 'friends/:id', component: FriendsdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
