import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatRadioModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {ComponentOverviewComponent} from './component-overview/component-overview.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MarkdownModule, MarkdownModuleConfig, MarkedOptions} from 'ngx-markdown';
import {LoadableExampleComponent} from './examples/loadable-example/loadable-example.component';
import {StatefulButtonExampleComponent} from './examples/stateful-button-example/stateful-button-example.component';
import {TimestampExampleComponent} from './examples/timestamp-example/timestamp-example.component';
import {CodeExampleComponent} from './code-example/code-example.component';
import {FormsModule} from '@angular/forms';
import {ModifiedTimestampExampleComponent} from './examples/modified-timestamp-example/modified-timestamp-example.component';
import {TimestampFaExampleComponent} from './examples/timestamp-fa-example/timestamp-fa-example.component';
import {HttpClientModule} from '@angular/common/http';
import {EqualsValidatorExampleComponent} from './examples/equals-validator-example/equals-validator-example.component';
import {ElyLoadableModule} from '../../../elypian/src/lib/loadable/loadable.module';
import {ElyStatefulButtonModule} from '../../../elypian/src/lib/stateful-button/stateful-button.module';
import {ElyTimestampModule} from '../../../elypian/src/lib/timestamp/timestamp.module';
import {ElyEqualsModule} from '../../../elypian/src/lib/equals/equals.module';
import {RouterModule, Routes} from '@angular/router';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  { path: 'components/:id', component: ComponentOverviewComponent },
  { path: 'components', component: ComponentOverviewComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' },
];

const markdownOptions: MarkdownModuleConfig = {
  markedOptions: {
    provide: MarkedOptions,
    useValue: {
      tables: true,
    }
  }
};

@NgModule({
  declarations: [
    AppComponent,
    TimestampExampleComponent,
    CodeExampleComponent,
    LoadableExampleComponent,
    StatefulButtonExampleComponent,
    TimestampExampleComponent,
    ComponentOverviewComponent,
    ModifiedTimestampExampleComponent,
    TimestampFaExampleComponent,
    EqualsValidatorExampleComponent,
    ToolbarComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MarkdownModule.forRoot(markdownOptions),
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
    FormsModule,
    MatListModule,

    ElyLoadableModule,
    ElyStatefulButtonModule,
    ElyTimestampModule,
    ElyEqualsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
  entryComponents: [
    LoadableExampleComponent,
    StatefulButtonExampleComponent,
    TimestampExampleComponent,
    ModifiedTimestampExampleComponent,
    TimestampFaExampleComponent,
    EqualsValidatorExampleComponent
  ]
})
export class AppModule { }
