import {NgModule} from '@angular/core';
import {StatefulButtonComponent} from './stateful-button/stateful-button.component';
import {
  MatButtonModule, MatCardModule,
  MatChipsModule,
  MatIconModule, MatListModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule, MatSidenavModule, MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {LoadableComponent} from './loadable/loadable.component';
import {CommonModule} from '@angular/common';
import {HomeComponent} from '../../../docs/src/app/pages/home/home.component';
import {ComponentOverviewComponent} from '../../../docs/src/app/pages/component-overview/component-overview.component';
import {FormsModule} from '@angular/forms';
import {TimestampComponent} from './timestamp/timestamp.component';
import {TimegraphComponent} from './timegraph/timegraph.component';
import {NotLoadedDirective} from './loadable/not-loaded.directive';
import { FailedDirective } from './loadable/failed.directive';
import {MarkdownModule} from 'ngx-markdown';
import {RouterModule} from '@angular/router';
import { StatefulButtonExampleComponent } from '../../../docs/src/app/examples/stateful-button-example/stateful-button-example.component';
import { LoadableExampleComponent } from '../../../docs/src/app/examples/loadable-example/loadable-example.component';

@NgModule({
  declarations: [
    StatefulButtonComponent,
    LoadableComponent,
    HomeComponent,
    ComponentOverviewComponent,
    TimestampComponent,
    TimegraphComponent,
    NotLoadedDirective,
    FailedDirective,
    StatefulButtonExampleComponent,
    LoadableExampleComponent,
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
    RouterModule
  ],
  exports: [
    StatefulButtonComponent
  ]
})
export class ElypianModule { }
