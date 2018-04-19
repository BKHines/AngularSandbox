import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareddataService } from './services/shareddata.service';
import { CommonfunctionsService } from './common/commonfunctions.service';
import { FilterByPropertyPipe } from './pipes/filterbyproperty.pipe';
import { ArraySortPipe } from './pipes/arraysort.pipe';
import { ApiService } from './services/api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilterByPropertyPipe, ArraySortPipe],
  providers: [ShareddataService, CommonfunctionsService, ApiService],
  exports: [FilterByPropertyPipe, ArraySortPipe]
})
export class SharedModule { }
