import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadableExampleComponent } from './loadable-example.component';

describe('LoadableExampleComponent', () => {
  let component: LoadableExampleComponent;
  let fixture: ComponentFixture<LoadableExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadableExampleComponent ]
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
