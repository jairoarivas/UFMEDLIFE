import { NgModule }      from '@angular/core';
import { FilterPipe } from './filter.pipe';
import { FilterEventsPipe } from './filterEvents.pipe';
import { SortPipe } from './orderBy.pipe';
import { NumberSortPipe } from './orderByValue.pipe';
import { DateSortPipe } from './orderByDate.pipe';
import {customDateFormatPipe} from './dateFormat.pipe';

 @NgModule({
     imports:        [],
     declarations:   [  FilterPipe, SortPipe, NumberSortPipe , customDateFormatPipe, DateSortPipe, FilterEventsPipe ],
     exports:        [  FilterPipe, SortPipe, NumberSortPipe,  customDateFormatPipe, DateSortPipe, FilterEventsPipe ],
 })

 export class PipeModule {

   static forRoot() {
      return {
          ngModule: PipeModule,
          providers: [],
      };
   }
 }
