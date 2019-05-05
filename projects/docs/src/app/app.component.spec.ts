import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        MatToolbarModule,
        MatButtonModule,
        RouterTestingModule,
        CommonModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
