import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimestampExampleComponent } from './timestamp-example.component';

describe('TimestampExampleComponent', () => {
  let component: TimestampExampleComponent;
  let fixture: ComponentFixture<TimestampExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimestampExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimestampExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
