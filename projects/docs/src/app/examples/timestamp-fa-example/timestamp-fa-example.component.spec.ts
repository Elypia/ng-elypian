import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TimestampFaExampleComponent} from './timestamp-fa-example.component';
import {ElyTimestampModule} from '../../../../../elypian/src/lib/timestamp/timestamp.module';
import {MatIconModule} from '@angular/material';

describe('TimestampFaExampleComponent', () => {
  let component: TimestampFaExampleComponent;
  let fixture: ComponentFixture<TimestampFaExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimestampFaExampleComponent ],
      imports: [
        ElyTimestampModule,
        MatIconModule
      ]
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
