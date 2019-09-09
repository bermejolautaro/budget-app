import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingsTableComponent } from './spendings-table.component';

describe('SpendingsTableComponent', () => {
  let component: SpendingsTableComponent;
  let fixture: ComponentFixture<SpendingsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpendingsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
