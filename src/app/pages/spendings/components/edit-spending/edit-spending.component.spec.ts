import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpendingComponent } from './edit-spending.component';

describe('EditSpendingComponent', () => {
  let component: EditSpendingComponent;
  let fixture: ComponentFixture<EditSpendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSpendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
