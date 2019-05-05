import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TimestampComponent} from './timestamp.component';
import {MatIconModule, MatTooltipModule} from '@angular/material';

describe('TimestampComponent', () => {
  let component: TimestampComponent;
  let fixture: ComponentFixture<TimestampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimestampComponent ],
      imports: [
        MatTooltipModule,
        MatIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimestampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
