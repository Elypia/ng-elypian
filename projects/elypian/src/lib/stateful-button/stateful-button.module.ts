import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {StatefulButtonComponent} from './stateful-button.component';
import {ElyLoadableModule} from '../loadable/loadable.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    StatefulButtonComponent
  ],
  imports: [
    ElyLoadableModule,
    MatButtonModule,
    CommonModule
  ],
  exports: [
    StatefulButtonComponent
  ]
})
export class ElyStatefulButtonModule { }
