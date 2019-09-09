import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingRowComponent } from './spending-row.component';

describe('SpendingRowComponent', () => {
  let component: SpendingRowComponent;
  let fixture: ComponentFixture<SpendingRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpendingRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendingRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
