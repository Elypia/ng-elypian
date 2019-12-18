import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoadableExampleComponent} from './loadable-example.component';
import {ElyLoadableModule} from '../../../../../elypian/src/lib/loadable/loadable.module';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

describe('LoadableExampleComponent', () => {
  let component: LoadableExampleComponent;
  let fixture: ComponentFixture<LoadableExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadableExampleComponent ],
      imports: [
        FormsModule,
        ElyLoadableModule,
        MatButtonModule,
        MatRadioModule,
        CommonModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
