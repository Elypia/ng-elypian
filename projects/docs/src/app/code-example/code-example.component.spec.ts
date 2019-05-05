import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CodeExampleComponent} from './code-example.component';
import {MatButtonToggleModule, MatCardModule, MatIconModule, MatTabsModule} from '@angular/material';
import {MarkdownModule} from 'ngx-markdown';
import {CommonModule} from '@angular/common';

describe('CodeExampleComponent', () => {
  let component: CodeExampleComponent;
  let fixture: ComponentFixture<CodeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeExampleComponent ],
      imports: [
        MatCardModule,
        MatButtonToggleModule,
        MatIconModule,
        MatTabsModule,
        MarkdownModule,
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
