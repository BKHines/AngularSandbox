import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShowsModule } from './shows/shows.module';
import { MessageboardModule } from './messageboard/messageboard.module';
import { RefreshComponent } from './refresh/refresh.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptor } from './shared/services/http.interceptor';
import { RandomgeneratorComponent } from './randomgenerator/randomgenerator.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RefreshComponent,
    RandomgeneratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ShowsModule,
    MessageboardModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [RefreshComponent]
})
export class AppModule { }
