import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ComponentOverviewComponent} from './component-overview.component';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MarkdownModule, MarkedOptions} from 'ngx-markdown';
import {RouterTestingModule} from '@angular/router/testing';
import {CodeExampleComponent} from '../code-example/code-example.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('ComponentOverviewComponent', () => {
  let component: ComponentOverviewComponent;
  let fixture: ComponentFixture<ComponentOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ComponentOverviewComponent,
        CodeExampleComponent
      ],
      imports: [
        RouterTestingModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatTabsModule,
        MatCardModule,
        BrowserAnimationsModule,
        MarkdownModule.forRoot({markedOptions: {provide: MarkedOptions}}),
        MatButtonToggleModule,
        MatIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
