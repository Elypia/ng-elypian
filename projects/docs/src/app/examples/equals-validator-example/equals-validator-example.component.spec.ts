import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EqualsValidatorExampleComponent} from './equals-validator-example.component';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {ElyEqualsModule} from '../../../../../elypian/src/lib/equals/equals.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('EqualsValidatorExampleComponent', () => {
  let component: EqualsValidatorExampleComponent;
  let fixture: ComponentFixture<EqualsValidatorExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EqualsValidatorExampleComponent ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        ElyEqualsModule
      ]
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
