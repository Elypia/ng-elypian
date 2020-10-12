import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {TimestampComponent} from './timestamp.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    TimestampComponent
  ],
  imports: [
    MatIconModule,
    MatTooltipModule,
    CommonModule
  ],
  exports: [
    TimestampComponent
  ]
})
export class ElyTimestampModule { }
