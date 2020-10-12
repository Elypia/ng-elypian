import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {MobileToolbarMenuComponent} from './mobile-toolbar-menu.component';
import {ResponsiveToolbarComponent} from './responsive-toolbar.component';
import {MatTreeModule} from '@angular/material/tree';
import {RouterModule} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    MobileToolbarMenuComponent,
    ResponsiveToolbarComponent
  ],
  imports: [
    CommonModule,
    MatTreeModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule
  ],
  exports: [
    MobileToolbarMenuComponent,
    ResponsiveToolbarComponent
  ]
})
export class ElyResponsiveToolbarModule { }
