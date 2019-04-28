import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatefulButtonExampleComponent } from './stateful-button-example.component';

describe('StatefulButtonExampleComponent', () => {
  let component: StatefulButtonExampleComponent;
  let fixture: ComponentFixture<StatefulButtonExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatefulButtonExampleComponent ]
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
