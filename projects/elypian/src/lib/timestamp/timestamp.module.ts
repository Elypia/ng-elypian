import {NgModule} from '@angular/core';
import {MatIconModule, MatTooltipModule} from '@angular/material';
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
