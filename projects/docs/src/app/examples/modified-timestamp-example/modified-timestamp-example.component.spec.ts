import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiedTimestampExampleComponent } from './modified-timestamp-example.component';

describe('ModifiedTimestampExampleComponent', () => {
  let component: ModifiedTimestampExampleComponent;
  let fixture: ComponentFixture<ModifiedTimestampExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiedTimestampExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiedTimestampExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
