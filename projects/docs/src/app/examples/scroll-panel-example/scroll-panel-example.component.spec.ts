import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ScrollPanelExampleComponent} from './scroll-panel-example.component';

describe('ScrollPanelExampleComponent', () => {
  let component: ScrollPanelExampleComponent;
  let fixture: ComponentFixture<ScrollPanelExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollPanelExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollPanelExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
