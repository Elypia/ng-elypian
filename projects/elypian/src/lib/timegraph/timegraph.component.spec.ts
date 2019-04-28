import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimegraphComponent } from './timegraph.component';

describe('TimegraphComponent', () => {
  let component: TimegraphComponent;
  let fixture: ComponentFixture<TimegraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimegraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimegraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
