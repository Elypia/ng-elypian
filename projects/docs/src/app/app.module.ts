import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ElypianModule} from '../../../elypian/src/lib/elypian.module';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {MatButtonModule, MatMenuModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {ComponentOverviewComponent} from './pages/component-overview/component-overview.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MarkdownModule, MarkdownModuleConfig, MarkedOptions} from 'ngx-markdown';
import {LoadableExampleComponent} from './examples/loadable-example/loadable-example.component';
import {StatefulButtonExampleComponent} from './examples/stateful-button-example/stateful-button-example.component';

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
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MarkdownModule.forRoot(markdownOptions),
    BrowserModule,
    BrowserAnimationsModule,
    ElypianModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LoadableExampleComponent,
    StatefulButtonExampleComponent
  ]
})
export class AppModule { }
