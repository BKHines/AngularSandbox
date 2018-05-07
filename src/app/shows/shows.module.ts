import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LivepdlistComponent } from './livepd/livepdlist/livepdlist.component';
import { LivepddetailsComponent } from './livepd/livepddetails/livepddetails.component';
import { CommonfunctionsService } from '../shared/common/commonfunctions.service';
import { RouterModule } from '@angular/router';
import { FriendslistComponent } from './friends/friendslist/friendslist.component';
import { FriendsdetailsComponent } from './friends/friendsdetails/friendsdetails.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  declarations: [LivepdlistComponent, LivepddetailsComponent, FriendslistComponent, FriendsdetailsComponent],
  providers: [CommonfunctionsService]
})
export class ShowsModule { }
