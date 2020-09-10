import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ProgressLabelComponent} from './progress-label.component';

describe('PercentageComponent', () => {
  let component: ProgressLabelComponent;
  let fixture: ComponentFixture<ProgressLabelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProgressLabelComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
