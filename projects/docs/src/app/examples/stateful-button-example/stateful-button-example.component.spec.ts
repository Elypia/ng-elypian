import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StatefulButtonExampleComponent} from './stateful-button-example.component';
import {MatButtonModule, MatRadioModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ElyStatefulButtonModule} from '../../../../../elypian/src/lib/stateful-button/stateful-button.module';

describe('StatefulButtonExampleComponent', () => {
  let component: StatefulButtonExampleComponent;
  let fixture: ComponentFixture<StatefulButtonExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatefulButtonExampleComponent ],
      imports: [
        FormsModule,
        MatRadioModule,
        ElyStatefulButtonModule,
        MatButtonModule,
        CommonModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatefulButtonExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
