import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EqualsValidatorExampleComponent} from './equals-validator-example.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ElyEqualsModule} from '../../../../../elypia/src/lib/equals/equals.module';
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
