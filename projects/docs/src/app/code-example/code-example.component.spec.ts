import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CodeExampleComponent} from './code-example.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MarkdownModule, MarkdownService, MarkedOptions} from 'ngx-markdown';
import {CommonModule} from '@angular/common';

describe('CodeExampleComponent', () => {
  let component: CodeExampleComponent;
  let fixture: ComponentFixture<CodeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeExampleComponent ],
      providers: [
        MarkdownService
      ],
      imports: [
        MatCardModule,
        MatButtonToggleModule,
        MatIconModule,
        MatTabsModule,
        MarkdownModule.forRoot({markedOptions: {provide: MarkedOptions}}),
        CommonModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
