import {NgModule} from '@angular/core';
import {StatefulButtonComponent} from './stateful-button/stateful-button.component';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {LoadableComponent} from './loadable/loadable.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TimestampComponent} from './timestamp/timestamp.component';
import {TimegraphComponent} from './timegraph/timegraph.component';
import {NotLoadedDirective} from './loadable/not-loaded.directive';
import {FailedDirective} from './loadable/failed.directive';
import {MarkdownModule} from 'ngx-markdown';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    StatefulButtonComponent,
    LoadableComponent,
    TimestampComponent,
    TimegraphComponent,
    NotLoadedDirective,
    FailedDirective
  ],
  imports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    CommonModule,
    MatToolbarModule,
    MatChipsModule,
    FormsModule,
    MatSelectModule,
    MatRadioModule,
    MatTooltipModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MarkdownModule,
    MatTabsModule,
    RouterModule,
    MatButtonToggleModule
  ],
  exports: [
    StatefulButtonComponent,
    LoadableComponent,
    TimestampComponent,
    TimegraphComponent,
    NotLoadedDirective,
    FailedDirective
  ]
})
export class ElypianModule { }
