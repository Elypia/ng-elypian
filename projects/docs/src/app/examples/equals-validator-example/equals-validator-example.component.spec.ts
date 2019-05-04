import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EqualsValidatorExampleComponent} from './equals-validator-example.component';

describe('EqualsValidatorExampleComponent', () => {
  let component: EqualsValidatorExampleComponent;
  let fixture: ComponentFixture<EqualsValidatorExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EqualsValidatorExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EqualsValidatorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
