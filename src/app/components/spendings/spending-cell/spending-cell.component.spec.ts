import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingCellComponent } from './spending-cell.component';

describe('SpendingCellComponent', () => {
  let component: SpendingCellComponent;
  let fixture: ComponentFixture<SpendingCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpendingCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendingCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
