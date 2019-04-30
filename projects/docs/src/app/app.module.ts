import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
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

const appRoutes: Routes = [
  { path: 'component/:id', component: ComponentOverviewComponent },
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
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MarkdownModule.forRoot(markdownOptions),
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
    TimestampExampleComponent
  ]
})
export class AppModule { }
