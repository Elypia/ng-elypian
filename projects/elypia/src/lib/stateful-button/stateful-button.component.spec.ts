import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StatefulButtonComponent} from './stateful-button.component';
import {ElyLoadableModule} from '../loadable/loadable.module';

describe('StatefulButtonComponent', () => {
  let component: StatefulButtonComponent;
  let fixture: ComponentFixture<StatefulButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatefulButtonComponent ],
      imports: [ ElyLoadableModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatefulButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
