import {LoadableComponent} from './loadable.component';
import {NotLoadedDirective} from './not-loaded.directive';
import {FailedDirective} from './failed.directive';
import {NgModule} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    LoadableComponent,
    NotLoadedDirective,
    FailedDirective
  ],
  imports: [
    MatProgressSpinnerModule,
    CommonModule
  ],
  exports: [
    LoadableComponent,
    NotLoadedDirective,
    FailedDirective
  ]
})
export class ElyLoadableModule { }
