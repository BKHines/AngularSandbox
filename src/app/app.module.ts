import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShowsModule } from './shows/shows.module';
import { MessageboardModule } from './messageboard/messageboard.module';
import { RefreshComponent } from './refresh/refresh.component';


@NgModule({
  declarations: [
    AppComponent,
    RefreshComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShowsModule,
    MessageboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RefreshComponent]
})
export class AppModule { }
