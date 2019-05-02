import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TimestampFaExampleComponent} from './timestamp-fa-example.component';

describe('TimestampFaExampleComponent', () => {
  let component: TimestampFaExampleComponent;
  let fixture: ComponentFixture<TimestampFaExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimestampFaExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimestampFaExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
