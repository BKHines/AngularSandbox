import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonfunctionsService } from './common/commonfunctions.service';
import { FilterByPropertyPipe } from './pipes/filterbyproperty.pipe';
import { ArraySortPipe } from './pipes/arraysort.pipe';
import { ApiService } from './services/api.service';
import { ShowsService } from './services/shows.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilterByPropertyPipe, ArraySortPipe],
  providers: [CommonfunctionsService, ApiService, ShowsService],
  exports: [FilterByPropertyPipe, ArraySortPipe]
})
export class SharedModule { }
