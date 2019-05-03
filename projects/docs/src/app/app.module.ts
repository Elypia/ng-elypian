import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatRadioModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {ComponentOverviewComponent} from './pages/component-overview/component-overview.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MarkdownModule, MarkdownModuleConfig, MarkedOptions} from 'ngx-markdown';
import {LoadableExampleComponent} from './examples/loadable-example/loadable-example.component';
import {StatefulButtonExampleComponent} from './examples/stateful-button-example/stateful-button-example.component';
import {TimestampExampleComponent} from './examples/timestamp-example/timestamp-example.component';
import {CodeExampleComponent} from './components/code-example/code-example.component';
import {ElypianModule} from '../../../elypian/src/lib/elypian.module';
import {FormsModule} from '@angular/forms';
import {ModifiedTimestampExampleComponent} from './examples/modified-timestamp-example/modified-timestamp-example.component';
import {TimestampFaExampleComponent} from './examples/timestamp-fa-example/timestamp-fa-example.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: ComponentOverviewComponent },
  { path: '**', redirectTo: '' },
];

const markdownOptions: MarkdownModuleConfig = {
  loader: HttpClient,
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
    TimestampFaExampleComponent
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
    ElypianModule,
    MatButtonToggleModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
    FormsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
  entryComponents: [
    LoadableExampleComponent,
    StatefulButtonExampleComponent,
    TimestampExampleComponent,
    ModifiedTimestampExampleComponent,
    TimestampFaExampleComponent
  ]
})
export class AppModule { }
