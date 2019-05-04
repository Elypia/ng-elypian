import {NgModule} from '@angular/core';
import {StatefulButtonComponent} from './stateful-button/stateful-button.component';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
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
import {ArticleComponent} from './article/article.component';
import {EqualsDirective} from './validators/equals/equals.directive';
import {EqualsValidatorExampleComponent} from '../../../docs/src/app/examples/equals-validator-example/equals-validator-example.component';

@NgModule({
  declarations: [
    StatefulButtonComponent,
    LoadableComponent,
    TimestampComponent,
    TimegraphComponent,
    NotLoadedDirective,
    FailedDirective,
    ArticleComponent,
    EqualsDirective,
    EqualsValidatorExampleComponent
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
    MatButtonToggleModule,
    MatExpansionModule,
    MatInputModule
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
